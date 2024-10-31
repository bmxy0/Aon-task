import logo from "./assets/logo.png";
import img from "./assets/picture.png";
import "./about.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <body>
    <header>
      <div class="container">
        <div class="content">
          <div class="logo">
            <img src={logo} />
          </div>
          <div class="menu">
          <Link to="/" >Home</Link>
          <Link className="active">About</Link>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="info">
          <h1>Welcome .</h1>
          <p>This is my first challenge with Html&CSS.</p>
        </div>

        <img src={img}/>
        <div class="footer">
          <p >This app cteated by <span class="aon">Aon2023</span></p>
        </div>
      </div>
  
    </main>
  


    </body>
  )
}