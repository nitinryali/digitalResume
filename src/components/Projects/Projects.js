import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import library from "../../Assets/Projects/library.png";
import whatsapp from "../../Assets/Projects/whatsapp.png";
import memeGenerator from "../../Assets/Projects/memeGenerator.png";
import hairDetection from "../../Assets/Projects/hairDetection.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description="The Library Management System is a web application built using Django, Python, SQLite, Solidity, and HTML/CSS/JS. It allows librarians to manage books and track student attendance, along with additional features such as due date reminders. The system includes a functionality for students to admit their entry by scanning their ID. Both librarians and students have a variety of options, including sending due date reminders via email and the ability to add, delete, and update books. The system also integrates Soulbound Tokens (SBT) for proof of identity."
              ghLink="https://github.com/nitinryali/Library-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsapp}
              isBlog={false}
              title="Chat Analyzer"
              description="Chat Analyzer is a tool developed using the Pandas library in Python. It allows users to analyze and gain insights from their WhatsApp chat data. The tool can read and process chat logs exported from WhatsApp, extracting information such as message timestamps, sender names, and message content. By leveraging the power of Pandas, the analyzer provides features like counting messages, generating word frequency statistics, identifying the most active participants, and visualizing chat trends. It enables users to gain a deeper understanding of their WhatsApp conversations quickly and efficiently."
              ghLink="https://github.com/nitinryali/chat-analysis-adv"
              demoLink="https://nitinryali-chat-analysis-adv-app-q1q3vn.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hairDetection}
              isBlog={false}
              title="Hair Condition Detection"
              description="Hair Condition Detection is a system developed using Convolutional Neural Networks (CNN) and Scanning Electron Microscope (SEM) images to analyze and assess the condition of hair. By leveraging CNN, the system can effectively analyze the structural features present in SEM images of hair samples. This enables the system to identify and classify various hair conditions such as High damage,damage,weak damage."
              ghLink="https://github.com/nitinryali/Hair-condition-detection/"
              demoLink="https://nitinryali-hair-condition-detection-app-imo2qx.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memeGenerator}
              isBlog={false}
              title="Meme Generator"
              description="Meme Generator is a simple web application to generate memes based on famous templates served by an API and you can download & share it."
              ghLink="https://github.com/nitinryali/Mememaker"
              demoLink="https://nitinryali.github.io/Mememaker/"
            />
          </Col>





        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
