// No se pasen de lanza porfavor 🥺
const API_KEY = "7XJt6EZzEt0oLzrhQvxLqg==5qMLN4oxbO5b1DAp";

export const obtenerDatos = async () => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    if (!response.ok) throw new Error("Error en la peticion.");

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error: ", error.message);
    return [];
  }
};
