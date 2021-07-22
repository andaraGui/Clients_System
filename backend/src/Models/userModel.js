const mongoose = require('../Database/database');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {  
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('user', userSchema);