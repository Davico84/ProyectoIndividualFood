import {Link} from "react-router-dom";
import style from "./NavBar.module.css"
// import { useLocation } from "react-router-dom";
const NavBar=()=>{
    // const location =useLocation();
    // console.log("estes es location",location)
    return(
        <>
        {/* // <div className={style.mainContainer}>
        //     <Link to="/home">HOME</Link>
        //     <Link to="/create">FORM</Link>
            {location.pathname==="/home" || location.pathname==="/detail"?" ":<Link to="/detail">DETAIL</Link>} */}
            <ul className={style.UL}>
                <li className={style.LI}> <Link className={style.active} to="/home">HOME</Link></li>
                <li className={style.LI}><Link className={style.L} to="/create">FORM</Link></li>
                <li className={style.LI}><Link className={style.L} to="/diets">DIETAS</Link></li>
            </ul>
        {/* // </div> */}
        </>
    )
}

export default NavBar;