//Inicio con npm init -y para que se cree el package
//Luego instalo express con npm i express. Instala node modules con una carpeta express

console.log('Proximamente express');

import express from 'express'; //Al hacer esto traigo todo el modulo de express
import productsRouter from "./src/routes/products.router.js";
import usersRouter from "./src/routes/users.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

//Get index
app.get("/", (req, res) => {
  res.send(`
    <h1>API de Productos</h1>
    <p>Servidor funcionando correctamente</p>
  `);
});

app.use(productsRouter);
app.use(usersRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});