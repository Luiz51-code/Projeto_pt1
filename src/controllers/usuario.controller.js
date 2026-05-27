const prisma = require("../data/prisma.js");

const listar = async (req, res) => {
    const lista = await prisma.usuario.findMany();
    res.status(200).json(lista).end();
}

const cadastrar = async (req, res) => {
    const { nome, senha, email, idade } = req.body;

    const item = await prisma.usuario.create({
        data: {
            nome,
            senha,
            email,
            idade
        }
    })
    res.status(201).json(item).end();
}

module.exports = {
    listar,
    cadastrar
};