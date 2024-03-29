// import CardContainer from "../../components/CardsContainer/CardContainer"
import Paginado from "../../components/Paginado/Paginado";
import { useEffect } from "react"; 
import { useDispatch,useSelector } from "react-redux";
import { getRecetas,getDietas} from "../../redux/actions"; 
import CardContainer from "../../components/CardsContainer/CardContainer"
import style from "./Home.module.css"
const Home =()=>{
    //cuando se monta, q haga el dispatch
    
    const disptach = useDispatch();
    
    useEffect(()=>{
        // console.log("se disparo HOME");
       disptach(getRecetas());

    },[disptach])//array de deoendencias
    
    // const recetas= corregirFormatoData(useSelector(state=>state.recetas))
    const error=useSelector(state=>state.msgerror)
    const recetas= useSelector(state=>state.recetas)
    const pagina= useSelector(state=>state.pagina)
	const porPagina= useSelector(state=>state.porPagina)
    const maximo=Math.ceil(recetas.length/porPagina) 

    const clickhandler=()=>{
        disptach(getDietas())
    }

    return (
        <div className={style.main}>
             <div className={style.cabecera}>
                <h1>Recetas</h1>
                <div>
                    <button  onClick={clickhandler}>Botton</button> 
                </div>
            </div>
            <div className={style.detalle}>
                <div className={style.filtros}>
                        <Paginado pagina={pagina} maximo={maximo} recetas={recetas}/>
                       
                </div>
                <div className={style.tarjetas}>
                        <CardContainer recetas={recetas} porPagina={porPagina} pagina={pagina} error={error} />
                </div>
            </div>  
        </div>
    )
}
export default Home;