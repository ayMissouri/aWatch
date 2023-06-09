import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="/show" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
