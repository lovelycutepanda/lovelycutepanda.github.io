import './Skill.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function Skill() {

  const skills = [
    {
      title: "Programming",
      content: [
        {
          item: "C/C++",
          rating: 10
        }, {
          item: "Javascript",
          rating: 9
        }, {
          item: "Python",
          rating: 8
        }, {
          item: "Matlab",
          rating: 6
        }
      ]
    }, {
      title: "Computer",
      content: [
        {
          item: "HTML/CSS",
          rating: 9
        }, {
          item: "LaTeX",
          rating: 8
        }, {
          item: "Lightworks",
          rating: 8
        }, {
          item: "GeoGebra",
          rating: 6
        }
      ]
    }, {
      title: "Language",
      content: [
        {
          item: "Cantonese",
          rating: 10
        }, {
          item: "English",
          rating: 9
        }, {
          item: "Mandarin",
          rating: 8
        }
      ]
    }
  ]

  return (
    <section id="skill">
      <h2>Skills</h2>
      <Container fluid className="mx-auto">
        <Row>
          {skills.map(({title, content}, index) => 
            <Col className="d-flex px-3 justify-content-center" key={title} lg={12/skills.length}>
              <Container className="skill-item">
                <h5>{title}</h5>
                {content.map(({item, rating}) => 
                  <div className="skill-title" key={item}>
                    <div className="d-flex justify-content-between skill-data">
                      <p><b>{item}</b></p>
                      <p>{rating}/10</p>
                    </div>
                    <ProgressBar now={rating*10} />
                  </div>
                )}
              </Container>
            </Col>
          )}
        </Row>
      </Container>
      
    </section>
  );
}

export default Skill;
