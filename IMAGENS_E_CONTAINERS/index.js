const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({message: "Olá mundo!"});
})

app.listen(3000, () => {
    console.log('server on!') 
})