import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import ecommerce from "../../Assets/Projects/ecommerce.png";
// import apiGateway from "../../Assets/Projects/apiGateway.png";
// import namoBharat from "../../Assets/Projects/namoBharat.png";
// import starHealth from "../../Assets/Projects/starHealth.png";
// import giantEIP from "../../Assets/Projects/giantEIP.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few enterprise and personal projects I've engineered
          recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={giantEIP}
              isLiveWebsite={false}
              isBlog={false}
              title="Giant EIP"
              description="Enterprise-grade platform built with React, Tailwind CSS, NestJS, and Prisma. Integrated secure RESTful APIs, JWT/OAuth authentication, and achieved full WCAG-compliant accessibility. Optimized frontend performance with lazy loading and Redux Toolkit."
              liveSite="" // to be updated
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={apiGateway}
              isLiveWebsite={false}
              isBlog={false}
              title="API Gateway"
              description="Frontend system for distributed cloud APIs. Built responsive UI with React-Bootstrap and optimized RESTful endpoints for 30% higher throughput. Diagnosed and resolved UI/UX inconsistencies to improve accessibility and visual consistency."
              liveSite="" // to be updated
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={namoBharat}
              isLiveWebsite={true}
              isBlog={false}
              title="Namo Bharat"
              description="Modular frontend architecture using React.js, Redux Toolkit, and Context API. Delivered responsive layouts and seamless API integration across mobile, tablet, and desktop. Reduced feature development time by 25% through reusable components."
              liveSite="https://rrts.co.in/web/dashboard/home" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={starHealth}
              isLiveWebsite={true}
              isBlog={false}
              title="Star Health Insurance"
              description="Full-stack modules built with Node.js, Express, and MongoDB. Integrated third-party APIs for enhanced platform functionality and managed data integrity with Mongoose. Achieved 40% faster response times and 20% higher user engagement."
              liveSite="" // to be updated
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={ecommerce}
              isLiveWebsite={false}
              isBlog={false}
              title="Full-Stack E-commerce Website"
              description="Internship project built with MERN stack. Designed responsive user and admin interfaces with React and Bootstrap. Implemented real-time inventory management and CRUD operations, reducing manual updates by 90%."
              liveSite="" // to be updated
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
