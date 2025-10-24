import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I’m <span className="purple">Salman Farzee</span>, a{" "}
            <span className="purple">Frontend React Developer</span> and{" "}
            <span className="purple">Full Stack MERN Engineer</span> based in{" "}
            <span className="purple">Chennai, India</span>.
            <br />
            With 3.5+ years of experience, I specialize in building scalable SPAs and enterprise-grade platforms using{" "}
            <b className="purple">React.js, Node.js, MongoDB, and TypeScript</b>.
            <br />
            I hold an MCA from{" "}
            <span className="purple">Measi Institute of Information Technology</span>, where I focused on{" "}
            <b className="purple">Advanced Algorithms, DBMS, and Web Technologies</b>.
            <br />
            <br />
            Outside production code, I stay sharp by engineering solutions and refining workflows:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Practicing JavaScript output edge cases and execution quirks 🔍
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing scalable SVG logos with pixel precision and responsive constraints 🎯
            </li>
            <li className="about-activity">
              <ImPointRight /> Iterating LaTeX resume layouts for ATS parsing and recruiter impact 📄
            </li>
            <li className="about-activity">
              <ImPointRight /> Refactoring UI components for accessibility, performance, and modular reuse ⚙️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every interface, API, and asset should be engineered for clarity, performance, and future-proofing."
          </p>
          <footer className="blockquote-footer">Salman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;