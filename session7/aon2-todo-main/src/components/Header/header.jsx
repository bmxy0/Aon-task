import Container from "../Container/container";
import "./header.css";

const MainHeader = () => {
  return (
    <header>
      <Container>
        <div className="content">
          <div className="logo">
            <img src={"/logo.png"} />
          </div>
          <div className="menu">
            <a className="active">Home</a>
            <a>About</a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
