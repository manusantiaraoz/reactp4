import "bootstrap/dist/css/bootstrap.min.css"
import HolaInicial from "./component/holainicial"


function App() {
  
  const saludo = "My friend!";

  return (
    <>
      <HolaInicial saludo={saludo}/>
    </>
  )
}

export default App
