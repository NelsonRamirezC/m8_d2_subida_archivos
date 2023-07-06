import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js"
const router = Router();

//ruta post usuarios
router.get("/home", (req, res) => {
    res.send("vista home");
})
router.get("/perfil", verifyToken, async (req, res) => {
    let usuario = req.usuario;
    res.send(`<h1>Bienvenido usuario: ${usuario.nombre}</h1>`);
});

export default router;