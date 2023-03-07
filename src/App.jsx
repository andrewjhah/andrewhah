import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  background-color: blue;

`

function App() {

  return (
    <Container>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </Container>
  )
}

export default App
