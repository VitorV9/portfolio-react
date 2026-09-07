import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae minus
      velit tempore quae magni, excepturi accusamus error blanditiis voluptatem
      repellat fugiat sed enim quia id dolor quas exercitationem doloremque
      debitis.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats-theta-five-48.vercel.app/api?username=VitorV9&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="Estatísticas do GitHub"
      />
      <img
        src="https://github-readme-stats-theta-five-48.vercel.app/api/top-langs/?username=VitorV9&layout=compact&langs_count=7&theme=dracula"
        alt="Linguagens mais usadas"
      />
    </GithubSecao>
  </section>
)

export default Sobre
