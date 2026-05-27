const prisma = require('../data/prisma.js');

const listar = async (req, res) => {
    const listar = await prisma.pedido.findMany();

    res.status(200).json(listar).end();
}

const cadastrar = async (req, res) => {

    const { produto, usuarioId } = req.body;

    const item = await prisma.pedido.create({
        data: {
            produto,
            usuarioId
        }
    });

    res.status(201).json(item).end();
}

module.exports = {
    listar,
    cadastrar
}