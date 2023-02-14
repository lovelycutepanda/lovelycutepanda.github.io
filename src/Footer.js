import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <section id="footer" className="mt-auto">
      <div className="footer-box mx-auto px-3">
      <Container fluid className="mx-auto">
        <Row>
          <Col md={6} className="d-flex flex-column">
            <a href="#" className="name">Dicky Ku</a>
            <a href="https://github.com/lovelycutepanda" target="_blank"><FontAwesomeIcon icon={faGithub} size={"2xl"}/> Github: lovelycutepanda</a>
            <a href="https://www.linkedin.com/in/dicky-ku" target="_blank"><FontAwesomeIcon icon={faLinkedin} size={"2xl"}/> LinkedIn: Nok Tik Ku</a>
          </Col>
          <Col md={6} className="d-flex contact justify-content-md-end justify-content-start">
            <div>
              <p style={{fontSize: "20px"}}>Contact me:</p>
              <p><FontAwesomeIcon icon={faPhone} size={"2xl"}/> Tel: (+852) 9416 0845</p>
              <p><FontAwesomeIcon icon={faEnvelope} size={"2xl"}/> Email: kudicky@yahoo.com.hk</p>
            </div>
          </Col>
        </Row>
      </Container>

        <p className="copyright">© Dicky Ku, 2023. All rights reserved.</p>
      </div>
      
      
    </section>
  );
}

export default Footer;
