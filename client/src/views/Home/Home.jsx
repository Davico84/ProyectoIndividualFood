import CardContainer from "../../components/CardsContainer/CardContainer"
import { useEffect } from "react"; 
import { useDispatch } from "react-redux";
import { getRecetas} from "../../redux/actions"; 
import style from "./Home.module.css"
const Home =()=>{
    //cuando se monta, q haga el dispatch
    const disptach = useDispatch();
    useEffect(()=>{
        disptach(getRecetas())
    },[disptach])//array de deoendencias
    return (
        <div className={style.main}>
             <div className={style.cabecera}>
                <h1>Esta es la vista de Home</h1>
            </div>
            <div className={style.detalle}>
                <div className={style.filtros}>
                    <>
                        <h2>
                            Filtros de Busqueda
                        </h2>
                    </>
                </div>
                <div className={style.tarjetas}>
                    <CardContainer/>
                </div>
            </div>  
            

        </div>
    )
}
export default Home;