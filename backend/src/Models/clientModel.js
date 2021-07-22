const mongoose = require('../Database/database');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {  
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Client', clientSchema);