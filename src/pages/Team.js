import React from "react";
import "./Team.css";

export default function Team() {
  const team = [
    {
      name: "Varshini Dhulipalla",
      role: "Founder & CEO",
      description:
        "Leads the vision and growth of HirePro. Passionate about building user-friendly technology that connects people with reliable services.",
    },
    {
      name: "Reshma Janga",
      role: "Chief Technology Officer",
      description:
        "Heads the engineering team and ensures the platform is fast, secure, and scalable. Specializes in full-stack development and cloud deployment.",
    },
    {
      name: "Poojitha Rajaboina",
      role: "Head of Customer Experience",
      description:
        "Makes sure every user receives quick support and smooth service. Handles service quality, customer care, and professional verification.",
    },
    {
      name: "Poojitha Rajaboina",
      role: "Operations Manager",
      description:
        "Manages the professional network, service coordination, and daily operations to ensure timely service delivery.",
    },
    {
      name: "Reshma Janga",
      role: "Marketing & Brand Lead",
      description:
        "Oversees branding, content, and marketing strategy to make HirePro reach millions of users.",
    },
  ];

  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <p className="team-intro">
        We are a passionate and dedicated team working together to make HirePro
        the most trusted home-service platform in India. Our team combines
        technology, operations, customer support, and creativity to deliver a
        seamless experience for everyone.
      </p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-photo"></div>

            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
