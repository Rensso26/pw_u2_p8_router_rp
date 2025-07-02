import axios from "axios";


const API_URL="http://localhost:8081/api/matricula/v1/estudiantes";


const consultarEstudiantes = async() =>{
    const respuesta = axios.get(API_URL).then(rpt => rpt.data)
    return respuesta;
}

const consultarEstudianteID = async(id) =>{
    const respuesta = axios.get(API_URL+`/${id}`).then(rpt => rpt.data)
    return respuesta;
}

export const consultarEstudiantesFachada = async() =>{
    return await consultarEstudiantes();
}

export const consultarEstudianteIDFachada = async(id) =>{
    return await consultarEstudianteID(id);
}
