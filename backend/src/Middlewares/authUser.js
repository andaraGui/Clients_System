const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

const secretToken = process.env.JWT_TOKEN;

function authUser(req, res, next) {

    const authToken = req.headers.authorization
    if (!authToken)
        return res.status(401).json({ message: 'Token de autentificação não encontrado!' }).end()

    try {
        const decodedToken = jwt.verify(authToken, secretToken);
        req.user_id = decodedToken.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Usuário não autorizado!' }).end()

    }
}

module.exports = authUser;