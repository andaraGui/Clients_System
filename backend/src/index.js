const express = require('express');
const userRouter = require('./Routes/userRouter');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter)



app.listen(3333, () => {
    console.log('server running ok');
});


