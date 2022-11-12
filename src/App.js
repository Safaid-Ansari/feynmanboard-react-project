import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTopic from "./components/AddTopic";
import Dashboard from "./components/Dashboard";
// import LandingPage from "./components/LandingPage";
import { ToastContainer } from "react-toastify";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <h1> E-Commerce </h1> */}
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/addTopic" element={<AddTopic></AddTopic>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

          {/* <Route path="/" element={<Login></Login>}></Route> */}
          <Route path="/" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
