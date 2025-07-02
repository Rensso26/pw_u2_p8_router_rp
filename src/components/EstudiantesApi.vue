<template>
  <div class="container">
    <button v-on:click="consumirAPI()">Mostar Estudiantes</button>
    <div v-if="cargando" class="loading-message">
      Obteniendo datos de los estudiantes...
    
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.fechaNacimiento }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import { consultarEstudiantesFachada } from "@/clients/EstudianteClient.js";
export default {
  data() {
    return {
      estudiantes: [],
      cargando: false,
    };
  },
  methods: {
    async consumirAPI() {
      this.cargando = true;
      this.estudiantes = await consultarEstudiantesFachada();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #070a3b;
  background-color: #4caf50;
  color: #111c07;
  transition: all 0.2s;
}

thead {
  list-style: none;
  margin-top: 25px;
  padding: 0;
  text-align: left;
  margin: 60px auto;
}
tbody {
  margin: 60px;
  padding: 12px 15px;
  border-radius: 12px;
  color: #3a3c07;
  font-size: 18px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
table {
  border-collapse: separate;
  border-spacing: 20px;
  background: none;
  margin: auto;
}
th {
  padding: 12px 20px;
}
td,
th {
  border-radius: 16px;
}

.loading-message{
  margin-top: 20px;
  font-style: italic;
  color: #666;
}
</style>