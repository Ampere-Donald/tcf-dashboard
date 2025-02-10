import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import QuizLevels from "./components/QuizLevels";
import OralQuiz from "./components/OralQuiz";
import WrittenQuiz from "./components/WrittenQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz-niveaux" element={<QuizLevels />} />
        <Route path="/quiz-comprehension-orale/:level" element={<OralQuiz />} />
        <Route path="/quiz-comprehension-ecrite/:level" element={<WrittenQuiz />} />
        <Route path="/quiz-expression-orale/:level" element={<WrittenQuiz />} />
        <Route path="/quiz-expression-orale/:level" element={<WrittenQuiz />} />
        
      </Routes>
    </Router>
  );
}

export default App;
