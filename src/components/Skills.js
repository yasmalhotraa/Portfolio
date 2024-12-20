import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { ArrowRightCircle } from "react-bootstrap-icons";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <div className="skill-types-bx">
                <div className="skill-container">
                  <h5>Languages & Databases</h5>
                  <div className="skill-points">
                    <p>
                      <ArrowRightCircle className="arrow-right" /> JavaScript
                      (ES6+)
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Python
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> C++
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Firebase
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Firebase
                      Firestore (No SQL)
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> HTML
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> CSS
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Latex
                    </p>
                  </div>
                </div>
                <div className="skill-container">
                  <h5>Frameworks & Libraries</h5>
                  <div className="skill-points">
                    <p>
                      <ArrowRightCircle className="arrow-right" /> React JS
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Node.js
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Tailwind CSS
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Vite
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Pandas
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Numpy
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Bootstrap CSS
                    </p>
                  </div>
                </div>
                <div className="skill-container">
                  <h5>Cloud & APIs</h5>
                  <div className="skill-points">
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Google Cloud
                      Platform (GCP)
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Firebase
                      (Database)
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Firebase
                      (Authentication)
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Gemini AI API
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Google APIs
                    </p>
                  </div>
                </div>
                <div className="skill-container">
                  <h5>Version Control</h5>
                  <div className="skill-points">
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Git
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Github
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> GitLab
                    </p>
                  </div>
                </div>
                <div className="skill-container">
                  <h5>Visualization Tools</h5>
                  <div className="skill-points">
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Power BI
                    </p>
                  </div>
                </div>
                <div className="skill-container">
                  <h5>Other Skills</h5>
                  <div className="skill-points">
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Data Analysis
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Advanced
                      Excel
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Artificial
                      Intelligence
                    </p>
                    <p>
                      <ArrowRightCircle className="arrow-right" /> Dynamic
                      Content Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorSharp"
      />
    </section>
  );
};
