import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import {
  borrarTareaPorId,
  crearTarea,
  editarTareaPorId,
  leerTareas,
  obtenerTareaPorId,
} from "../helpers/queries";
import Modal from "react-bootstrap/Modal";
import { FormControl, FormGroup } from "react-bootstrap";

const FormularioTareas = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [tareaEditando, setTareaEditando] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const {
    register: registerModal,
    handleSubmit: handleSubmitModal,
    setValue: setValueModal,
    reset: resetModal,
    formState: { errors: errorsModal },
  } = useForm();

  const cargarTareaEnModal = async (id) => {
    const respuesta = await obtenerTareaPorId(id);
    if (respuesta && respuesta.status === 200) {
      const tarea = await respuesta.json();
      setTareaEditando(tarea);
      setValueModal("inputModificar", tarea.nombreTarea); // usando react-hook-form
      handleShow(); // abrir el modal
    }
  };

  const onSubmitModal = async (data) => {
    if (!tareaEditando) return;
    // 🛠️ Estamos editando una tarea existente
    const tareaActualizada = {
      nombreTarea: data.inputModificar,
    };

    const respuesta = await editarTareaPorId(
      tareaEditando._id,
      tareaActualizada
    );
    if (respuesta.status === 200) {
      const tareasActualizadas = await leerTareas();
      const lista = await tareasActualizadas.json();
      setListaTareas(lista); // actualiza la lista en pantalla

      resetModal(); // limpia el formulario del modal
      setTareaEditando(null); // resetea el estado de edición
      handleClose(); // cierra el modal

      Swal.fire({
        icon: "success",
        title: "Tarea modificada correctamente",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar la tarea",
        text: "Intenta nuevamente",
      });
    }
  };

  const agregarTareas = async (data) => {
    const nuevaTarea = {
      id: uuidv4(),
      nombreTarea: data.inputTarea,
    };
    reset();

    const respuesta = await crearTarea(nuevaTarea);
    if (respuesta.status == 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tarea creada exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const respuestaProductos = await leerTareas();
    const productosActualizados = await respuestaProductos.json();
    setListaTareas(productosActualizados);
    //Actualizar el estado tareas
  };

  const borrarTarea = (id) => {
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
        const respuesta = await borrarTareaPorId(id);
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
        borrarTarea={borrarTarea}
        setListaTareas={setListaTareas}
        listaTareas={listaTareas}
        handleShow={handleShow}
        cargarTareaEnModal={cargarTareaEnModal}
      />
      <Modal className="colorFondoModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex justify-content-center w-100">
            ¿Quieres modificar esta tarea?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmitModal(onSubmitModal)}
            className="d-flex flex-column justify-content-center"
          >
            <FormGroup className="d-flex justify-content-center">
              <FormControl
                type="text"
                className="my-2 text-center w-75"
                placeholder="Ingresa una tarea"
                {...registerModal("inputModificar", {
                  required: "La tarea es un dato obligatorio",
                  minLength: {
                    value: 4,
                    message: "La tarea debe contener 4 caracteres como minimo",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "La tareas debe contener 20 caracteres como minimo",
                  },
                })}
              />
            </FormGroup>
            <Form.Text className="bg-danger text-white">
              {errors.inputModificar?.message}
            </Form.Text>
            <div className="d-flex justify-content-end">
              <Button variant="success" type="submit">
                Editar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormularioTareas;
