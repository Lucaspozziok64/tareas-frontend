import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {

  return (
    <>
    <div className="container w-50">
      <Form>
        <Form.Group className="d-flex">
          <Form.Control type="text" placeholder="Ingresa una tarea" required/>
          <Button variant="success" type="submit" className="mx-2 botonEnviar">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas />
    </div>
    </>
  );
};

export default FormularioTareas;
