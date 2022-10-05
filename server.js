const express = require("express");
const { routerCarrito } = require("./routes/carrito.routes.js");
const { routerProductos } = require("./routes/productos.routes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/productos", routerProductos);
app.use("/carritos", routerCarrito);

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en el servidor ${error}`));
