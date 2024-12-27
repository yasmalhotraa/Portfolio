import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
export const Projects = () => {
  const projects1 = [
    {
      title: "AI Trip Planner",
      Description:
        "A web app that uses AI to generate personalized travel itineraries based on user preferences, built with React, Firebase, and Google Cloud.",
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
    {
      title: "Virtual Currency Library System",
      Description:
        "A live cryptocurrency tracker built with React and Bootstrap, featuring real-time updates and interactive data visualization. Users can explore and analyze various cryptocurrencies, with key metrics such as price and market cap displayed dynamically.",
      imgUrl: projImg3,
      link: "https://vcls-yash-malhotra.vercel.app/",
    },
    {
      title: "Student Management System",
      Description:
        "A full-stack student management system built with React, TailwindCSS, and Supabase, featuring responsive UI and seamless state management using Zustand. It supports efficient CRUD operations with Prisma ORM.",
      imgUrl: projImg4,
      link: "https://fullstack-student-database.vercel.app/students",
    },
  ];

  const projects2 = [
    {
      title: "Cricket Analysis Dashboard",
      Description:
        "Cricket Data Analysis project with a Power BI dashboard for player performance and match trends, supported by data analysis in a Jupyter Notebook using Python and Pandas. GitHub repository includes Power BI files, a Jupyter Notebook (.ipynb), and Python scripts.",
      imgUrl: projImg5,
      link: "https://github.com/yasmalhotraa/T20-Cricket-Analysis",
    },
    {
      title: "Air Quality Report",
      Description:
        "An interactive Power BI dashboard analyzing air quality data to visualize pollution levels, identify trends, and provide insights into air quality metrics over time.",
      imgUrl: projImg6,
      link: "https://github.com/yasmalhotraa/Air-Quality-Report",
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
                  <Nav.Link eventKey="first">Software & Web Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Data Analysis Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
