import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const FormularioTareas = () => {
  const tareasLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(()=> {
    console.log('desde useEffect')
    localStorage.setItem("listaTareas", JSON.stringify(tareas))
  }, [tareas])

  const agregarTareas = (data) => {
    console.log("Aqui deberia agregar tareas");

    console.log(data.inputTarea)

    setTareas([...tareas, data.inputTarea])
    reset()
  };

    const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((item) => item !== nombreTarea);
    //Actualizar el estado tareas
    setTareas(tareasFiltradas);
  };

  return (
    <>
      <div className="container w-50">
        <Form onSubmit={handleSubmit(agregarTareas)}>
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              placeholder="Ingresa una tarea"
              onChange={(e) => setTareas(e.target.value)}
              required
              {...register("inputTarea", {
                required: "La tarea es un dato obligatorio",
                minLength: {
                  value: 4,
                  message: 'La tarea debe contener 4 caracteres como minimo',
                },
                maxLength: {
                  value: 20,
                  message: 'La tareas debe contener 20 caracteres como minimo'
                }
              })}
            />
            <Button
              variant="success"
              type="submit"
              className="mx-2 botonEnviar"
            >
              Agregar
            </Button>
          </Form.Group>
          <Form.Text className="bg-danger text-white">
            {errors.inputTarea?.message}
          </Form.Text>
        </Form>
        <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
      </div>
    </>
  );
};

export default FormularioTareas;
