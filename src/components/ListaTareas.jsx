import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
import { useEffect, useState } from "react";
import { leerTareas } from "../helpers/queries";

const ListaTareas = ({ tareas, borrarTarea, setListaTareas, listaTareas, cargarTareaEnModal }) => {

  useEffect(()=> {
    obtenerTareas();
  }, [])

  const obtenerTareas = async () => {
    const respuesta = await leerTareas()
    if(respuesta.status === 200 ) {
      const datos = await respuesta.json();
      setListaTareas(datos)
    } else {
      console.info('Ocurrio un error al buscar los productos');
    }
  }

  return (
    <div>
      <ListGroup className="my-4">
        {listaTareas.map((tarea) => (
          <ItemTarea key={tarea._id} tarea={tarea} borrarTarea={borrarTarea} cargarTareaEnModal={cargarTareaEnModal} />
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
