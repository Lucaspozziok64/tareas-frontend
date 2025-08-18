import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormularioTareas = () => {
  return (
    <div className="container w-50">
      <Form>
        <Form.Group className="mb-2 d-flex">
          <Form.Control type="text" placeholder="Ingresa una tarea" />
          <Button variant="success" type="submit" className="mx-2 botonEnviar">
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioTareas;
