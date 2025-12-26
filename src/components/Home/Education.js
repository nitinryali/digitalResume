import { Container } from "react-bootstrap";
import gayatriLogo from "../../../src/Assets/gayatriLogo.jpg";
import AdityaLogo from "../../../src/Assets/AdityaLogo.jpg";
import SasiLogo from "../../../src/Assets/SasiLogo.png";


function Education() {
    const educations = [
        {
            name: "Gayatri Vidya Parishad College of Engineering",
            course: "Bachelor of Technology in Computer Science",
            dates: "2020 - 2024",
            cgpa: "9.2",
            image: gayatriLogo,
        },
        {
            name: "Sasi Junior College",
            course: "Intermediate (MPC)",
            dates: "2018 - 2020",
            cgpa: "10 CGPA",
            image: SasiLogo,
        },
        {
            name: "Aditya (E.M) High School",
            course: "Secondary Education",
            dates: "2018",
            cgpa: "10 CGPA",
            image: AdityaLogo,
        }
    ];

    return (
        <Container fluid className="education-section" id="education">
            <Container>
                <h2 className="section-title" style={{ padding: "40px 0 20px" }}>
                    Education
                </h2>

                <div className="education-list">
                    {educations.map((edu, idx) => (
                        <div className="education-card" key={idx}>
                            <img src={edu.image} alt={`${edu.name} logo`} className="edu-logo" />
                            <div className="edu-content">
                                <h3 className="edu-name">{edu.name}</h3>
                                <div className="edu-course">{edu.course}</div>
                                <div className="edu-dates">{edu.dates}</div>
                                <div className="edu-grade"><strong>Grade:</strong> {edu.cgpa}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    );
}

export default Education;