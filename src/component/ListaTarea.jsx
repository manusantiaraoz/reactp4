import ListGroup from 'react-bootstrap/ListGroup';
import Tarea from './Tarea';

const ListaTarea = ({listTarea, borrarTarea}) => {
    return (
        <ListGroup>
            {
//UTILIZO EL MAP, QUE ES INMUTABLE M. PARA QUE POR CADA VUELTA DEL MAP, ME GENERE UNA TAREA
//le pongo el tarea en el map, y i, sabiendo que el parametro tarea representa el contenido del array y la i representa la posicion del array, esa 
//sera mi clave para ecitar que se dupliquen los componentes, el codigo unico que le mando ahora como clave es el indice
//ademas vamos a crear un props con el el contenido de cada tarea que lo vamos a mandar a items tarea
                listTarea.map((tarea,i)=><Tarea key={i} tarea={tarea} borrarTarea={borrarTarea} ></Tarea>)

            }

      </ListGroup>
    );
};

export default ListaTarea;