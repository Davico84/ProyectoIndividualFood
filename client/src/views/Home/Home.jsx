import CardContainer from "../../components/CardsContainer/CardContainer"
import { useEffect } from "react"; 
import { useDispatch } from "react-redux";
import { getRecetas} from "../../redux/actions"; 

const Home =()=>{
    //cuando se monta, q haga el dispatch
    const disptach = useDispatch();
    useEffect(()=>{
        disptach(getRecetas())
    },[disptach])//array de deoendencias
    return (
        <div>
            <h1>Esta es la vista de Home</h1>
        <CardContainer/>
        </div>
    )
}
export default Home;