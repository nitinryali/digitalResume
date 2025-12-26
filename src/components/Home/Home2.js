import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
             I’m a Product Developer who enjoys turning complex requirements into clean, scalable, and maintainable solutions.
             Over time, I’ve worked with a variety of technologies and discovered a strong interest in building robust backend systems and modular, user-focused applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                   Java, Javascript, Python, React.js, Spring Boot with a solid foundation in Data Structures and Algorithms and Troubleshooting{" "}
                </b>
              </i>
              — and I enjoy designing and implementing event-driven architectures, microservices, and micro-frontend systems that scale efficiently and remain easy to evolve.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  modern web applications, building distributed systems, and exploring the use of AI Agents {" "}
                </b>
              </i>
              and modern developments in tech to improve developer productivity and system intelligence.
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={"https://nitinryali.github.io/Portfolio/static/media/avatar.5923588cff0168a41357386de9bd02b5.svg"} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
