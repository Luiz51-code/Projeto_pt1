const express = require('express');

const route = express.Router();

const { listar, cadastrar, atualizar, excluir } = require("../controllers/pedido.controller.js");

route.get("/listar", listar);
route.post("/cadastrar", cadastrar);
route.put("/atualizar/:id", atualizar);
route.delete("/excluir/:id", excluir);

module.exports = route;