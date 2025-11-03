import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import "./Services.css";

const Services = () => {
  // list of available services
  const [services] = useState([
    { id: 1, name: "Electrician", description: "Expert electrical repair and installation services." },
    { id: 2, name: "Plumber", description: "Professional plumbing and pipe maintenance." },
    { id: 3, name: "Carpenter", description: "Custom furniture and woodwork solutions." },
    { id: 4, name: "Web Developer", description: "Build and maintain websites and web apps." },
    { id: 5, name: "Mechanic", description: "Reliable vehicle service and maintenance." },
    { id: 6, name: "Tutor", description: "Qualified teachers for online and offline tutoring." },
  ]);

  // state for search query
  const [search, setSearch] = useState("");

  // filter based on search input
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services">
      <h2>Our Services</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for a service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="service-list">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.name}
              description={service.description}
            />
          ))
        ) : (
          <p>No services found.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
