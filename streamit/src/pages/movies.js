import Link from "next/link"; 
import "../app/globals.css"

export default function Movies() {
  const movies = [
    { title: "Cosmic Adventure", image: "/download.jpg" },
    { title: "Midnight Memories", image: "/download.jpg" },
    { title: "Urban Legends", image: "/download.jpg" },
    { title: "Digital Frontier", image: "/download.jpg" },
    { title: "Silent Echoes", image: "/download.jpg" },
    { title: "Quantum Shift", image: "/download.jpg" },
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <div className="top-bar">
        <div className="nav-stuff">
          <div className="cool-logo">StreamIt</div>
          <div className="clicky-things">
            <Link href="/" className="clicky-item">Home</Link>
            <Link href="/tv-shows" className="clicky-item">TV Shows</Link>
            <Link href="/movies" className="clicky-item">Movies</Link>
          </div>
          <Link href="/profile">
            <button className="login-button">Profile</button>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container">
        <h1>Trending Movies</h1>
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <div className="movie-item" key={index}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
