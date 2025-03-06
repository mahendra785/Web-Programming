import Link from "next/link"; 
import "../app/globals.css"

const Watch = () => {
  return (
    <div>
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

      <div className="content-container">
        <div className="video-player">
          <video controls>
            <source src="/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-info">
          <h1>Movie Title</h1>
          <p className="description">
            This is a brief description of the movie or TV show episode you're watching.
          </p>
          <div className="video-controls">
            <button className="red-button">Add to Watchlist</button>
            <button className="red-button">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
