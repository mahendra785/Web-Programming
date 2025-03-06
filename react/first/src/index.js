
import "./styles.css"; // Ensure your CSS file is in the "public" or "styles" directory

export default function Home() {
  return (
    <div>
        <div className="top-bar">
          <div className="nav-stuff">
            <div className="cool-logo">StreamIt</div>
            <div className="clicky-things">
          <div className="clicky-item">Home</div>
          <div className="clicky-item">TV Shows</div>
          <div className="clicky-item">Movies</div>
            </div>
            <a href="/login">
          <button className="login-button">Log In</button>
            </a>
          </div>
        </div>

        {/* Hero Section */}
      <div className="big-attention-grabber">
        <div className="middle-text">
          <h1>Watch All The Movies and Shows You Want!</h1>
          <div className="red-button">Start Watching Now!</div>
        </div>
      </div>
    </div>
  );
}
