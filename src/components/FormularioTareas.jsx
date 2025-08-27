import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { borrarTareaPorId, leerTareas } from "../helpers/queries";

const FormularioTareas = () => {
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const [listaTareas, setListaTareas] = useState([]);
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
      nombreTarea: data.inputTarea,
    };

    setListaTareas([...listaTareas, nuevaTarea]);
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaPorId(idTarea);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Tarea Eliminada!",
            text: "La tarea ha sido eliminada",
            icon: "success",
          });
        }
        const respuestaProductos = await leerTareas();
        const productosActualizados = await respuestaProductos.json();
        setListaTareas(productosActualizados);
        //Actualizar el estado tareas
      }
    });
  };

  return (
    <div>
      <Form
        className="container contenedorForm"
        onSubmit={handleSubmit(agregarTareas)}
      >
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
          <Button variant="success" type="submit" className="mx-2 botonEnviar">
            Agregar
          </Button>
        </Form.Group>
        <Form.Text className="bg-danger text-white">
          {errors.inputTarea?.message}
        </Form.Text>
      </Form>
      <ListaTareas
        tareas={tareas}
        borrarTarea={borrarTarea}
        setListaTareas={setListaTareas}
        listaTareas={listaTareas}
      />
    </div>
  );
};

export default FormularioTareas;
