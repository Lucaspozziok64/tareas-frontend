import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioTareas from './components/FormularioTareas'

function App() {

  return (
    <>
      <h1 className='text-center my-5'>Aplicacion Tareas</h1>
      <Container className='py-2 bg-primary rounded-3'>
        <FormularioTareas />
      </Container>
    </>
  )
}

export default App
