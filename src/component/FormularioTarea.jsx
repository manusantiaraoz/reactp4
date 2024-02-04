import { Button, Form } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () =>{

  const[tarea , setTarea]=useState(" ");
  const [listTarea, setListTarea] = useState([]);
  const handleSubmit =(e)=>{
      e.preventDefault();
    //como no podemos modificar directamente el array, vamos a tener que usar algun metodo similar al .push para agregar el nuevo dato
    //para eso usamos el operador spread que lo copia a cada elemento del array y agrega el ultimo elemento que cargamos
    setListTarea([...listTarea,tarea]);
    setTarea("")
  }
  
  //para poder borrar lo que vamos a hacer es usar filter, ya que es un metodo inmutable, lo que vamos a hacer es sacar la tarea que nosotros queremos y guardad
  //el resto, lo haremos mediante una funcion que vamos a mandar por props que a su vez vamos a hacer llegar hasta tarea 

  const borrarTarea =(nombreTarea)=>{
    //el resultado del filter lo vamos a guardar dentro de una variable para que ese sea luego el nuevo valor de listTarea
    const borrar=listTarea.filter((dTarea)=>dTarea!==nombreTarea);
    setListTarea(borrar); 
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="entrenar"
            minLength={3}
            maxLength={50}
            onChange={(e)=> {setTarea(e.target.value)}}
            value={tarea}
          />
          <Button variant="warning" className="ms-2" type="submit">
            agregar
          </Button>
        
        </Form.Group>
      </Form>
      <ListaTarea listTarea={listTarea} borrarTarea={borrarTarea}/>
    </section>
  );
};

export default FormularioTarea;
