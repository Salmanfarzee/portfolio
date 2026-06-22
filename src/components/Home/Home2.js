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
              I’m Salman Farzee, a{" "}
              <b className="purple">Senior React / Full-Stack MERN Developer</b> with{" "}
              <b className="purple">4+ years of experience</b> building scalable SPAs
              and enterprise-grade web platforms.
              <br />
              <br />
              I specialize in crafting pixel-perfect UIs, optimizing RESTful API consumption,
              and architecting robust backend services using{" "}
              <b className="purple">React.js, Redux Toolkit, Node.js, Express, MongoDB, and TypeScript</b>.
              <br />
              <br />
              My work spans enterprise-grade applications across 5+ projects — each built with a focus
              on performance, accessibility, and Agile delivery.
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