import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";
import styled from "styled-components";
import Footer from "./components/Footer";
import Search from "./components/Search";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Search />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="/movie/:movieid" element={<MovieDetails />} />
        <Route path="/show" element={<ShowDetails />} />
        <Route path="/show/:showid" element={<ShowDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
