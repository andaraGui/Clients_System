const clientModel = require('../Models/clientModel');

class UserController {

    //ADD USER METHOD
    async addClient(req, res) {
        await clientModel.insertMany(req.body)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

    //FIND ALL USERS METHOD
    async findAllClients(req, res) {
        await clientModel.find()
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

    //FIND ONE USER BY ID METHOD
    async findClientById(req, res) {
        const id = req.params.id
        await clientModel.findOne({ _id: id })
            .then(response => {
                res.status(200).json(response);
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

    //DELETE USER BY ID METHOD
    async deleteClient(req, res) {
        const _id = req.params.id
        await clientModel.findByIdAndDelete(_id)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

    //UPDATEUSER BY ID METHOD
    async updateClient(req, res) {
        const id = req.params.id
        await clientModel.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

}

module.exports = new UserController();