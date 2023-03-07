import styles from "./Form.module.css"
import {useState}from "react"
import axios from "axios"
// import { getDietas} from "../../redux/actions"; 
// import { useDispatch,useSelector } from "react-redux";
// import { useEffect } from "react"; 
const Form =()=>{
    // const disptach = useDispatch();
    
    // useEffect(()=>{
    //     //console.log("Se disparo en FORM");
    //    disptach(getDietas());
    // },[disptach])//array de deoendencias

    // const arrdietas=  (useSelector(state=>state.dietas))
    // // console.log("arrdietas  q fue?", arrdietas);
    const [form,setForm]= useState({
        nombre:"",
        resumen:"",
        comidaSaludable:"",
        pasoAPaso:"",
        TiposdeDieta:[]
    })
    const [errors,setErrors]= useState({
        nombre:"",
        resumen:"",
        comidaSaludable:"",
        pasoAPaso:"",
        TiposdeDieta:[]
    })
    const [chkdietas,setChkdietas]= useState({
        chk1: false,
        chk2: false,
        chk3: false,
        chk4: false,
        chk5: false,
        chk6: false,
        chk7: false,
        chk8: false,
        chk9: false,
        chk10: false,
        chk11: false,
    })

    const changeHandler=(event)=>{
        const property =event.target.name;
        const value= event.target.value
        validate({...form,[property]:value})
        setForm({...form,[property]:value})
    }
    const changeChkHandler=(event)=>{
        const property =event.target.name;
        const value= event.target.value
        setChkdietas({...chkdietas,[property]:value})
    }
    const validate=(form)=>{
        if(form.nombre.length<=3){
            setErrors({...errors,nombre:`Campo "Nombre" Requerido`})
        }
        else
            setErrors({...errors,nombre:""})

        if(form.resumen.length<=3){
            setErrors({...errors,resumen:`Campo "Resumen" Requerido`})
            }
        else
            setErrors({...errors,resumen:""})
    }   
    const llenarDietas=()=>{
        const arregloDietas=[]
        for (const property in chkdietas) {
            if(!(`${chkdietas[property]}`==="false"))
            // console.log(`${property}: ${chkdietas[property]}`);
             arregloDietas.push((`${chkdietas[property]}`))
          }return arregloDietas
    }
const submitHandler =(event)=>{
    
    form.TiposdeDieta=llenarDietas()
    event.preventDefault();
    console.log("que manda form", form)
    axios.post("http://localhost:3001/recipes/",form)
    .then(res=>alert(res))
    .catch(err=>alert(err))
}
return(
    <><h1>creacion de Receta</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="txtnom">Nombre</label>
                <input type="text" id="txtnom" value={form.nombre} onChange={changeHandler} name="nombre"/>
                {errors.nombre && <span> {errors.nombre} </span>}
            </div>
            <div>
                <label htmlFor="txtrex" >Resumen</label>
                <input type="text" id="txtres"value={form.resumen}onChange={changeHandler} name="resumen"/>
                {errors.resumen &&<span>{errors.resumen} </span>}
            </div>
            <div>
                <label htmlFor="numcom" >Nivel de "comida saludable" </label>
                <input type="number" id="numcom" min="10" max ="100" value={form.comidaSaludable}onChange={changeHandler}name="comidaSaludable"/>
            </div>
            <div>
                <label htmlFor="txtpaso" >Paso a paso</label>
                <input type="text" id="txtpaso" value={form.pasoAPaso}onChange={changeHandler}name="pasoAPaso"/>
            </div>
            <div className={styles.chkboxs}>
                <p>Dietas</p>
                <div>
                    <input type="checkbox" id="1" name="chk1" onChange={changeChkHandler} checked={chkdietas.chk1} value="Ketogenic" />Ketogenic
                    <input type="checkbox" id="2" name="chk2" onChange={changeChkHandler} checked={chkdietas.chk2} value="Gluten_Free" />Gluten Free
                    <input type="checkbox" id="3" name="chk3" onChange={changeChkHandler} checked={chkdietas.chk3} value="Vegetarian" />Vegetarian
                    <input type="checkbox" id="4" name="chk4" onChange={changeChkHandler} checked={chkdietas.chk4} value="Lacto-Vegetarian" />Lacto-Vegetarian
                    <input type="checkbox" id="5" name="chk5" onChange={changeChkHandler}checked={chkdietas.chk5}value="Ovo-Vegetarian" />Ovo-Vegetarian
                </div>
                <div>
                    <input type="checkbox" id="6" name="chk6" onChange={changeChkHandler} checked={chkdietas.chk6} value="Vegan" />Vegan
                    <input type="checkbox" id="7" name="chk7" onChange={changeChkHandler} checked={chkdietas.chk7} value="Paleo" />Paleo
                    <input type="checkbox" id="8" name="chk8" onChange={changeChkHandler} checked={chkdietas.chk8}value="Pescetarian" />Pescetarian
                    <input type="checkbox" id="9" name="chk9" onChange={changeChkHandler} checked={chkdietas.chk9} value="Primal"/>Primal
                    <input type="checkbox" id="10" name="chk10" onChange={changeChkHandler} checked={chkdietas.chk10} value="Whole30"/>Whole30
                    <input type="checkbox" id="11" name="chk11" onChange={changeChkHandler} checked={chkdietas.chk11}value="LowFODMAP" />LowFODMAP   
                </div>

            </div>
            <button type="submit">Crear Receta</button>
        </form>
    </>

    )

}

export default Form;