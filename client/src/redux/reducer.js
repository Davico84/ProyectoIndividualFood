import { GET_RECETAS } from "./actions";

const initialState={
    recetas:[],
};

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_RECETAS: 
            return {...state,recetas:action.payload}
        default:
            return {...state};
    }
}
export default rootReducer;