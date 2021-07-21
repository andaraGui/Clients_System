const userModel = require('../Models/userModel');

class UserController {

    //ADD USER METHOD
    async addUser(req, res) {
        await userModel.insertMany(req.body)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

    //FIND ONE USER BY LOGIN METHOD
    async findUserByLogin(req, res) {
        await userModel.findOne()
            .then(response => {
                res.status(200).json(response);
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

    //DELETE USER BY ID METHOD
    async deleteUser(req, res) {
        const _id = req.params.id
        await userModel.findByIdAndDelete(_id)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

    //UPDATEUSER BY ID METHOD
    async updateUser(req, res) {
        const id = req.params.id
        await userModel.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            })
    }

}

module.exports = new UserController();