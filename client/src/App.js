import './App.css';
import {Route, useLocation} from "react-router-dom"
import {Home,Landing,Form,Detail,Diets} from "./views"

import NavBar from './components/NavBar/NavBar';
function App() {
  const location =useLocation();

  return (
    <div className="App">
      {location.pathname!== "/" && <NavBar/>}
      <Route exact path="/" component={Landing} />  { /* Ruta y component SIN prop  */ }
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/detail" component={Detail} />
      {/* <Route exact path="/detail" render ={()=><Detail idProp="valor" />}/>{ /* Ruta y component CON prop  */ } 
      <Route exact path="/create" component={Form} />
      <Route exact path="/diets" component={Diets} />
      <Route exact path="/home" render ={()=><Home unaProp="valor" />}/>{ /* Ruta y component CON prop  */ }
      
      
      
    </div>
  );
}

export default App;
