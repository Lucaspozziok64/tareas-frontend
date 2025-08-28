const urltareas = import.meta.env.VITE_API_TAREAS

console.log(urltareas)

export const leerTareas = async () => {
    try {
        const respuesta = await fetch(urltareas)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const borrarTareaPorId = async (id) => {
    try {
        const respuesta = await fetch(urltareas + `/${id}`, {
            method: 'DELETE',
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const crearTarea = async (tareaNueva) => {
    try {
        const respuesta = await fetch(urltareas, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tareaNueva)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const obtenerTareaPorId = async (id) => {
    try {
        const respuesta = await fetch(urltareas + `/${id}`)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const editarTareaPorId = async (id, tareaEditada) => {
    try {
        const respuesta = await fetch(urltareas + `/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tareaEditada)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}