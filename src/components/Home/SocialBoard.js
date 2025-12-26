import { Container, Row, Col } from "react-bootstrap";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function SocialBoard() {

    return (
        <Container>
            <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
                <Col md={12} className="home-about-social">
                    <h1>Find Me On</h1>
                    <p>
                        Feel free to <span className="purple">connect </span>😉
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/nitinryali"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/ryali-nitin-sai-srinivas-56b992200/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/nithin_ryali/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default SocialBoard;