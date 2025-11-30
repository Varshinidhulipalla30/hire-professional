import React from "react";
import "./ProfessionalCard.css";

export default function ProfessionalCard({ name, skill }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{skill}</p>
    </div>
  );
}
