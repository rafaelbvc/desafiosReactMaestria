import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import { HookUseContext } from "./components/Hooks/HookUseContext.js";

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
