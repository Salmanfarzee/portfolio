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
              description="Full-Stack | Jan 2026 – Present. Built WCAG-compliant UI with React.js, Tailwind CSS, and Redux Toolkit, reducing render time by 50%. Engineered secure Node.js/Express RESTful APIs with JWT, OAuth, CORS, and Helmet, improving query efficiency by 45%. Integrated Axios for real-time data rendering across state-driven workflows."
              liveSite=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={apiGateway}
              isLiveWebsite={false}
              isBlog={false}
              title="API Gateway"
              description="Frontend Developer | Jun 2025 – Dec 2025. Designed and optimized RESTful APIs for distributed cloud systems, improving request throughput by 30%. Built responsive UI components with React-Bootstrap, HTML5, and CSS3 for cross-device compatibility. Diagnosed and resolved UI/UX inconsistencies, boosting accessibility scores across modules."
              liveSite=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={namoBharat}
              isLiveWebsite={true}
              isBlog={false}
              title="Namo Bharat"
              description="Frontend Developer | Apr 2023 – Dec 2023. Engineered modular, reusable React.js components, reducing development time for new features by 25%. Integrated RESTful APIs with responsive layouts for seamless performance across mobile, tablet, and desktop. Applied Redux Toolkit and Context API for optimized state management and reduced re-rendering overhead."
              liveSite="https://rrts.co.in/web/dashboard/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={starHealth}
              isLiveWebsite={false}
              isBlog={false}
              title="Star Health Insurance"
              description="Full-Stack Developer | Jul 2022 – Mar 2023. Engineered Node.js/Express backend APIs supporting real-time data sync with 40% faster response times. Integrated third-party APIs increasing user engagement by 20%. Managed MongoDB with Mongoose for data integrity and wrote Jest/RTL unit tests achieving 75%+ code coverage."
              liveSite=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={ecommerce}
              isLiveWebsite={false}
              isBlog={false}
              title="Full-Stack E-commerce"
              description="Internship Project | Dec 2021 – Apr 2022. Built and deployed a full-stack MERN e-commerce platform with separate user and admin interfaces on Netlify. Implemented JWT-based auth and cart logic with Redux. Designed RESTful APIs with Node.js/Express and managed product, order, and user data in MongoDB."
              liveSite=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
