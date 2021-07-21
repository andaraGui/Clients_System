const express = require('express');
const cors = require('cors');

//ROUTES
const clientRouter = require('./Routes/clientRouter');
const userRouter = require('./Routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clients', clientRouter)
app.use('/users', userRouter)


app.listen(3333, () => {
    console.log('server running ok');
});


