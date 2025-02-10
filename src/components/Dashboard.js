import React from "react";
import SectionCard from "./SectionCard";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Bienvenue sur votre Tableau de Bord</h1>
      <div className="progress-section">
        <h3>Votre Progression Globale</h3>
        <ProgressBar progress={70} />
      </div>
      <div className="cards-container">
        <SectionCard
          title="Expression Orale"
          description="Pratiquez votre expression orale avec des tests enregistrés."
        />
        <SectionCard
          title="Expression Écrite"
          description="Entraînez-vous à rédiger des réponses structurées."
        />
        <SectionCard
          title="Compréhension Écrite"
          description="Testez votre compréhension à l’aide de textes variés."
        />
        <SectionCard
          title="Compréhension Orale"
          description="Améliorez votre écoute avec des extraits audios."
        />
      </div>
    </div>
  );
};

export default Dashboard;
