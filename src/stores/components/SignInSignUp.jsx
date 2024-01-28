
import React, { useState } from "react";
//import { auth } from "./firebase";

const signInSignUpStyle = {
  maxWidth: "400px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const inputStyle = {
  width: "100%",
  marginBottom: "10px",
  padding: "8px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const SignInSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const handleAuth = async () => {
    try {
      if (isSignIn) {
        // Sign In
        await auth.signInWithEmailAndPassword(email, password);
      } else {
        // Sign Up
        await auth.createUserWithEmailAndPassword(email, password);
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <div style={signInSignUpStyle}>
      <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleAuth} style={buttonStyle}>
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
      <p>
        {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsSignIn(!isSignIn)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#4CAF50",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
      </p>
    </div>
  );
};

export default SignInSignUp;
