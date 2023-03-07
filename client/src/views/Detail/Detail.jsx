import { useLocation } from 'react-router-dom'

const Detail =()=>{
    let { state } = useLocation();
  console.log("stado recibido",state);
    return(
        <>  
            <h1>Esta es la vista Detail id </h1>
        </>
    
    )
    
    }
    
export default Detail;