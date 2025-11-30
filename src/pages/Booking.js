import "./Booking.css";

export default function Booking() {
  return (
    <div className="page">
      <h1>Book a Service</h1>

      <form className="book-form">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Service Required" />
        <input type="date" />
        <button>Book Now</button>
      </form>
    </div>
  );
}
