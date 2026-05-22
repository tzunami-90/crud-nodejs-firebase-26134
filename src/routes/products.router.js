//Cada recurso tendra su router
import {Router} from "express"; //Importo solo una parte del modulo express
import { getProductById, getProducts, createProduct, deleteProduct } from "../controllers/products.controller.js";

const router = Router(); //Instnacia e objeto q maneja las rutas

//Get listado de productos
router.get('/products', getProducts);
//Get por id
router.get("/products/:id", getProductById);
//Post nuevo porducto
router.post("/products", createProduct);
//Delete producto id
router.delete("/products/:id", deleteProduct);

export default router;