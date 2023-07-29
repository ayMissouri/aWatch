import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";
import AnimeDetails from "./pages/AnimeDetails";
import styled from "styled-components";
import Footer from "./components/Footer";

function App() {
  // const [showScrollbar, setShowScrollbar] = useState(false);

  // useEffect(() => {
  //   const container = document.querySelector(".custom-scrollbar");
  //   if (container) {
  //     setShowScrollbar(container.scrollHeight > container.clientHeight);
  //   }
  // }, []);

  // const Scrollbar = styled.div`
  //   height: 100vh; /* Set the desired height or adjust as needed */
  //   overflow-y: scroll; /* Enable vertical scrolling */
  //   scrollbar-width: thin; /* Width of the scrollbar */
  //   scrollbar-color: #890730 #c70a46; /* Color of the scrollbar track and thumb */
  //   ::-webkit-scrollbar {
  //     width: 8px; /* Width of the scrollbar */
  //   }
  //   ::-webkit-scrollbar-track {
  //     background: #212121; /* Color of the scrollbar track */
  //   }
  //   ::-webkit-scrollbar-thumb {
  //     background-color: #fe125d; /* Color of the scrollbar thumb */
  //     border-radius: 50px;
  //   }
  //   .custom-scrollbar.show::-webkit-scrollbar {
  //     display: none; /* Hide the scrollbar */
  //   }
  // `;

  return (
    <Router>
      {/* <Scrollbar className={`custom-scrollbar ${showScrollbar ? "show" : ""}`}> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="/movie/:movieid" element={<MovieDetails />} />
        <Route path="/show" element={<ShowDetails />} />
        <Route path="/show/:showid" element={<ShowDetails />} />
        <Route path="/anime" element={<AnimeDetails />} />
        <Route path="/anime/:animeid" element={<AnimeDetails />} />
      </Routes>
      {/* </Scrollbar> */}
      <Footer />
    </Router>
  );
}

export default App;
