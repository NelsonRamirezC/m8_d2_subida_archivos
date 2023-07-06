import Usuario from "../models/Usuario.models.js";

export const addUsuario = async (req, res) => {
    try {
        let { nombre, rut, correo, password } = req.body;
        let nuevoUsuario = await Usuario.create({
            nombre,
            rut,
            correo,
            password,
        });
        res.status(201).json({
            code: 201,
            message: `Se ha creado el usuario ${nombre}, con ID: ${nuevoUsuario.id}`,
        });
    } catch (error) {
        res.status(500).json({code: 500, message: "Error al crear el usuario."})
    }
};
