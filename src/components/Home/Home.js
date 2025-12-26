import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Experience from "./Experience";
import Education from "./Education";
import SocialBoard from "./SocialBoard";
import HomeInfoPage from "./HomeInfoPage";
import Techstack from "./Techstack";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <HomeInfoPage />
      </Container>
      <Home2 />
      <Experience />
      <Techstack />
      <Education />
      <SocialBoard />
    </section>
  );
}

export default Home;
