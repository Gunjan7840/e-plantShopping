import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    // You can later add navigation logic here
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop destination for healthy and beautiful plants.</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
