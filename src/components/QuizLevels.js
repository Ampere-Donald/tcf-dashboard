import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./QuizLevels.css"; // Assure-toi d'avoir un fichier CSS pour le design

const levels = Array.from({ length: 20 }, (_, i) => i + 1);

const QuizLevels = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quizType = location.state?.quizType || "Quiz"; // Récupère le type de quiz

  const handleLevelSelect = (level) => {
    // Redirige vers le quiz spécifique après avoir choisi le niveau
    if (quizType === "Compréhension Orale") {
      navigate(`/quiz-comprehension-orale/${level}`);
    } else if (quizType === "Compréhension Écrite") {
      navigate(`/quiz-comprehension-ecrite/${level}`);
    } else if (quizType === "Expression Écrite") {
      navigate(`/quiz-expression-ecrite/${level}`);
    } else if (quizType === "Expression Orale") {
      navigate(`/quiz-expression-orale/${level}`);
    }
  };

  return (
    <div className="quiz-levels-container">
      <h2>Sélectionnez un niveau pour {quizType}</h2>
      <div className="levels-grid">
        {levels.map((level) => (
          <button key={level} className="level-btn" onClick={() => handleLevelSelect(level)}>
            Niveau {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizLevels;
