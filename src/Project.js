import './Project.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import csci2720 from "./photos/csci2720-project.png";
import csci3100 from "./photos/csci3100-project.png";
import chess from "./photos/simple-chess-program.png";
import file from "./photos/file-compression-program.png";

function Project() {

  const projects = [
    {
      img: csci2720,
      title: "CSCI2720 Project (group project)", 
      description: "A web application that allows users to check details of Hong Kong cultural events in different locations.",
      link: "https://github.com/lovelycutepanda/csci2720-project"
    }, {
      img: csci3100,
      title: "CSCI3100 Project (group project)", 
      description: "A strategic, point-and-click game simulating a student's journey in the Chinese University of Hong Kong.",
      link: "https://github.com/lovelycutepanda/csci3100-project"
    }, {
      img: chess,
      title: "Simple Chess Program", 
      description: "A simple chess program written in Python.",
      link: "https://github.com/lovelycutepanda/simple-chess-program"
    }, {
      img: file,
      title: "File Compression Program", 
      description: "A file compression program written in Matlab using Huffman's algorithm.",
      link: "https://github.com/lovelycutepanda/file-compression-program"
    }
  ]

  return (
    <section id="project">
      <h2>Projects</h2>
      <div >
        <Swiper navigation={true} pagination={{clickable: true}} modules={[Navigation, Pagination]}>
          {projects.map(({img, title, description, link}, index) => 
            <SwiperSlide key={index}>
              <Container className="m-auto">
                <Row>
                  <Col md={6} className="d-flex justify-content-md-end justify-content-center px-3">
                    <img src={img} alt={title}/>
                  </Col>
                  <Col md={6} className="d-flex px-3">
                    <div className="details">
                      <h5>{title}</h5>
                      <p>{description}</p>
                      <Button variant="success" href={link} className="p-3">Visit repository</Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      
    </section>
  );
}

export default Project;
