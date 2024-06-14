import Eugene from "../assets/Eugene.jpeg";
import { Container, Presentation, MyPhoto } from "./About.styles";

function About() {
  return (
    <Container>
      <h1 id="about">About Me</h1>
      <Presentation>
        <div>
          <MyPhoto src={Eugene} alt="mi foto" />
        </div>
        <div>
          <p>
            My name is Adrian Mirabal and I am currently studying systems
            engineering. I have always been passionate about technology and
            programming, and I find it fascinating how a few lines of code can
            create amazing applications and software.
          </p>
          <p>
            Besides programming, I also have a keen interest in anime, series,
            science fiction, and video games. I find it refreshing to immerse
            myself in different worlds and explore new ideas.
          </p>
          <p>
            My experience in programming has been both challenging and
            rewarding, and I am eager to continue learning and growing in this
            field. I am excited to showcase my projects and interests in my
            portfolio and hope that they will reflect my dedication and passion for
            software development and technology.
          </p>
        </div>
      </Presentation>
    </Container>
  );
}

export default About;
