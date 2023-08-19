import Header from './components/header/header'
import AboutMe from './components/aboutme/aboutme'
import Timeline from './components/timeline/timeline'
import Skills from './components/skills/skills'
import Projetos from './components/projetos/projetos'
import Cerfications from './components/certifications/certifications'
import Networks from './components/networks/networks'

export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Timeline />
      <Skills />
      <Projetos />
      <Cerfications />
      <Networks />
    </div>
  )
}
