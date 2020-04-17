const mongoose = require('mongoose');

const SecretSchema = new mongoose.Schema({


    usr_id: String,
    salt: String,



})


module.exports = mongoose.model('secrets', SecretSchema); 