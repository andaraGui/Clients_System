const mongoose = require('../Database/database');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {  
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('user', userSchema);