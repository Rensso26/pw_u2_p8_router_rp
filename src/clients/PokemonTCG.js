import axios from "axios";

const consultarCartas = async () => {
  const totalPages = 72;
  const paginaAleatoria = Math.floor(Math.random() * totalPages) + 1;

  const respuesta = await axios.get(
    `https://api.pokemontcg.io/v2/cards?page=${paginaAleatoria}&pageSize=100`
  );

  return respuesta.data.data;
};

// Función fachada
export const consultarCartasFachada = async () => {
  return await consultarCartas();
};
