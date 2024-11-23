import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen/homeScreen";
import AboutScreen from "./AboutScreen/aboutScreen";
import { useStore } from "./store";
import LoginScreen from "./LoginScreen/loginScreen";
import { useState } from "react";

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component={HomeScreen} />} />
      <Route
        path="/about"
        element={<ProtectedRoute Component={AboutScreen} />}
      />
      <Route path="/login" element={<LoginScreen/>} />
    </Routes>
  );
}

const ProtectedRoute = ({ Component }) => {
  const {isLogin} = useStore();
  const [loading,setLoading] = useState('false')

  if (isLogin) return <Component/>;
  else return <Navigate to="/login"/>;
};
export default App;