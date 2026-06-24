require('dotenv').config()
const express= require('express');
const app= express();
//can use a lot of app. functions
const port= 3000

app.get('/', async (req, res)=> {
    res.send('hello')
});

app.get('/twitter', async (req, res) => {
    res.send('hiteshdotcom')
});

app.get('/login', async (req, res) => {
    res.send('<h1> please login at cac </h1>')
});

app.get('/youtube', (req, res) => {
    res.send('<h2>cac</h2>')
}); 

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`)
});