import { Button, Form } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () =>{

  const[tarea , setTarea]=useState(" ");


  return (
    <section>
      <Form>
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
      <ListaTarea/>
    </section>
  );
};

export default FormularioTarea;
