import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Games from "./pages/Games";
import Software from "./pages/Software";
import Goals from "./pages/Goals";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/games" element={<Games />} />
        <Route path="/software" element={<Software />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

