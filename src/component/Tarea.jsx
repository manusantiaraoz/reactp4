import { Button, ListGroup } from "react-bootstrap";


const Tarea = ({tarea, borrarTarea}) => {
    return (
        
            <ListGroup.Item className="d-flex justify-content-between">{tarea} <Button variant="danger" onClick={()=>{borrarTarea(tarea)}}>eliminar</Button> </ListGroup.Item>
       
    );
};

export default Tarea;