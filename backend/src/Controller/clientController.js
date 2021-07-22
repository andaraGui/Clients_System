const clientModel = require('../Models/clientModel');

class UserController {

    //ADD USER METHOD
    async addClient(req, res) {
        await clientModel.insertMany({ name: req.body.name, email: req.body.email, phone: req.body.phone, user_id: req.user_id })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

    //FIND ALL USERS METHOD
    async findAllClients(req, res) {
        await clientModel.find({ "user_id": { $in: [req.user_id] } })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ERROR:${error}` })
            })
    }

    //FIND ONE USER BY ID METHOD
    async findClientById(req, res) {
        const id = req.params.id
        await clientModel.findOne({ _id: id })
            .then(response => {
                if (response.user_id === req.user_id) {
                    res.status(200).json(response);
                } else {
                    res.status(500).json({ message: `Usuário não autorizado. ERROR:${error}` })
                }

            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ERROR:${error}` })
            })
    }

    //DELETE CLIENT BY ID METHOD
    async deleteClient(req, res) {
        const _id = req.params.id;
        await clientModel.findByIdAndDelete(_id)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu erradoo! ${error}` })
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