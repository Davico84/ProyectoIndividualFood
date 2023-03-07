// import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
const Detail =()=>{
    let params = useParams()
  console.log("params recibido",params);
    return(
        <>  
            <h1>Esta es la vista Detail id </h1>
        </>
    
    )
    
    }
    
export default Detail;