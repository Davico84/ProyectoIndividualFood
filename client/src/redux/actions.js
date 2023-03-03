import axios from "axios";

export const GET_RECETAS="GET_RECETAS";
export const GET_RECETA_BY_ID="GET_RECETA_BY_ID";
export const GET_RECETAS_BY_WORD="GET_RECETAS_BY_WORD";


export const getRecetas=()=>{
    return async function(dispatch){
        const dataBackend= await axios.get("http://localhost:3001/recipes/");
        const receta=dataBackend.data;
           dispatch({type: GET_RECETAS,payload: receta})
    }
}

export const getRecetasByWord=(word)=>{
    return async function(dispatch){
        const dataBackend= await axios.get(`http://localhost:3001/recipes/?word=${word}`);
        const receta=dataBackend.data;
           dispatch({type: GET_RECETAS,payload: receta})
    }
}
export const getRecetasByID=(ID)=>{
    return async function(dispatch){
        const dataBackend= await axios.get(`http://localhost:3001/recipes/${ID}`);
        const receta=dataBackend.data;
           dispatch({type: GET_RECETAS,payload: receta})
    }
}