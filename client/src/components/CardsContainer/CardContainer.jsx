import Card from "../Card/Card"
import NoFoundCard from "../NoFoundCard/NoFoundCard"
import style from "./CardContainer.module.css"

const CardContainer =(props)=>{
    
    if(props.error!=="NULL")
    {  
    
        return(
            <div className={style.mainContainer}>
                <NoFoundCard error={props.error}/> 
            </div>
        ) 
    } 

	return(
    <div className={style.mainContainer}>
        {
            props.recetas.slice(
                    (props.pagina-1)*props.porPagina,
                    (props.pagina-1)*props.porPagina+props.porPagina)
                .map(receta=>{
                return <Card
                            id={receta.id}
							key={receta.id}
                            nombre={receta.nombre} 
                            resumen={receta.resumen} 
                            create ={receta.create} 
							comidaSaludable={receta.comidaSaludable} 
							tipoDeDieta={receta.tipoDeDieta}
							imagen={receta.imagen}
                        />
            })
        }
    </div>
)
}
export default CardContainer