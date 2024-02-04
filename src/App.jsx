import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./css/App.css";
import Footer from "./component/footer";
import FormularioTarea from "./component/FormularioTarea";



function App() {
  
  

  return (
    <>
      
    <Container className="my-4 mainpage">
      <h1 className="text-center display-1">Bienvenido</h1>
      <h5 className="text-center display-6">agrega tus tareas :D</h5>
    <FormularioTarea/>
   
    </Container>
    <Footer/>
     
    </>
    
  )
}

export default App
