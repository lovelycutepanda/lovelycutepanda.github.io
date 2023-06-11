import './Career.css';
import { Card } from 'react-bootstrap';

function Career() {

  const timelineData = [
    {
      company: "ASMPT Hong Kong Limited",
      title: "Software Engineer",
      date: "06/2023 - Present",
      duties: []
    }, {
      company: "STFA Lee Shau Kee College",
      title: "Tutor",
      date: "10/2022 - 05/2023",
      duties: [
        "Taught in a class of 20+ f2-f3 students on Olympiad level Mathematics",
        "Prepared and explained 150+ questions on different topics",
        "Trained students for Mathematics Olympiad competitions"
      ]
    }, {
      company: "Smart Business Consultancy Limited",
      title: "IT Programmer trainee",
      date: "06/2022 - 08/2022",
      duties: [
        "Worked in a team of 8, built up company website using WordPress",
        "Responsible for server, domain hosting, WordPress plug-in related issues",
        "Designed company website overall structure, page layout and implemented",
        "Documented company website specifications for future maintenance"
      ]
    }
  ];

  return (
    <section id="career">
      <h2>Career</h2>
      {timelineData.length > 0 && (
        <div className="timeline-container">
          {timelineData.map((job, index) => 
            <div key={index} className={`timeline-item-container d-flex mx-2 ${index%2? "right" : "left"}`}>
              {index%2 == 1 && <div className="arrow" />}
              <Card className="timeline-item">
                <Card.Body>
                  <h5>{job.company}</h5>
                  <div className="d-flex justify-content-between">
                    <span><i>{job.title}</i></span>
                    <span><i>{job.date}</i></span>
                  </div>
                  <ul>
                  {job.duties.map((duty, idx) => 
                    <li key={idx}><p>{duty}</p></li>
                  )}
                  </ul>
                </Card.Body>
              </Card>
              {index%2 == 0 && <div className="arrow" />}
              <span className="circle" />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Career;
