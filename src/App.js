import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Gift from "./pages/Gift";
import Make from "./pages/Make";

/*
Home : 메인 페이지
Make : 선물 만들기
Gift : 선물 받기
*/

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make" element={<Make />} />
        <Route path="/gift" element={<Gift />} />
      </Routes>
    </div>
  );
}

export default App;
