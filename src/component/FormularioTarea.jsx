import { Button, Form } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            pLaceholder="por ejemplo: 'cocinar la cena'"
            minLength={3}
            maxLength={50}
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
