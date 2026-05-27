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

const atualizar = async (req, res) => {

    const id = Number(req.params.id);
    const { produto, usuarioId } = req.body;

    const item = await prisma.pedido.update({
        where: {
            id
        },
        data: {
            produto,
            usuarioId
        }
    });

    res.status(200).json(item).end();
}

const excluir = async (req, res) => {

    const id = Number(req.params.id);

    await prisma.pedido.delete({
        where: {
            id
        }
    });

    res.status(200).json({
        message: "Pedido excluído com sucesso"
    }).end();
}

module.exports = {
    listar,
    cadastrar,
    atualizar,
    excluir
}