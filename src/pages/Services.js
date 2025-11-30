import React from "react";
import Navbar from "../components/Navbar";
import "./Services.css";

const services = [
  { name: "Electrician", img: "https://images.unsplash.com/photo-1581090464777-1c3f1a06c13b?w=400&auto=format&fit=crop" },
  { name: "Plumber", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&auto=format&fit=crop" },
  { name: "House Cleaning", img: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=400&auto=format&fit=crop" },
  { name: "Appliance Repair", img: "https://images.unsplash.com/photo-1581091012184-2b54a1c1e06f?w=400&auto=format&fit=crop" },
  { name: "Gardening", img: "https://images.unsplash.com/photo-1599058917211-1c7c2fa4295d?w=400&auto=format&fit=crop" },
  { name: "Carpenter", img: "https://images.unsplash.com/photo-1598572108434-4202a7ec3b19?w=400&auto=format&fit=crop" },
  { name: "Painter", img: "https://images.unsplash.com/photo-1597349918114-5f9bb7d20c84?w=400&auto=format&fit=crop" },
  { name: "AC Repair", img: "https://images.unsplash.com/photo-1597764691617-4b8c9f0d5d1b?w=400&auto=format&fit=crop" },
  { name: "Pest Control", img: "https://images.unsplash.com/photo-1590608897129-79db85f3f9c0?w=400&auto=format&fit=crop" }
];

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="services-container">
        <h1>All Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
