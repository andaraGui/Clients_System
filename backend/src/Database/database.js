const mongoose = require('mongoose');
const dotenv = require('dotenv')


dotenv.config({ path: 'config.env' });
const uri = process.env.MONGOURI;

mongoose.connect(uri, {useUnifiedTopology:true, useNewUrlParser:true}, (req, res) =>{
    console.log('database running ok');
});

module.exports = mongoose;