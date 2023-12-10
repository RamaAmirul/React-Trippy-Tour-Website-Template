import "./styles.css";
import Navbar from "/src/components/navbar.js";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home.js";
import About from "./routes/about.js";
import Service from "./routes/service.js";
import Contact from "./routes/contact.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Navbar />
    </div>
  );
}
