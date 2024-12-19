import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, Description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-container">
        <h5 className="project-heading">{title}</h5>
        <a href={link} target="_blank">
          <div className="proj-imgbx">
            <img src={imgUrl} alt="" />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{Description}</span>
            </div>
          </div>
        </a>
      </div>
    </Col>
  );
};
