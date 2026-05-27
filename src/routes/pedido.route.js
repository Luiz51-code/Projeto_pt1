const express = require('express');

const route = express.Router();

const { listar, cadastrar } = require("../controllers/pedido.controller.js");

route.get("/listar", listar);
route.post("/cadastrar", cadastrar);

module.exports = route;