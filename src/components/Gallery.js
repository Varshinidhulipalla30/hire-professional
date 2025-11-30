import React from "react";
import "./Gallery.css";

const galleryImages = [
  {
    title: "Electrician",
    img: "https://images.unsplash.com/photo-1581090464777-1c3f1a06c13b?w=800"
  },
  {
    title: "Plumber",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800"
  },
  {
    title: "House Cleaning",
    img: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=800"
  },
  {
    title: "Appliance Repair",
    img: "https://images.unsplash.com/photo-1581091012184-2b54a1c1e06f?w=800"
  },
  {
    title: "Gardening",
    img: "https://images.unsplash.com/photo-1599058917211-1c7c2fa4295d?w=800"
  }
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      {galleryImages.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
}
