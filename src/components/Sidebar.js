import React from "react";
import "./Sidebar.css";
import logo from "../assets/images/logo.jpg"; // Chemin vers ton logo

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2>Menu TCF</h2>
      <ul>
        <li>🔹 Bouquet Basic </li>
        <li>🔹 Bouquet Standard </li>
        <li>🔹 Bouquet Premium </li>
        <li>🔹 Bouquet Gold</li>
        <li>🔹 Bouquet Diamond</li>
        <li>🔹 Bouquet Elite</li>
        <li>🔹 Bouquet Platinum</li>
        <li>🔹 Bouquet Ultimate</li>
      </ul>
      <button className="home-button" onClick={() => window.location.href = "index.html"}>
        🏠 Retour Accueil
      </button>
    </div>
  );
};

export default Sidebar;
