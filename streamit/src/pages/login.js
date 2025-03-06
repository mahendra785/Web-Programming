import Link from "next/link"; 
import "../app/globals.css"
export default function Login() {
  return (
    <div className="auth-page">
      {/* Navigation Bar */}
      <div className="top-bar">
        <div className="nav-stuff">
          <div className="cool-logo">StreamIt</div>
        </div>
      </div>

      {/* Login Form */}
      <div className="auth-container">
        <div className="login-box">
          <h2>Log In</h2>
          <form className="login-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="red-button">Log In</button>
          </form>
          <div className="form-footer">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <p className="signup-link">
            New to MovieFlix? <Link href="/registration">Sign up now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
