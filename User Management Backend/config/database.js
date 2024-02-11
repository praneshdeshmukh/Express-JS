const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URI;
const dbConnection = async () => {
    await mongoose.connect(MONGO_URL, 
    { useNewUrlParser: true})
    .then((conneced) => {        
        console.log(`CONNECTED TO DB : ${conneced.connection.host} `,conneced.connection.readyState)
    })
   .catch ((error) => {
        console.log(error.message);
        process.exit(1)
    })
}

module.exports = dbConnection;
