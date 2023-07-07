import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = Router();

//ruta post usuarios
router.get(["/home", "/"], (req, res) => {
    res.render("home");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/registro", (req, res) => {
    res.render("registro");
});

router.get("/perfil", verifyToken, async (req, res) => {
    let usuario = req.usuario;
    res.send(`<h1>Bienvenido usuario: ${usuario.nombre}</h1>`);
});

export default router;
