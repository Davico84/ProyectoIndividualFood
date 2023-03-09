import React,{useDispatch,} from 'react-redux'
import styles from "./Paginado.module.css"
import { setNextPage,setPrevPage,setFirstPage,setLastPage,setMaxPage,updateRecetas} from "../../redux/actions"; 
import { useState } from 'react';

const Paginado = (props) => {
  
    const dispatch = useDispatch();
    const [filter,setFilter]=useState({
        fRecetas:[],
        PrevRecetas:[],
        word:"",
    })
    
    //console.log("props.recetas",props.recetas)
    const [errors,setErrors]=useState({
        fRecetas:[],
        word:"",
    })
                 
    const NextPage=()=>{
        if(props.maximo===props.pagina)return
        dispatch(setNextPage())
    }
    const PrevPage=()=>{
        if(props.pagina===1) return
        dispatch(setPrevPage())
    }
    const FirstPage=()=>{
        dispatch(setFirstPage())
    }
    const LastPage=()=>{
        set_MaxPage();
        dispatch(setLastPage())
    }
    const set_MaxPage=() =>{
        dispatch(setMaxPage(props.maximo))
    }

    const changeHandler=(event)=>{
        const property =event.target.name;
        const value= event.target.value
        validate({...filter,[property]:value})
        setFilter({...filter,[property]:value})
    }
    const validate=(form)=>{
        if(filter.word===""){
            setErrors({...errors,word:`debe ingresar caracteres de busqueda`})
            // cmdFiltrar.enableD=false
        }
        else
            setErrors({...errors,word:""})

    }   
    const filterByWord=(word)=>{
        // console.log("WORD q tengo", word)
        const result = props.recetas.filter(receta=> receta.nombre.toUpperCase().includes( word.toUpperCase()));
        // console.log("receta q obtengo", result)
        setFilter({...filter,PrevRecetas:props.recetas})
        return result
    }
    const filterHandler=()=>{
        if (filter.word==="") return  alert("Debe Ingresar al menos 1 Caracter")
        const data=filterByWord(filter.word)
        dispatch(updateRecetas(data))
    }
    const cleanfilterHandler=()=>{
        
        if(filter.PrevRecetas.length===0) {
            alert( "Antes debes aplicar una busqueda") 
            return
        }
        console.log("disparamos")
        dispatch(updateRecetas(filter.PrevRecetas))
    }
    const OrderAlHandler=()=>{

    }
    const OrderHSHandler=()=>{
        
    }
    // // const wordHandler=()
    // const getRecByWord=() =>{
    //     dispatch(setMaxPage(props.maximo))
    // }
   
  return (
    <div className={styles.main}>
        <div className={styles.navegacion}>
            <input type="button" onClick={FirstPage} value="First"/>
            {/* <button onClick={FirstPage}> first</button> */}
            <button onClick={PrevPage}> Prev </button>
            <label>{props.pagina}</label> <p>de {props.maximo}</p> 
            <button onClick={NextPage}>Next</button>
            <button onClick={LastPage}>Last</button>
        </div>
        <div className={styles.filtro}>
            <label >Filtrar por Palabra</label>
            <input type="text" id="txtWord" value={filter.word} onChange={changeHandler} name="word"/> 
            <button onClick={filterHandler} id="cmdFiltrar" name="cmdFiltrar">Filtrar </button>
            <span className={styles.spamerror}> {errors.word && errors.word }   </span>
            <button onClick={cleanfilterHandler} id="cmdMostrarT" name="cmdMostrarT">Mostrar Todos </button>
        </div>
        <div className={styles.filtro}>
            <label >Orden   Alfabetico</label>
            <div>
                <button onClick={OrderAlHandler} id="cmdAlfOrdenAsc" name="cmdAlfOrdenAsc">Ascendente </button>
                <button onClick={OrderAlHandler} id="cmdAlfOrdenDes" name="cmdAlfOrdenDes">Descendente</button>
            </div>
        </div>
        <div className={styles.filtro}>
            <label >Orden   Nivel de Comida Saludable</label>
            <div>
                <button onClick={OrderHSHandler} id="cmdHSOrdenAsc" name="cmdHSOrdenAsc">Ascendente </button>
                <button onClick={OrderHSHandler} id="cmdHSOrdenDes" name="cmdHSOrdenDes">Descendente</button>
            </div>
        </div>

    </div>
  )
}

export default Paginado