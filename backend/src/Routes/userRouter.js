const express = require('express');
const router = express.Router();

const userController = require('../Controller/userController');

router.get('/', userController.findAllUsers);
router.get('/:id', userController.findUserById);
router.post('/adduser', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;