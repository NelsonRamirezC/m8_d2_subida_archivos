import { Router } from "express";
import { findAllProductos, addProductos } from "../controllers/productos.controllers.js"
const router = Router();

//ruta findAll productos
router.get("/", findAllProductos);

//ruta post productos
router.post("/", addProductos);


export default router;
