//Inicio con npm init -y para que se cree el package
//Luego instalo express con npm i express. Instala node modules con una carpeta express

console.log('Proximamente express');

import express from 'express';

const app = express();

// Array de productos
const products = [
    {
        id: 1,
        nombre: "Remera",
        precio: 15000
    },
    {
        id: 2,
        nombre: "Pantalón",
        precio: 30000
    }
];

//Get index
app.get("/", (req,res) => {
    res.send("Hola Mundo");
});

//Get listado de productos
app.get('/products', (req,res) => {
    res.send(products);
});

//Get id de producto
/*app.get("/products/:id", (req,res) => {
    res.send(`Producto ${req.params.id}`);
});*/
app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).send({
            mensaje: "Producto no encontrado"
        });
    }

    res.send(product);
});

//Middleworld
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.listen(3000, () => console.log("http://localhost:3000"));