import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home.js';
import About from './About.js';
import Skill from './Skill.js';
import Project from './Project.js';
import Career from './Career.js';
import Footer from './Footer.js';

function App() {
  return (
    <div id="app" className="bg-dark text-light">
      <div id="container" className="d-flex flex-column mx-auto px-2">

        <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" sticky="top">
          <Navbar.Brand href="#">Dicky Ku</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="px-3">About</Nav.Link>
              <Nav.Link href="#skill" className="px-3">Skills</Nav.Link>
              <Nav.Link href="#career" className="px-3">Career</Nav.Link>
              <Nav.Link href="#project" className="px-3">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Home />
        <About />
        <Skill />
        <Career />
        <Project />

        <Footer />

      </div>
    </div>
  );
}

export default App;
