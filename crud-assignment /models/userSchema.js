 const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const {Schema} = mongoose

 const schema = new Schema({
    name : {
        type: String,
        require : [true, 'Name is Required'],
        minlenght : [5, 'Name too short..'],
        maxlenght : [25, 'Name too long..'],
        trim : true
    },
    email : {
        type : String,
        require : [true, 'Email is required'],
        unique : true,
        lowercase: true,
        unique : [true, "Already registered"]
    },
    password : {
        type: String,
        require : [true, "user password invalid"]
    }
 }, {
    timestamps: true
 });
// to encrypt password
//  schema.pre('save',async (next) => {
//     if(!this.isModified) {
//         return next();
//     }
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds)
//     return next();
//  });
 module.exports = mongoose.model("User", schema);
