import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";

const aboutImages = [
  {
    title: "Our Team",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a2?w=400"
  },
  {
    title: "Our Mission",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400"
  },
  {
    title: "Our Office",
    img: "https://images.unsplash.com/photo-1560185127-6b63921e27d7?w=400"
  },
  {
    title: "Community Work",
    img: "https://images.unsplash.com/photo-1581091012184-2b54a1c1e06f?w=400"
  }
];

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          We connect users with trusted professionals for home services. Our team is committed to providing reliable, fast, and professional service to all our clients.
        </p>

        <h2>Our Highlights</h2>
        <div className="about-gallery">
          {aboutImages.map((item, index) => (
            <div key={index} className="about-item">
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
