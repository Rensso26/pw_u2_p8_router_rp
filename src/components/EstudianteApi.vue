<template>
  <div class="container">
    <label for="eid">Id:</label>
    <input type="number" id="eid" name="eid" v-model="id" />
    <button v-on:click="consumirApiID()">Consultar Estudiante</button>
    <form v-if="estudiante">
      <label for="ename" >Nombre:</label>
      <input type="text" id="ename" name="ename" v-model="estudiante.nombre" >
      <label for="elastn">Apellido:</label>
      <input type="text" id="elastn" name="elastn" v-model="estudiante.apellido" />
      <label for="edate">Fecha de nacimiento:</label>
      <input type="text" id="edate" name="edate" v-model="estudiante.fechaNacimiento"  />
    </form>
  </div>
</template>

<script>
import { consultarEstudianteIDFachada } from "@/clients/EstudianteClient.js";
export default {
    data(){
        return{
            id: null,
            estudiante: null,
        }
    },
    methods: {
        async consumirApiID(){
            this.estudiante = null;
            this.estudiante = await consultarEstudianteIDFachada(this.id);
        }
    }

};
</script>

<style>
label {
  display: block;
  color: #666;
  text-align: left;
  padding: 12px 3px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
input {
  display: block;
  background-color: #4fcb57b9;
  color: rgb(10, 4, 32);
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid #57cb57;
  padding: 10px 6px;
  text-align: center;
}
.container {
  background: none;
  border: 2px none;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #070a3b;
  background-color: #4caf50;
  color: #111c07;
      text-align: left;

}
</style>