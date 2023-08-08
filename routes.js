const express = require('express')

const app = express()

const PORT = 4000

const HOSTNAME = "localhost"

app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>');
})
app.get('/about', (req,res) => {
    res.send('About Page!');
})
app.get('/contact', (req,res) => {
    res.send('Contact Page!');
})

app.listen(PORT, () => {
    console.log(`Server is up at ${HOSTNAME}:${PORT}`);
})
