const express = require('express');
const cors = require('cors');
const app = express();

const moduleRoutes = require('./routes/modules.js');

//both index.js and modules.js should be in the same directory
app.use(cors());
app.use('/module', moduleRoutes);

app.get('/user', (req, res)=> {
    const dynamoRecord = {name:'Josh R',favoriteMod:'module 1'}
    res.send(dynamoRecord);
})

app.listen(4000, () => {
    console.log('Listening on port: 4000')
});