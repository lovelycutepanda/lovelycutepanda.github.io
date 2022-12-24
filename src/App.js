import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import About from './About.js';
import Skill from './Skill.js';
import Project from './Project.js';
import Contact from './Contact.js';

function App() {
  return (
    <div id="app" className="bg-dark text-light">
      <div id="container" className="mx-auto p-2">
        <header style={{ position: "sticky", top: 0 }}>
          <Navbar bg="dark" variant="dark" expand="sm">
              <Navbar.Brand href="#">Dicky Ku</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#about" className="px-3">About</Nav.Link>
                  <Nav.Link href="#skill" className="px-3">Skills</Nav.Link>
                  <Nav.Link href="#project" className="px-3">Projects</Nav.Link>
                  <Nav.Link href="#contact" className="px-3">Contact Me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </header>

        <p>This is Dicky's personal page.</p>
        <About id="about" />
        <Skill id="skill" />
        <Project id="project" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
