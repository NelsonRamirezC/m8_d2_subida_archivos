import { Router } from "express";
import { addUsuario } from "../controllers/usuarios.controllers.js";
const router = Router();



//ruta post usuarios
router.post("/", addUsuario);

export default router;
