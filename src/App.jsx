import "bootstrap/dist/css/bootstrap.min.css";
import SaludoInicial from "./component/SaludoInicial";



function App() {
  
  const saludo = "My friend !";

  return (
    <>
    
    <SaludoInicial saludo={saludo}></SaludoInicial>
      
    </>
  )
}

export default App
