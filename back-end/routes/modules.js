const express = require('express');
const router = express.Router();
const dynamo = require('../clients/dynamo');

//Middleware for logging

router.get('/', (req, res) => {
    const modDetails = {
        currentMod: 'Module 2.3', 
        subject: 'how to finance'
    };

    res.send(modDetails)
});

router.get('/allmodules', async (req, res) => {
    const dynamoResponse = await dynamo.getAllModulesInfo();
    res.send(dynamoResponse);
})

router.get('/:moduleId', async (req, res) => {
    const moduleId = req.params.moduleId;
    const dynamoResponse = await dynamo.getModuleInfo(moduleId);
    res.send(dynamoResponse);
});

router.post('/:moduleId/visits', async (req, res) => {
    const moduleId = req.params.moduleId;
    const dynamoResponse = await dynamo.addVisit(moduleId);
    res.send(dynamoResponse);
});

router.post('/:moduleId/like', async (req, res) => {
    const moduleId = req.params.moduleId;
    const dynamoResponse = await dynamo.addLike(moduleId);
    res.send(dynamoResponse);
});

router.post('/:moduleId/dislike', async (req,res) => {
    const moduleId = req.params.moduleId;
    const dynamoResponse = await dynamo.addDisLike(moduleId);
    res.send(dynamoResponse);
});

//export this router to use in our index.js
module.exports = router;
