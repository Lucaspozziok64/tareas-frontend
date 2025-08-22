import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const FormularioTareas = () => {
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("desde useEffect");
    localStorage.setItem("listaTareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTareas = (data) => {

    const nuevaTarea = {
      id: uuidv4(),
      nombreTarea: data.inputTarea
    }

    setTareas([...tareas, nuevaTarea]);
    reset();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tarea creada exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const borrarTarea = (idTarea) => {
    Swal.fire({
      title: "Estas seguro/a?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const tareasFiltradas = tareas.filter((item) => item.id !== idTarea);
        //Actualizar el estado tareas
        setTareas(tareasFiltradas);
        Swal.fire({
          title: "Tarea Eliminada!",
          text: "La tarea ha sido eliminada",
          icon: "success",
        });
      }
    });
  };

  return (
      <div>
        <Form className="container contenedorForm" onSubmit={handleSubmit(agregarTareas)}>
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              placeholder="Ingresa una tarea"
              onChange={(e) => setTareas(e.target.value)}
              {...register("inputTarea", {
                required: "La tarea es un dato obligatorio",
                minLength: {
                  value: 4,
                  message: "La tarea debe contener 4 caracteres como minimo",
                },
                maxLength: {
                  value: 20,
                  message: "La tareas debe contener 20 caracteres como minimo",
                },
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
  );
};

export default FormularioTareas;
