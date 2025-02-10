import React, { useState, useEffect } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(120); // Temps total pour le quiz (en secondes)

  const questions = [
    {
      question: "Quel est le synonyme de 'rapide' ?",
      options: ["Lent", "Vite", "Doucement"],
      answer: "Vite",
    },
    {
      question: "Quelle est la capitale de la France ?",
      options: ["Paris", "Lyon", "Marseille"],
      answer: "Paris",
    },
    {
      question: "Quelle langue est la plus parlée au monde ?",
      options: ["Chinois", "Anglais", "Espagnol"],
      answer: "Chinois",
    },
  ];

  // Compte à rebours global
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      alert("Temps écoulé ! Le quiz est terminé.");
    }
  }, [timer]);

  // Gestion des réponses
  const handleAnswer = (option) => {
    if (option === questions[questionIndex].answer) {
      setScore(score + 1);
    }
  };

  // Navigation entre les questions
  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz : Compréhension Écrite</h2>
      <div className="timer">Temps restant : {Math.floor(timer / 60)}:{timer % 60}s</div>
      <div className="quiz-card">
        <p className="quiz-question">{questions[questionIndex].question}</p>
        <div className="quiz-options">
          {questions[questionIndex].options.map((option, index) => (
            <button
              key={index}
              className="quiz-option"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="quiz-navigation">
          <button
            className="quiz-nav-button"
            onClick={handlePrevious}
            disabled={questionIndex === 0}
          >
            Précédent
          </button>
          <button
            className="quiz-nav-button"
            onClick={handleNext}
            disabled={questionIndex === questions.length - 1}
          >
            Suivant
          </button>
        </div>
      </div>
      <footer className="quiz-footer">
        Question {questionIndex + 1} sur {questions.length} | Score : {score}
      </footer>
    </div>
  );
};

export default Quiz;
