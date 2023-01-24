const express = require('express');
var cors = require('cors')
const app = express();              
const port = 3333;  

app.use(cors()) 

app.get('/', (req, res) => {       
    res.send('Hello World, here is our API!');                                                              
});

app.get('/api/v1/get_data', (req, res) => {
    const { query, body } = req;
    console.log(query);
    // console.log(body);
    res.send(query);
});

app.listen(port, () => {           
    console.log(`Now listening on port ${port}`); 
});