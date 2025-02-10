import React, { useState, useEffect } from "react";
import "./Quiz.css";

const WrittenQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300); // Temps total pour le quiz (5 minutes)

  const questions = [
    {
      question: "Quelle est la bonne manière de conclure une lettre formelle ?",
      options: [
        "Cordialement",
        "À bientôt",
        "Amicalement",
        "Salut",
      ],
      answer: "Cordialement",
    },
    {
      question: "Dans quel contexte utilise-t-on une lettre de motivation ?",
      options: [
        "Pour un rendez-vous médical",
        "Pour un emploi",
        "Pour inviter un ami",
        "Pour demander un congé",
      ],
      answer: "Pour un emploi",
    },
    {
      question: "Que signifie le mot 'explicitement' dans une lettre ?",
      options: [
        "De manière claire et précise",
        "Avec ambiguïté",
        "En cachant l'information",
        "En utilisant des métaphores",
      ],
      answer: "De manière claire et précise",
    },
    {
      question: "Que doit-on inclure dans une lettre de démission ?",
      options: [
        "Des plaintes personnelles",
        "Des remerciements et la date de départ",
        "Des blâmes envers l'employeur",
        "Aucune information",
      ],
      answer: "Des remerciements et la date de départ",
    },
    {
      question: "Quel est le synonyme de 'convaincant' ?",
      options: [
        "Douteux",
        "Persuasif",
        "Flou",
        "Ambigu",
      ],
      answer: "Persuasif",
    },
  ];

  // Timer global pour tout le quiz
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
      <h2>Quiz : Expression Écrite</h2>
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

export default WrittenQuiz;
