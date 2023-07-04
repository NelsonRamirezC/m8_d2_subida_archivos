import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const findAllProductos = (req, res) => {
    res.send("Ruta findAll Productos.");
};

export const addProductos = (req, res) => {
    //console.log(req.body);
    //console.log(req.files);
    let foto = req.files.foto;
    let formatosPermitidos = ["jpeg", "png", "webp", "gif", "svg"];
    let extension = `${foto.mimetype.split("/")[1]}`;

    if (!formatosPermitidos.includes(extension)) {
        return res
            .status(400)
            .json({
                code: 400,
                message: `Formato no permitido ${extension}, formatos permitidos(${formatosPermitidos.join(" - ")})`,
            });
    }
    let nombreFoto = `${Date.now()}-img.${extension}`;
    let pathDestino = path.join(__dirname, "/../../public/uploads", nombreFoto);
    //console.log(pathImagen);
    //console.log(nombreFoto);
    foto.mv(pathDestino, (error) => {
        if (error) return res.status(500).json({ code: 500, message: "Error al subir la imagen." })
        res.status(201).json({
            code: 201,
            message: "La imagen se cargó con éxito",
            data: { img: nombreFoto },
        });
    });
};
