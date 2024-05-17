import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import HotelPage from "./components/HotelPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage title="StayBit" />} />
          <Route path="/details" element={<HotelPage title="StayBit" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
