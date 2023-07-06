import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.models.js";

export const emitToken = async (req, res, next) => {
    let { email, password } = req.body;
    let usuario = await Usuario.findOne({
        where: { email, password },
        attributes: ["id", "nombre", "rut", "email"],
    });

    if (!usuario) {
        return res
            .status(400)
            .json({ code: 400, message: "Error de autenticación." });
    }
    let token = jwt.sign(JSON.stringify(usuario), process.env.PASSWORD_SECRET);
    req.token = token;
    next();
};
