import { Container } from "react-bootstrap";
import Phenom_logo from "../../../src/Assets/Phenom_logo.png";
import Nptel_logo from "../../../src/Assets/nptel_logo.png";

function Experience() {
      const experiences = [
    {
      title: "Product Development Engineer - I",
      company: "Phenom",
      dates: "May 2024 - Present",
      description: "",
      skills: ["React.js", "Spring Boot", "Java", "MongoDB", "Microservices", "Micro-frontend", "Event-Driven Architecture", "Monitoring"],
      image: Phenom_logo,
    },
    {
      title: "Machine learning Intern",
      company: "NPTEL - IIT Palakkad",
      dates: "April 2023 - Jun 2023",
      description: "Exploring and selecting appropriate feature extraction methods to capture key characteristics of hair structure in images and implementing Convolutional neural networks (CNNs), to classify hair conditions accurately. In addition to that, fine-tuning model parameters to improve classification performance.",
      skills: ["Python", "CNN Architecture", "StreamLit", "Colab"],
      image: Nptel_logo,
    }
  ];
    return (
        <Container fluid className="experience-section" id="experience">
            <Container>
                <h2 className="section-title" style={{ padding: "40px 0 20px" }}>
                    Experience
                </h2>
                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <div className="timeline-item" key={idx}>
                            <div className="timeline-bullet" aria-hidden="true" />
                            <div className="timeline-card-wrapper">
                                <div className="timeline-card">
                                    <div className="card-top">
                                        <img
                                            src={exp.image}
                                            alt={`${exp.title} logo`}
                                            className="exp-image"
                                        />
                                        <div className="card-title">
                                            <h3>{exp.title}</h3>
                                            <h4 className="company">{exp.company}</h4>
                                            <span className="dates">{exp.dates}</span>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <p className="short-desc">{exp.description}</p>
                                        <br></br>
                                        <div className="extra">
                                            <p><b>Skills:</b></p>
                                            <ul className="skills">
                                                {exp.skills.map((s, i) => (
                                                    <li key={i} className="skill">
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/*<p className="long-desc">
                          {exp.description}
                        </p>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    );
}

export default Experience;