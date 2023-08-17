require('dotenv').config();

const PORT = process.env.PORT || 5001;

const app = require('./app.js');

app.listen(PORT, (err) => {
    if(err) {
        console.log("404 Server not found")
    }
    console.log(`Server Up At : http://localhost:${PORT}`)
})
