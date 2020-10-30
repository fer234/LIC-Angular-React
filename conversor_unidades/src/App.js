import React,{Component} from 'react';
import './App.css';
import Formulario from './Components/formulario';
//Agregando componente Productos
import Productos from './Components/Productos';
//Agregando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
 render(){
 return(
 <div className="App">
 <Formulario></Formulario>
 </div>
 );
 }
}
export default App;


