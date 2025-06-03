<template>
  <h1>Seleciona el Pokemon Correcto</h1>

  <pokemon-image :pokemonId="50" :mostrarImagen="false" />
  <PokemonOptions />
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },
};
</script>

<style>
</style>
PokemonImage