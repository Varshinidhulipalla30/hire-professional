import React from "react";
import Navbar from "../components/Navbar";
import "./Reviews.css";

const reviews = [
  {
    name: "Alice Johnson",
    service: "Electrician",
    rating: 5,
    comment: "Very professional and fixed the issue quickly!"
  },
  {
    name: "Rajesh Kumar",
    service: "Plumber",
    rating: 4,
    comment: "Good service, arrived on time and did a neat job."
  },
  {
    name: "Priya Sharma",
    service: "House Cleaning",
    rating: 5,
    comment: "House is sparkling clean! Highly recommend."
  },
  {
    name: "Suresh Patil",
    service: "Appliance Repair",
    rating: 4,
    comment: "Repaired my washing machine perfectly."
  },
  {
    name: "Anita Reddy",
    service: "Gardening",
    rating: 5,
    comment: "Garden looks amazing! Very professional."
  }
];

export default function Reviews() {
  return (
    <div>
      <Navbar />
      <div className="reviews-container">
        <h1>Ratings & Reviews</h1>
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <h3>{item.name}</h3>
            <p><strong>Service:</strong> {item.service}</p>
            <p>
              <strong>Rating:</strong> {"★".repeat(item.rating) + "☆".repeat(5 - item.rating)}
            </p>
            <p>"{item.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
