const express = require('express');
const clientRouter = require('./Routes/clientRouter');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clients', clientRouter)



app.listen(3333, () => {
    console.log('server running ok');
});


