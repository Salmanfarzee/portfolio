import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Salman Farzee, a product-driven{" "}
              <b className="purple">Frontend React Developer</b> and{" "}
              <b className="purple">Full Stack MERN Engineer</b> with over 3.5 years of experience
              building scalable, responsive, and accessible web platforms.
              <br />
              <br />
              I specialize in crafting pixel-perfect UIs, optimizing RESTful API integrations,
              and architecting robust backend services using{" "}
              <b className="purple">React.js, Node.js, MongoDB, and TypeScript</b>.
              <br />
              <br />
              My work spans enterprise-grade applications, e-commerce platforms, and cloud-based systems—
              each built with a focus on performance, modularity, and user-centric design.
              <br />
              <br />
              Whenever possible, I love building with{" "}
              <b className="purple">Redux Toolkit</b>,{" "}
              <b className="purple">Tailwind CSS</b>, and{" "}
              <b className="purple">NestJS</b> to deliver clean, maintainable code and seamless user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;