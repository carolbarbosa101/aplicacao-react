const express = require('express');
const routes = express.Router();
const users = [{
    //criei um usuario fixo apenas para fim de testar meu login
    id: 1,
    name: 'Carol',
    email: 'carol@email.com',
    password: '123456'
}]

//nossa rota precisa sempre ter o objeto de request e response.
routes.post('/login', (req, res) =>{
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
       return res.status(200).json(user);
    }
    return res.status(401).json({message: 'Invalid credentials'});
});

module.exports = routes;