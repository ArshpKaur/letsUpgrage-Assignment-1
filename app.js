const express = require('express');
const app = express();

//home route

app.get('/', (req, res) => {
    res.send('This is homepage')
});

//about route

app.get('/about', (req, res) => {
    res.send('This is about route')
});


app.listen(5500, () => {
    console.log('Server is running on port 5500')
});