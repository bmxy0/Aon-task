import "./App.css";
import MainHeader from "./components/Header/header";
import AboutScreen from "./screens/About/about";
import HomeScreen from "./screens/Home/home";
import {BrowserRouter,Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <MainHeader />
      <Routes>
      <Route path="/" element={<HomeScreen/>}></Route>
      <Route path="/about" element={ <AboutScreen/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
