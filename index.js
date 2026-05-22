//Inicio con npm init -y para que se cree el package
//Luego instalo express con npm i express. Instala node modules con una carpeta express

console.log('Proximamente express');

import express from 'express'; //Al hacer esto traigo todo el modulo de express
import productsRouter from "./src/routes/products.router.js";

const app = express();

app.use(express.json());

//Get index
app.get("/", (req,res) => {
    res.send("Hola Mundo");
});

app.use(productsRouter);

//Middleworld
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.listen(3000, () => console.log("http://localhost:3000"));