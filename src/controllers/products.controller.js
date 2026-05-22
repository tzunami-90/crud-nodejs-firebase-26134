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


export const getProducts =  (req,res) => { //exportacion nombrada se mantiene el nombre
    res.send(products);
};

export const getProductById = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).send({
            mensaje: "Producto no encontrado"
        });
    }

    res.send(product);
};
//Create nuevo producto
export const createProduct = (req,res) => {
    const { nombre, precio } = req.body;

    if(!nombre || !precio){
        return res.status(400).json({
            message: "Faltan datos obligatorios",
        });
    }

    const newProduct = {
        id: products.length +1,
        nombre,
        precio
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
}

//Delete producto
export const deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    const productIndex = products.findIndex((product) => product.id === id);

    if(productIndex === -1){
        return res.status(400).json({
            message: "Producto no encontrado",
        });
    }

    const deletedProduct = products.splice(productIndex,1);

    res.json({
        message: "Producto eliminado",
        product: deleteProduct[0],
    });
};