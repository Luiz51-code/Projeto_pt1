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
            idade: Number(idade)
        }
    });

    res.status(201).json(item).end();
}

const atualizar = async (req, res) => {

    const id = Number(req.params.id);
    const { nome, senha, email, idade } = req.body;

    const item = await prisma.usuario.update({
        where: {
            id
        },
        data: {
            nome,
            senha,
            email,
            idade: Number(idade)
        }
    });

    res.status(200).json(item).end();
}

const excluir = async (req, res) => {

    const id = Number(req.params.id);

    await prisma.usuario.delete({
        where: {
            id
        }
    });

    res.status(200).json({
        message: "Usuário excluído com sucesso"
    }).end();
}

module.exports = {
    listar,
    cadastrar,
    atualizar,
    excluir
};