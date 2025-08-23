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