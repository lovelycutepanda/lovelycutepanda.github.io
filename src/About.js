import './About.css';
import personalPhoto from './photos/personal_photo.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <Container className="mx-auto">
        <Row>
          <Col md={6} className="d-flex justify-content-md-end justify-content-center px-3">
            <img src={personalPhoto} alt="personal photo"/>
          </Col>
          <Col md={6} className="px-3">
            <p>
              I am fascinated by the application of Mathematics in the field of Computer Science. 
              I am particularly interested in the studies of data structures and algorithms, because hard works can be turned incredibly easy with logical thinking.
              In my spare time, I use to practise my coding skills through projects and platforms like leetcode.
            </p>
            <a href="https://github.com/lovelycutepanda" target="_blank"><FontAwesomeIcon icon={faGithub} size={"2xl"}/></a>
            <a href="https://www.linkedin.com/in/nok-tik-ku-92a130243" target="_blank"><FontAwesomeIcon icon={faLinkedin} size={"2xl"}/></a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
