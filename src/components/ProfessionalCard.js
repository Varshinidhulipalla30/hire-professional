import "./ProfessionalCard.css";

export default function ProfessionalCard({ name, skill, img }) {
  return (
    <div className="pro-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{skill}</p>
    </div>
  );
}
