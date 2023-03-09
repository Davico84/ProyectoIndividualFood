import React,{useDispatch,} from 'react-redux'
import styles from "./Paginado.module.css"
import { setNextPage,setPrevPage,setFirstPage,setLastPage,setMaxPage} from "../../redux/actions"; 
import { useState } from 'react';

const Paginado = (props) => {

    const dispatch = useDispatch();
    const [filter,setFilter]=useState({
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
        setFilter({...filter,[property]:value})
        filterByWord(filter.word)
    }

    const filterByWord=(word)=>{
        console.log("receta q tengo", props.recetas)
        const result = props.recetas.filter(receta=> receta.nombre.toUpperCase().includes( word.toUpperCase()));
        console.log("receta q obtengo", result)
    }
    // const wordHandler=()
    const getRecByWord=() =>{
        dispatch(setMaxPage(props.maximo))
    }
   
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
            
        </div>
    </div>
  )
}

export default Paginado