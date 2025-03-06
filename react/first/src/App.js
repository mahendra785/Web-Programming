import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watch from "./pages/Watch";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Watch />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
