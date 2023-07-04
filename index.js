import app from "./src/app.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3001;

const main = () => {
    app.listen(PORT, () =>
        console.log("Servidor escuchando en puerto: " + PORT)
    );
};

main();
