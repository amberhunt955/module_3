import { useState } from "react";

// import components
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <h1>Auth Page</h1>

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Sign In"}
      </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
