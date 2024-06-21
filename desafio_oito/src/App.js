import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Description from "./pages/Description";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="photos" element={<Photos />} />
          <Route path="description" element={<Description />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
