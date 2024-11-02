import "./App.css";
import MainHeader from "./components/Header/header";
import AboutScreen from "./screens/About/about";
import HomeScreen from "./screens/Home/home";

function App() {
  return (
    <div>
      <MainHeader />
      {/* <HomeScreen/> */}
      <AboutScreen/>
    </div>
  );
}

export default App;
