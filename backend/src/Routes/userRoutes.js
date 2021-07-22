const express = require('express');
const router = express.Router();

const userController = require('../Controller/userController');


//USER MANAGMENT
router.post('/auth', userController.LoginHandler);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);//***
router.delete('/:id', userController.deleteUser); //***





module.exports = router;