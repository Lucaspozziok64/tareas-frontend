import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between mb-2 border border-light">
      <p className="mb-0 d-flex justify-content-center align-items-center">
        ✍️<strong className="mx-2">{tarea.nombreTarea}</strong>
      </p>
      <Button variant="danger" onClick={()=> borrarTarea(tarea.id)}>
        <i className="bi bi-trash3-fill"></i>
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
