import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import Error from "./pages/Error";
import { SearchForm } from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
