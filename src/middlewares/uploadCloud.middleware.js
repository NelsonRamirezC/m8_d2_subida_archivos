import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.STORAGE_NAME,
    api_key: process.env.STORAGE_KEY,
    api_secret: process.env.STORAGE_SECRET,
});

export const uploadFiles = (req, res, next) => {
    try {
        let foto = req.files.foto;
        let formatosPermitidos = ["jpeg", "png", "webp", "gif", "svg"];
        let extension = `${foto.mimetype.split("/")[1]}`;

        if (!formatosPermitidos.includes(extension)) {
            return res.status(400).json({
                code: 400,
                message: `Formato no permitido ${extension}, formatos permitidos(${formatosPermitidos.join(
                    " - "
                )})`,
            });
        };

        cloudinary.uploader
            .upload_stream({ resource_type: "auto" }, async (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({
                        code: 500,
                        message:
                            "Error al subir la imagen en proceso de creación de producto.",
                    });
                }
                console.log(result);
                req.nombreImagen = foto.name;
                req.pathImagen = result.url;
                req.imagenId = result.public_id;
                next();
            }).end(foto.data);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ code: 500, message: "Error al procesar solicitud." });
    }
};


export const deleteFile = (imagenId) => {
    cloudinary.uploader.destroy(imagenId, (error, result) =>{
        if (error) {
            return console.log("Error al eliminar la imagen del servicio cloud: ", error);
        }
        console.log(`Imagen con ID: ${imagenId} ha sido eliminada con éxito el servicio cloud.`);
    });
}
