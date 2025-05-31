<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" type="text" id="id_nombre" />
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" type="text" id="id_apellido" />
    <label for="id_edad">Edad:</label>
    <input v-model="nuevaEdad" type="number" id="id_edad" />
    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" type="text" id="id_genero" />
    <label for="id_color">Color Preferido:</label>
    <input v-model="nuevoColorPreferido" type="text" id="id_color" />
    <button v-on:click="agregarEstudiante()">Agregar</button>
    <ul>
      <li
        v-for="{ nombre, apellido, edad, genero, colorPreferido } in lista"
        :key="nombre"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} -
        {{ genero }} - {{ colorPreferido }}
      </li>
    </ul>
    <button v-on:click='obtenerPathVariable()'>Path Variable</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "Nuevo",
      nuevoApellido: "Apellido",
      nuevaEdad: 0,
      nuevoGenero: "Neutro",
      nuevoColorPreferido: "Celeste",
      lista: [
        {
          nombre: "Rensso",
          apellido: "Parra",
          edad: 24,
          genero: "Masculino",
          colorPreferido: "rojo",
        },
        {
          nombre: "Emil",
          apellido: "Verkade",
          edad: 22,
          genero: "Masculino",
          colorPreferido: "verde",
        },
        {
          nombre: "Joel",
          apellido: "falso",
          edad: 24,
          genero: "Masculino",
          colorPreferido: "azul",
        },
        {
          nombre: "Kevin",
          apellido: "Andrade",
          edad: 21,
          genero: "Masculino",
          colorPreferido: "negro",
        },
        {
          nombre: "Kevin",
          apellido: "NoAndrade",
          edad: 23,
          genero: "Masculino",
          colorPreferido: "blanco",
        },
        {
          nombre: "Jordy",
          apellido: "Chamba",
          edad: 26,
          genero: "Masculino",
          colorPreferido: "naranja",
        },
        {
          nombre: "Brayan",
          apellido: "Sikario",
          edad: 27,
          genero: "Masculino",
          colorPreferido: "amarillo",
        },
      ],
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        genero: this.nuevoGenero,
        colorPreferido: this.nuevoColorPreferido,
      };
      /*this.lista.unshift(nuevo);*/
      this.lista.push(nuevo);
    },
     obtenerPathVariable(){
      const cedula = this.$route.params.cedula;
      console.log(cedula);

      const anio = this.$route.query.anio;
      console.log(anio);
      const mes = this.$route.query.mes;
      console.log(mes);
    },
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log("Create")
  },
  beforeMount(){ 
    console.log('BeforeMount')
  },
  mounted(){
     const cedula = this.$route.params.cedula;
      console.log(cedula);
      const anio = this.$route.query.anio;
      console.log(anio);
      const mes = this.$route.query.mes;
      console.log(mes);
      console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('update')
  },
  beforeUnmount(){
    console.log('beforeUnmont')
  },
  unmounted(){
    console.log('unmounted')
  }
};
</script>

<style scoped>
.container {
  background: white;
  border: 2px solid;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
}
label{
  display: block;
  color: #666;
  text-align: left;
  padding: 12px 3px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
input{
  display: block;
  background-color: #e6637fb9;
  color: rgb(255, 232, 232);
  width: 75%;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  padding: 10px 6px;
  
}

button {
  background: #d36d54a9;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100px;
}
ul{
  list-style: none;
  margin-top: 50px;
}
li{
  background: #f5f0e9;
  padding: 6px;
  border-radius: 12px;
  margin-bottom: 15px;
  color: #a162a1;
  font-size: 19px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

</style>