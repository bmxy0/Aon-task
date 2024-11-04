import Container from "../Container/container";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const MainHeader = () => {
  const location= useLocation()
  return (
    <header>
      <Container>
        <div className="content">
          <div className="logo">
            <img src={"/logo.png"} />
          </div>
          <div className="menu">
            <Link to="/" className={(location.pathname === "/" ? "active" : "")}>
              Home
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </div>
        </div>

      </Container>
    </header>
  );
};

export default MainHeader;
