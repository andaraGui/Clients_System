const express = require('express');
const router = express.Router();

const clientController = require('../Controller/clientController');

router.get('/', clientController.findAllClients);
router.get('/:id', clientController.findClientById);
router.post('/', clientController.addClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;