import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import All from "./components/All";
import Fsd from "./components/Full_Stack_Development";
import Data_sc from "./components/Data_Science";
import Cyber from "./components/Cyber_Security";
import Career from "./components/Career";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/All" element={<All />}></Route>
          <Route path="/Fsd" element={<Fsd />}></Route>
          <Route path="/Data_sc" element={<Data_sc />}></Route>
          <Route path="/Cyber" element={<Cyber />}></Route>
          <Route path="/Career" element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
