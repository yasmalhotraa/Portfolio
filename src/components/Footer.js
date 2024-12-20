import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.png.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/yash-malhotra-405a9222a/"
                target="_Blank"
              >
                <img src={navIcon1} alt=""></img>
              </a>
              <a href="tel:+919871998928">
                <img src={navIcon2} alt=""></img>
              </a>
              <a href="mailto:yashmalhotra330@gmail.com">
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
