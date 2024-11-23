import "./header.css"
import vector1 from "../../assets/Vector 4.svg"
import vector2 from "../../assets/Vector5.svg"
const Header = () =>{


  return (<div className="header">
    <h1>Welcome to Your Freelancing Hub!</h1>
    <p>We’re thrilled to have you here! Whether you're a client searching for skilled freelancers to bring your projects to life or a freelancer eager to find exciting opportunities, this is the place where connections are made, and ideas come to reality. Let's start building something amazing together!</p>
    <img src={vector1}  className="vector1"/> <img src={vector2}  />
  </div>)


}


export default Header