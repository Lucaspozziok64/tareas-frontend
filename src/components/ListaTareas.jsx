import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas }) => {
  return (
    <div>
      <ListGroup className="my-4">
        {tareas.map((item, indice) => (
          <ItemTarea key={indice} nombreTarea={item} />
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
