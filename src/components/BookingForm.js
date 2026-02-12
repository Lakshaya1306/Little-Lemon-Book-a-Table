import React, { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time || guests < 1) {
      setError("Please fill all fields correctly.");
      return;
    }

    setError("");
    alert("Table booked successfully!");
  };

  return (
    <section id="booking">
      <h2>Reserve a Table</h2>

      <form onSubmit={handleSubmit}>
        {/* Date */}
        <label htmlFor="date">Choose date:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <br />

        {/* Time */}
        <label htmlFor="time">Choose time:</label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <br />

        {/* Guests */}
        <label htmlFor="guests">Number of guests:</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <br />

        {/* Error message */}
        {error && (
          <p style={{ color: "red" }} aria-live="polite">
            {error}
          </p>
        )}

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm;
