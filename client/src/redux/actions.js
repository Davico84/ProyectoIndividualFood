import axios from "axios";

export const GET_RECETAS="GET_RECETAS";
export const getRecetas=()=>{
    console.log("entre a get Recetas");
    return async function(dispatch){
        // const dataBackend = await axios.get(
        //     `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=623b127a31094794bf965e1a9f6cdf08&addRecipeInformation=true`)  
        const dataBackend= await axios.get("http://localhost:3001/recipes/");
        console.log(dataBackend)
        const receta=dataBackend.data.results;
           dispatch({type: GET_RECETAS,payload: receta})
    }

}