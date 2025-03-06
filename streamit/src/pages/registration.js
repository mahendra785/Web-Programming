import Link from "next/link"; 
import "../app/globals.css"
export default function Registration() {
  return (
    <div className="auth-page">
      {/* Navigation Bar */}
      <div className="top-bar">
        <div className="nav-stuff">
          <div className="cool-logo">StreamIt</div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="auth-container">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form className="signup-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit" className="red-button">Sign Up</button>
          </form>
          <p className="login-link">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}