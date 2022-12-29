import './App.css';
import { useRef } from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';
import useScrollSpy from 'react-use-scrollspy';
import Home from './Home.js';
import About from './About.js';
import Skill from './Skill.js';
import Project from './Project.js';
import Career from './Career.js';
import Footer from './Footer.js';

function App() {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const sections = [Home, About, Skill, Career, Project];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -60,
  });

  return (
    <div id="app" className="text-light">
      <div id="container" className="d-flex flex-column mx-auto px-3">

        <Navbar id="navbar" collapseOnSelect variant="dark" expand="sm" sticky="top">
          <Navbar.Brand href="#">Dicky Ku</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="px-3" style={{color: `${activeSection === 1 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255, 0.55)"}`}}>About</Nav.Link>
              <Nav.Link href="#skill" className="px-3" style={{color: `${activeSection === 2 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255, 0.55)"}`}}>Skills</Nav.Link>
              <Nav.Link href="#career" className="px-3" style={{color: `${activeSection === 3 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255, 0.55)"}`}}>Career</Nav.Link>
              <Nav.Link href="#project" className="px-3" style={{color: `${activeSection === 4 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255, 0.55)"}`}}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {sections.map((Component, index) => 
          <div ref={sectionRefs[index]} key={index}>
            <Component />
          </div>)}

        <Footer />

      </div>
    </div>
  );
}

export default App;
