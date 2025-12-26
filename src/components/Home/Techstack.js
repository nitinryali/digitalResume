import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import DSA from "../../Assets/TechIcons/DSA.svg";
import SpringBoot from "../../Assets/TechIcons/SpringBoot.svg";

function Techstack() {
  return (
    <Container fluid className="tech-section">
      <h2 className="section-title" style={{ padding: "40px 0 20px" }}>
        Skills
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={C} alt="C++" />
          <div className="tech-icons-text">C++</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Python} alt="Python" />
          <div className="tech-icons-text">Python</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Java} alt="haskell" />
          <div className="tech-icons-text">Java</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="javascript" />
          <div className="tech-icons-text">Javascript</div>
        </Col>
             <Col xs={4} md={2} className="tech-icons">
          <img src={DSA} alt="DSA" className="tech-icon-images" />
          <div className="tech-icons-text">DSA</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="react" />
          <div className="tech-icons-text">React.Js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={SpringBoot} alt="SpringBoot" className="tech-icon-images" />
          <div className="tech-icons-text">SpringBoot</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Mongo} alt="mongoDb" />
          <div className="tech-icons-text">Mongo DB</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Git} alt="git" />
          <div className="tech-icons-text">Git</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Redis} alt="redis" />
          <div className="tech-icons-text">Redis</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Docker} alt="docker" />
          <div className="tech-icons-text">Docker</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Kafka} alt="Kafka" className="tech-icon-images" />
          <div className="tech-icons-text">Kafka</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
