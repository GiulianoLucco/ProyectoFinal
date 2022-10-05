const express = require("express");
const { Carrito } = require("../clases/Carrito.class.js");

const routerCarrito = express.Router();

const carrito = new Carrito();

routerCarrito.post("/", (req, res) => {
  const carritoCreado = carrito.crearCarrito();
  res.send(carritoCreado);
});

routerCarrito.delete("/:id", async (req, res) => {
  const carritoBorrado = await carrito.borrar(req.params.id);
  console.log(carritoBorrado);
  res.send(carritoBorrado);
});

routerCarrito.get("/", async (req, res) => {
  const listaCarrito = await carrito.listarAll();
  res.send(listaCarrito);
});
routerCarrito.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const prodCarr = await carrito.listar(id);
  res.send(prodCarr ?? { error: "no se encontro carrito" });
});

routerCarrito.post("/:id/productos/:idProd", async (req, res) => {
  const id = Number(req.params.id);
  const idProd = Number(req.params.idProd);
  const respuesta = await carrito.guardarProductoEnCarrito(idProd, id);
  console.log(respuesta);
  res.send(respuesta);
});

module.exports = { routerCarrito };
