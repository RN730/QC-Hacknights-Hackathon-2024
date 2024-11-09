import React from "react";
import { Link } from "react-router-dom";

function TitlePage() {
  return (
    <div className="title-page">
      <h1 className="title">Skills Match</h1>
      <p className="motto">Personalized Skills just for you</p>
      {/* Add a button to navigate to the main page */}
      <Link to="/main">
        <button className="start-button">Get Started</button>
      </Link>
    </div>
  );
}

export default TitlePage;
