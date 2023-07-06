import { Router } from "express";
import { findAllProductos, addProductos } from "../controllers/productosCloud.controllers.js";
//import upload from "../middlewares/upload.middleware.js"
import upload from "../middlewares/uploadCloud.middleware.js";
const router = Router();

//ruta findAll productos
router.get("/", findAllProductos);

//ruta post productos
router.post("/", upload, addProductos);


export default router;
