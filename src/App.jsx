import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioTareas from './components/FormularioTareas'

function App() {

  return (
    <>
      <h1 className='text-center my-5'>Aplicacion Tareas</h1>
      <section className='container contenedorForm py-2 bg-primary rounded-3'>
        <FormularioTareas />
      </section>
    </>
  )
}

export default App
