import { GET_RECETA_BY_ID,GET_RECETAS, SET_NEXT_PAGE ,SET_PREV_PAGE,SET_FIRST_PAGE,SET_LAST_PAGE,SET_MAX_PAGE,SET_ERROR,GET_DIETAS} from "./actions";

const initialState={
    recetas:[],
    receta:[],
    pagina:1,
    porPagina:9,
    input:1,
    maximo:0,
    msgerror:"NULL",
    dietas:[]

};

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_RECETAS: {
            return {...state,recetas:action.payload}}
        case GET_RECETA_BY_ID: {
            return {...state,receta:action.payload}}
        case SET_NEXT_PAGE:
            return{...state,pagina:state.pagina+1}
        case SET_PREV_PAGE:
            return{...state,pagina:state.pagina-1}
        case SET_FIRST_PAGE:
            return{...state,pagina:1}
        case SET_LAST_PAGE:
            return{...state,pagina:state.maximo}
        case SET_MAX_PAGE:
            return{...state,maximo:action.payload}
        case SET_ERROR:
            return{...state,msgerror:action.payload}
        case GET_DIETAS: 
            return {...state,dietas:action.payload}
        default:
            return {...state};
    }
}

export default rootReducer;