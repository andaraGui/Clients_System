const express = require('express');
const userRouter = require('./Routes/userRouter');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter)



app.listen(3000, () => {
    console.log('server running ok');
});


