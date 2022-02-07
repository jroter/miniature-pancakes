const { Router } = require('express');
const express = require('express');
const router = express.Router();
const dynamo = require('./dynamoClient')

router.get('/', function(request, response) {
    dynamo.getModuleLikeDislike('Module 2');
    response.send('GET route on things.');
})

router.post('/', function(request, response) {
    response.send('POST route on things.');
});


//export this router to use in our index.js
module.exports = router;