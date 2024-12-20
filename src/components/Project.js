import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
export const Projects = () => {
  const projects = [
    {
      title: "AI Trip Planner",
      Description:
        " A web app that uses AI to generate personalized travel itineraries based on user preferences, built with React, Firebase, and Google Cloud.",
      imgUrl: projImg1,
      link: "https://ai-trip-planner-yash-malhotra.vercel.app/",
    },
    {
      title: "Tetris Game",
      Description:
        "A classic Tetris game built with JavaScript, featuring dynamic controls and smooth gameplay. It challenges users to clear lines by arranging falling blocks, with an increasing level of difficulty.",
      imgUrl: projImg2,
      link: "https://tetrisgame-yashmalhotra.vercel.app/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInDown" : ""
                  }
                >
                  <h2>Projects</h2>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mt-3 mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Project Tab 2</Tab.Pane>
                <Tab.Pane eventKey="third">Project Tab 3</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
