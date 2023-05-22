const mongoose = require('mongoose');

//Define shema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 2,
        match: /^[a-zA-Z0-9]+$/,
        unique: true
    },
    password: {
        type:String,
        minLength: 8,
        maxLength: 20,
        required: true,
        //Minimum eight characters, at least one letter and one number:
        match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    },
    email: {
        type:String,
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    mobile: {
        type:String,
        minLength:11,
        maxLength:11,
        match: /^[0-9]+$/
    }
  });

//Create model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

