export const findAllProductos = (req, res) => {
    res.send("Ruta findAll Productos.")
}

export const addProductos = (req, res) => {
    res.status(201).send("Ruta post productos.")
};