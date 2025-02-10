import React from "react";
import { useNavigate } from "react-router-dom";
import "./SectionCard.css";

const SectionCard = ({ title, description }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    // Rediriger vers la page de sélection des niveaux avant d'aller vers le quiz spécifique
    navigate("/quiz-niveaux", { state: { quizType: title } });
  };

  return (
    <div className="section-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleStart}>Commencer</button>
    </div>
  );
};

export default SectionCard;
