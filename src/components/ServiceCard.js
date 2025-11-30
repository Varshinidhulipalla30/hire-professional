import "./ServiceCard.css";

export default function ServiceCard({ title, img }) {
  return (
    <div className="service-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
