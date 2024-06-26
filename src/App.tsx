import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Projects } from "./layout/sections/projects/Projects";
import { About } from "./layout/sections/about/About";
import { Footer } from "./layout/footer/Footer";
import { ParticleOld } from "./components/particleOld/ParticleOld";

function App() {
  return (
    <div className="App">
      <ParticleOld />
      <Header />
      <Main />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
