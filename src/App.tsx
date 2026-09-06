import { Container } from './styles'
import Projetos from './containers/Projetos'
import EstiloGlobal from './styles'
import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
