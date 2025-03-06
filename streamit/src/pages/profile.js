import Link from "next/link"; 
import "../app/globals.css"

export default function Profile() {
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
          <Link href="/">
            <button className="login-button">Log Out</button>
          </Link>
        </div>
      </div>

      {/* Profile Content */}
      <div className="content-container">
        <div className="profile-box">
          <h1>User Profile</h1>
          <div className="profile-info">
            <img src="/profile.png" alt="User Avatar" className="avatar" />
            <h2>Mahendra Choudhary</h2>
            <p>Email: mahendrac482@gmail.com</p>
            <p>Subscription: Premium</p>
          </div>
          <button className="red-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
