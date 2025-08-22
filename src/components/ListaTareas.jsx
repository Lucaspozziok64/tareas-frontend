import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, borrarTarea }) => {
  return (
    <div>
      <ListGroup className="my-4">
        {tareas.map((item, indice) => (
          <ItemTarea key={indice} nombreTarea={item} borrarTarea={borrarTarea} />
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
