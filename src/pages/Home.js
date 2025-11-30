import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

const homeImages = [
  { title: "Electrician", img: "https://images.unsplash.com/photo-1581090464777-1c3f1a06c13b?w=800&auto=format&fit=crop" },
  { title: "Plumber", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop" },
  { title: "House Cleaning", img: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=800&auto=format&fit=crop" },
  { title: "Appliance Repair", img: "https://images.unsplash.com/photo-1581091012184-2b54a1c1e06f?w=800&auto=format&fit=crop" },
  { title: "Gardening", img: "https://images.unsplash.com/photo-1599058917211-1c7c2fa4295d?w=800&auto=format&fit=crop" },
  { title: "Carpenter", img: "https://images.unsplash.com/photo-1598572108434-4202a7ec3b19?w=800&auto=format&fit=crop" },
  { title: "Painter", img: "https://images.unsplash.com/photo-1597349918114-5f9bb7d20c84?w=800&auto=format&fit=crop" },
  { title: "AC Repair", img: "https://images.unsplash.com/photo-1597764691617-4b8c9f0d5d1b?w=800&auto=format&fit=crop" },
  { title: "Pest Control", img: "https://images.unsplash.com/photo-1590608897129-79db85f3f9c0?w=800&auto=format&fit=crop" }
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to HirePro!</h1>
        <p>Explore services, check ratings, and hire professionals easily.</p>

        <h2>Popular Services</h2>
        <div className="home-horizontal">
          {homeImages.map((item, index) => (
            <div key={index} className="home-item-horizontal">
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
