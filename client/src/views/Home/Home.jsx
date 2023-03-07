import CardContainer from "../../components/CardsContainer/CardContainer"
import Paginado from "../../components/Paginado/Paginado";
import { useEffect } from "react"; 
import { useDispatch,useSelector } from "react-redux";
import { getRecetas} from "../../redux/actions"; 
import {corregirFormatoData} from  "../../Utils/utils"
import style from "./Home.module.css"
const Home =()=>{
    //cuando se monta, q haga el dispatch
    const disptach = useDispatch();
    
    useEffect(()=>{
        console.log("se disparo HOME");
       disptach(getRecetas());
    },[disptach])//array de deoendencias
    
    const error=useSelector(state=>state.msgerror)
    const recetas= corregirFormatoData(useSelector(state=>state.recetas))
    const pagina= useSelector(state=>state.pagina)
	const porPagina= useSelector(state=>state.porPagina)
    const maximo=Math.ceil(recetas.length/porPagina) 
    return (
        <div className={style.main}>
             <div className={style.cabecera}>
                <h1>Recetas</h1>
            </div>
            <div className={style.detalle}>
                <div className={style.filtros}>
                          <Paginado pagina={pagina} maximo={maximo}/>
                </div>
                <div className={style.tarjetas}>
                    <CardContainer recetas={recetas} porPagina={porPagina} pagina={pagina} error={error} />
                </div>
            </div>  
            

        </div>
    )
}
export default Home;