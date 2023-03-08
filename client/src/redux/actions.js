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
let estado=0;
export const getRecetas=()=>{
    return async dispatch => {
        return fetch("http://localhost:3001/recipes/")
          .then(response => {
            // console.log("esto es la respuesta",response);
            estado=response.status
            return response.json()
          })
          .then(json => {
            if (estado ===400){
                // console.log("me voy a SET_ERROR");
              dispatch({ type: SET_ERROR, 
                      payload: json });
            } else {
              // console.log("GET RECETAS");
            dispatch({ type: GET_RECETAS, 
                       payload: json });
            }
          }).catch (error => {
            dispatch({ 
                type: SET_ERROR, 
                payload: error.message });
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
    return async dispatch => {
        return fetch(`http://localhost:3001/recipes/?word=${word}`)
        .then(response => {
          // console.log("esto es la respuesta",response);
          estado=response.status
          return response.json()
        })
        .then(json => {
          if (estado ===400){
              // console.log("me voy a SET_ERROR");
            dispatch({ type: SET_ERROR, 
                    payload: json });
          } else {
            // console.log("GET_RECETAS_BY_WORD");
          dispatch({ type: GET_RECETAS_BY_WORD, 
                     payload: json });
          }
        }).catch (error => {
          dispatch({ 
              type: SET_ERROR, 
              payload: error.message });
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
    return async dispatch => {
        return fetch(`http://localhost:3001/recipes/${ID}`)
        .then(response => {
          // console.log("esto es la respuesta",response);
          estado=response.status
          return response.json()
        })
        .then(json => {
          if (estado ===400){
              // console.log("me voy a SET_ERROR");
            dispatch({ type: SET_ERROR, 
                    payload: json });
          } else {
            // console.log("GET_RECETA_BY_ID");
          dispatch({ type: GET_RECETA_BY_ID, 
                     payload: json });
          }
        }).catch (error => {
          dispatch({ 
              type: SET_ERROR, 
              payload: error.message });
          })}
}
export const getDietas=()=>{
  let estado=0;
    return async dispatch => {
        return fetch("http://localhost:3001/diets/all/")
        .then(response => {
          // console.log("esto es la respuesta",response);
          estado=response.status
          return response.json()
        })
        .then(json => {
          if (estado ===400){
              // console.log("me voy a SET_ERROR");
            dispatch({ type: SET_ERROR, 
                    payload: json });
          } else {
            // console.log("GET DIETAS");
          dispatch({ type: GET_DIETAS, 
                     payload: json });
          }
        }).catch (error => {
          dispatch({ 
              type: SET_ERROR, 
              payload: error.message });
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