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
            My name is Adrian Mirabal and I am originally from Santo Domingo.
            Currently, I am studying systems engineering and have been
            self-learning web development for the past year. During this time, I
            have worked on various projects to showcase my knowledge and skills
            in this field.
          </p>
          <p>
            I have always been passionate about technology and programming, and
            I find it fascinating how a few lines of code can create amazing
            applications and software. Besides programming, I also have a keen
            interest in anime, series, science fiction, and video games. I find
            it refreshing to immerse myself in different worlds and explore new
            ideas. Additionally, I enjoy traveling around my country and
            discovering new places and cultures.
          </p>
          <p>
            My experience in programming has been both challenging and
            rewarding, and I am eager to continue learning and growing in this
            field. I am excited to showcase my projects and interests in my
            portfolio and hope that they will reflect my dedication and passion
            for software development and technology.
          </p>
        </div>
      </Presentation>
    </Container>
  );
}

export default About;
