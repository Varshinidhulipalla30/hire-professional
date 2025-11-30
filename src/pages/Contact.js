import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h1>Contact Us</h1>
        <p>Email: support@hirepro.com</p>
        <p>Phone: +91 12345 67890</p>
      </div>
    </div>
  );
}
