import { obtenerDatos } from "./api.js";
import { generateQuoteContainer } from "./quotes.js";

export const mainFunc = async () => {
    const result = await obtenerDatos();

    if (result.length === 0) {
        console.log("No hay datos disponibles");
        return;
    }

    const main = document.getElementById("main");
    generateQuoteContainer(result[0], main);
}
