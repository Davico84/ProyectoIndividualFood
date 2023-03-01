import './App.css';
import {Route, useLocation} from "react-router-dom"
import {Home,Landing,Form,Detail} from "./views"
import NavBar from './components/NavBar/NavBar';
function App() {
  const location =useLocation();

  return (
    <div className="App">
      {location.pathname!== "/" && <NavBar/>}
      <Route exact path="/" component={Landing} />  { /* Ruta y component SIN prop  */ }
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/create" component={Form} />
      <Route exact path="/home" render ={()=><Home unaProp="valor" />}/>{ /* Ruta y component CON prop  */ }
      
      
      
    </div>
  );
}

export default App;
