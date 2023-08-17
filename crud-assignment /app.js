const express = require('express');

const app = express();

const router = require('./routes/myRoutes')

const dbToConnect = require('./config/database')

const cors = require('cors');

dbToConnect()

app.use(express.json()) // parses data into json
const corsOptions = {
    origin: [process.env.URL],
    optionsSuccessStatus: true,
    credentials: true
}
app.use(cors(corsOptions))

// app.use(express.urlencoded({extended: true}))
// some routes / router code
app.use('/',router)

app.use('/', (req,res) => {
    res.status(200).json({
        data: "Hello There! This is Pranesh Deshmukh's project "
    }) 
})


module.exports = app;
