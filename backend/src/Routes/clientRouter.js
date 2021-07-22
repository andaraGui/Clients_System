const express = require('express');
const router = express.Router();

const clientController = require('../Controller/clientController');
const authUser = require('../Middlewares/authUser');

router.get('/', authUser, clientController.findAllClients);
router.get('/:id', authUser, clientController.findClientById);
router.post('/', authUser, clientController.addClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;