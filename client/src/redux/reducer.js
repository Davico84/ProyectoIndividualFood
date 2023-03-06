import { GET_RECETAS, SET_NEXT_PAGE ,SET_PREV_PAGE,SET_FIRST_PAGE,SET_LAST_PAGE,SET_MAX_PAGE,SET_ERROR} from "./actions";

const initialState={
    recetas:[],
    pagina:1,
    porPagina:9,
    input:1,
    maximo:0,
    msgerror:"NULL"

};

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_RECETAS: 
            return {...state,recetas:action.payload}
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

        default:
            return {...state};
    }
}

export default rootReducer;