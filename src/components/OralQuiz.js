import React, { useState, useEffect } from "react";
import "./Quiz.css";

const OralQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(180); // Temps total pour le quiz (3 minutes)

  const questions = [
    {
      question: "Que signifie le mot entendu dans l'audio ?",
      options: ["Rapide", "Lent", "Doucement"],
      answer: "Rapide",
      audio: "/audios/audio1.mp3",
    },
    {
        question: "Que signifie le mot entendu dans l'audio ?",
        options: ["Rapide", "Lent", "Doucement"],
        answer: "Rapide",
        audio: "/audios/audio1.mp3",
      },
    {
      question: "Quelle est la conclusion de la vidéo ?",
      options: [
        "Les voitures électriques sont meilleures.",
        "Les voitures à essence sont meilleures.",
        "Les deux types de voitures sont identiques.",
      ],
      answer: "Les voitures électriques sont meilleures.",
      video: "/videos/video1.mp4",
    },
    {
        question: "Quelle est la conclusion de la vidéo ?",
        options: [
          "Les voitures électriques sont meilleures.",
          "Les voitures à essence sont meilleures.",
          "Les deux types de voitures sont identiques.",
        ],
        answer: "Les voitures électriques sont meilleures.",
        video: "/videos/video1.mp4",
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
      <h2>Quiz : Compréhension Orale</h2>
      <div className="timer">Temps restant : {Math.floor(timer / 60)}:{timer % 60}s</div>
      <div className="quiz-card">
        {/* Affichage du média audio ou vidéo */}
        {questions[questionIndex].audio && (
          <audio controls>
            <source src={questions[questionIndex].audio} type="audio/mp3" />
            Votre navigateur ne supporte pas la lecture audio.
          </audio>
        )}
        {questions[questionIndex].video && (
          <video controls width="100%">
            <source src={questions[questionIndex].video} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        )}
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

export default OralQuiz;
