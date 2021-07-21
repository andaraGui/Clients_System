const express = require('express');
const router = express.Router();

const userController = require('../Controller/userController');


//USER MANAGMENT
router.get('/', userController.findAllUsers);
router.get('/:id', userController.findUserById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);





module.exports = router;