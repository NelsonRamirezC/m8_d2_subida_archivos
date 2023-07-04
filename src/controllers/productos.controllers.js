import Producto from "../models/Producto.models.js";
import fs from "fs";

export const findAllProductos = (req, res) => {
    res.send("Ruta findAll Productos.");
};

export const addProductos = async (req, res) => {
    //console.log(req.body);
    let { nombre, descripcion, precio } = req.body;
    //req.nombreImagen -> viene desde middleware
    //req.pathImagen ->viene desde middleware
    try {
        let nuevoProducto = {
            nombre,
            descripcion,
            precio: Number(precio),
            img: req.nombreImagen,
        };

        let productoCreado = await Producto.create(nuevoProducto);

        res.status(201).json({
            code: 201,
            message: "Producto creado con éxito.",
            data: productoCreado,
        });
    } catch (error) {
        console.log(error);
        fs.unlinkSync(req.pathImagen);
        res.status(500).json({code: 500, message:"Error al crear el producto en la base de datos."})
    }

};
