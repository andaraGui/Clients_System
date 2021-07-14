const express = require('express');
const controller = require('./Controller/userController');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('/allusers', controller.findAllUsers);
app.get('/user/:id', controller.findUserById);

app.post('/adduser', controller.addUser);

app.delete('/deleteuser/:id', controller.deleteUser);
app.put('/updateuser/:id', controller.updateUser);

app.listen(3000, () => {
    console.log('server running ok');
})


