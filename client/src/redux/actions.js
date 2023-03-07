// import axios from "axios";

export const GET_RECETAS="GET_RECETAS";
export const GET_RECETA_BY_ID="GET_RECETA_BY_ID";
export const GET_RECETAS_BY_WORD="GET_RECETAS_BY_WORD";
export const SET_NEXT_PAGE="SET_NEXT_PAGE"
export const SET_PREV_PAGE="SET_PREV_PAGE"
export const SET_FIRST_PAGE="SET_FIRST_PAGE"
export const SET_LAST_PAGE="SET_LAST_PAGE"
export const SET_MAX_PAGE="SET_MAX_PAGE"
export const SET_ERROR ="SET_ERROR";
export const GET_DIETAS ="GET_DIETAS";
// export const getRecetas=()=>{
//     return async function(dispatch){
//                 const dataBackend= await axios.get("http://localhost:3001/recipes/");
//                 const receta=dataBackend.data;
//                 console.log("BACKND",dataBackend)
//            dispatch({type: GET_RECETAS,payload: receta})
//     }
// }
export const getRecetas=()=>{
    return dispatch => {
        return fetch("http://localhost:3001/recipes/")
          .then(response => response.json())
          .then(json => {
            dispatch({ 
                  type: GET_RECETAS, 
                  payload: json });
          }).catch (error => {
            dispatch({ 
                type: SET_ERROR, 
                payload: error.message });
            //alert(error.message)
            })}
}
// export const getRecetasByWord=(word)=>{
//     return async function(dispatch){
//         const dataBackend= await axios.get(`http://localhost:3001/recipes/?word=${word}`);
//         const receta=dataBackend.data;
//            dispatch({type: GET_RECETAS,payload: receta})
//     }
// }
export const getRecetasByWord=(word)=>{
    return dispatch => {
        return fetch(`http://localhost:3001/recipes/?word=${word}`)
          .then(response => response.json())
          .then(json => {
            dispatch({ 
                  type: GET_RECETAS, 
                  payload: json });
          }).catch (error => {
            alert(error.message)
            })}
}

// export const getRecetasByID=(ID)=>{
//     return async function(dispatch){
//         const dataBackend= await axios.get(`http://localhost:3001/recipes/${ID}`);
//         const receta=dataBackend.data;
//            dispatch({type: GET_RECETAS,payload: receta})
//     }
// }
export const getRecetasByID=(ID)=>{
    return dispatch => {
        return fetch(`http://localhost:3001/recipes/${ID}`)
          .then(response => response.json())
          .then(json => {
            dispatch({ 
                  type: GET_RECETAS, 
                  payload: json });
          }).catch (error => {
            dispatch({ 
                type: SET_ERROR, 
                payload: error.message });
            //alert(error.message)
            })}
}
export const getDietas=()=>{
    return dispatch => {
        return fetch("http://localhost:3001/diets/all/")
          .then(response => response.json())
          .then(json => {
            dispatch({ 
                  type: GET_DIETAS, 
                  payload: json });
          }).catch (error => {
            dispatch({ 
                type: SET_ERROR, 
                payload: error.message });
            //alert(error.message)
            })}
}
export const setNextPage=()=>{
    return  function(dispatch){
           dispatch({type: SET_NEXT_PAGE})
    }
}
export const setPrevPage=()=>{
    return  function(dispatch){
           dispatch({type: SET_PREV_PAGE})
    }
}
export const setFirstPage=()=>{
    return  function(dispatch){
           dispatch({type: SET_FIRST_PAGE})
    }
}
export const setLastPage=()=>{
    return  function(dispatch){
           dispatch({type: SET_LAST_PAGE})
    }
}
export const setMaxPage=(maximo)=>{
    
    return  function(dispatch){
           dispatch({type: SET_MAX_PAGE,payload:maximo})
    }
}