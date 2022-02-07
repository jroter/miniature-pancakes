
const express = require('express');
const cors = require('cors');
const app = express();

const things = require('./things.js');

//both index.js and things.js should be in the same directory
app.use(cors())
app.use('/things', things)

app.get('/things/:name/:id', (req, res)=> {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });

 app.get('/user', (req, res)=> {
     const dynamoRecord = {name:'Josh R',favoriteMod:'module 1'}
     res.send(dynamoRecord);
 })

app.listen(4000);