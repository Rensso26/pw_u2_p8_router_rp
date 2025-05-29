<template>
  <div class="container">
    <div class="imagenes-container">
      <div
        v-for="(imagen, index) in imagenes"
        :key="index"
        class="imagen-wrapper"
      >
        <img :src="imagen" alt="No se pudo cargar la carta" />
      </div>
    </div>
    <div class="cargando" v-show="mostrar">
      <h1>Abriendo sobre ...</h1>
    </div>
    <button v-on:click="consumirAPI()">Abrir Sobre</button>
  </div>
</template>

<script>
import { consultarCartasFachada } from "@/clients/PokemonTCG.js";

export default {
  data() {
    return {
      imagenes: [],
      mostrar: false,
    };
  },
  methods: {
    async consumirAPI() {
      this.mostrar = true;
      const cartas = await consultarCartasFachada();

      const gx = cartas.filter(carta =>
        carta.supertype === "Pokémon" && carta.subtypes?.includes("EX")
      );
      const normales = cartas.filter(carta =>
        !(carta.supertype === "Pokémon" && carta.subtypes?.includes("EX"))
      );
      const primerasTres = normales.sort(() => 0.5 - Math.random()).slice(0, 3);
      const ultimasDos = [];
      for (let i = 0; i < 2; i++) {
        const esGX = Math.random() < 0.6;
        const pool = esGX && gx.length > 0 ? gx : normales;
        const carta = pool[Math.floor(Math.random() * pool.length)];
        ultimasDos.push(carta);
      }

      const seleccionadas = [...primerasTres, ...ultimasDos];
      this.imagenes = seleccionadas.map(carta => carta.images.large);
      this.mostrar = false;
    }
  }
};
</script>

<style scoped>
.container {
  border: 2px solid;
  border-radius: 5px;
  max-width: 1500px;
  margin: 120px auto;
  padding: 30px;
}

.imagenes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.imagen-wrapper {
  flex: 1 0 30%;
  display: flex;
  justify-content: center;
  margin: 10px;
}

img {
  width: 220px;
  border-radius: 8px;
  box-shadow: 0 4px 8px;
}

button {
  background: orange;
  color: white;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
}

.cargando {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
