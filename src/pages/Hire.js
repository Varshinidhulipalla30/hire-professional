import React from "react";
import Navbar from "../components/Navbar";
import "./Hire.css";

const professionals = [
  { name: "Ramesh Kumar", service: "Electrician", img: "https://images.unsplash.com/photo-1581090464777-1c3f1a06c13b?w=400&auto=format&fit=crop" },
  { name: "Sita Patel", service: "Plumber", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&auto=format&fit=crop" },
  { name: "Vikram Singh", service: "House Cleaning", img: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=400&auto=format&fit=crop" },
  { name: "Anita Reddy", service: "Appliance Repair", img: "https://images.unsplash.com/photo-1581091012184-2b54a1c1e06f?w=400&auto=format&fit=crop" },
  { name: "Rohit Sharma", service: "Gardening", img: "https://images.unsplash.com/photo-1599058917211-1c7c2fa4295d?w=400&auto=format&fit=crop" }
];

export default function Hire() {
  const handleHire = (name) => alert(`You have hired ${name}!`);

  return (
    <div>
      <Navbar />
      <div className="hire-container">
        <h1>Hire a Professional</h1>
        <div className="hire-grid">
          {professionals.map((pro, index) => (
            <div key={index} className="hire-card">
              <img src={pro.img} alt={pro.name} />
              <h3>{pro.name}</h3>
              <p>{pro.service}</p>
              <button onClick={() => handleHire(pro.name)}>Hire</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
