import React from "react";
import "../styles/App.css";

const App = () => {
  // Define an array of dream projects
  const projects = [
    { name: "AI Tutor", description: "A personalized AI tutor for students." },
    {
      name: "Eco Tracker",
      description: "An app to track and reduce carbon footprint.",
    },
    {
      name: "HealthPal",
      description: "A virtual health assistant for regular checkups.",
    },
  ];

  return (
    <div className="ns-wrapper">
      {/* Map through the projects array to dynamically render components */}
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h1 data-ns-test="project-name">{project.name}</h1>
          <p data-ns-test="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
