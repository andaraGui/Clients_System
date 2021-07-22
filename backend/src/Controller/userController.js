const { updateMany } = require('../Models/userModel');
const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');

class UserController {

    //ADD USER METHOD
    async createUser(req, res) {
        const email = req.body.email;
        const name = req.body.name;
        bcrypt.hash(req.body.password, 10)
            .then(async (hashedPassword) => {
                await userModel.insertMany({ email: email, password: hashedPassword, name: name })
                    .then(response => {
                        res.status(200).json({message: `Dados inseridos na database com sucesso!`});
                    })
                    .catch(error => {
                        res.status(500).json({ message: `alguma coisa deu errado durante a inserção dos dados na Database! ERROR: ${error}` });
                    })
            })
            .catch(error => {
                res.status(500).json({ message: `alguma coisa deu errado! ERROR:${error}` });
            })

    }

    //FIND ONE USER BY EMAIL METHOD
    async LoginHandler(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        await userModel.findOne({ email: email }, 'password').exec(async (err, user) => {
            if (err)
                return res.status(500).json({ message: `alguma coisa deu errado! ${error}` })
            if (!user)
                return res.status(400).json({ message: `Email e/ou Senha invalido(s)` })

            const passwordMatch = await bcrypt.compare(password, user.password);
            
            if (passwordMatch)
            return res.status(200).json({ message: `Logged in` })
            else
            return res.status(400).json({ message: `Email e/ou Senha invalido(s)` })
            
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