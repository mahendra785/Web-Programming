import Link from "next/link"; 
import "../app/globals.css"
import { useState } from "react";
export default function TVShows() {
  const [genre, setGenre] = useState("all");

  const shows = [
    { id: 1, title: "Dilwale Dulhania Le Jayenge", genre: "drama", img: "/download.jpg" },
    { id: 2, title: "Sacred Games", genre: "action", img: "/download.jpg" },
    { id: 3, title: "Friends", genre: "comedy", img: "/download.jpg" },
    { id: 4, title: "Mirzapur", genre: "action", img: "/download.jpg" },
    { id: 5, title: "The Office", genre: "comedy", img: "/download.jpg" },
    { id: 6, title: "Breaking Bad", genre: "drama", img: "/download.jpg" },
  ];

  // Filter TV shows based on selected genre
  const filteredShows = genre === "all" ? shows : shows.filter((show) => show.genre === genre);

  return (
    <div>
      {/* Navigation Bar */}
      <div className="top-bar">
        <div className="nav-stuff">
          <div className="cool-logo">StreamIt</div>
          <div className="clicky-things">
            <Link href="/" className="clicky-item">Home</Link>
            <Link href="/tvshows" className="clicky-item">TV Shows</Link>
            <Link href="/movies" className="clicky-item">Movies</Link>
          </div>
          <Link href="/profile">
            <button className="login-button">Profile</button>
          </Link>
        </div>
      </div>

      {/* TV Shows Content */}
      <div className="content-container">
        <h1>TV Shows</h1>

        {/* Genre Filter Dropdown */}
        <div className="filter-container" style={{ marginBottom: "20px", padding: "10px" }}>
          <select id="genre" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="all">All</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
          </select>
        </div>

        {/* TV Show Grid */}
        <div className="show-grid">
          {filteredShows.map((show) => (
            <div key={show.id} className="show-item">
              <img src={show.img} alt={show.title} />
              <h3>{show.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
