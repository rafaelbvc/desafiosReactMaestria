import "./App.css";
import { BrowserRouter, Router, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Router>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Router>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
