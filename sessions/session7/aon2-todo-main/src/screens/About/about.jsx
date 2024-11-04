import Container from "../../components/Container/container";
import img from "../../assets/picture.png";
import "./about.css";
const AboutScreen = () => {
  return (
    <div>
      <Container>
      <div class="info">
          <h1>Welcome .</h1>
          <p>This is my first challenge with Html&CSS.</p>
        </div>
        <img className="image" src={img}/>
        <div class="footer">
          <p >This app cteated by <span class="aon">Aon2023</span></p>
        </div>
      </Container>
    </div>
  );
};

export default AboutScreen