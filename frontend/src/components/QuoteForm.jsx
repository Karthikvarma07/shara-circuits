import { useState } from "react";

function QuoteForm() {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://shara-backend.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("Quote Submitted Successfully!");

        setFormData({
          service: "",
          name: "",
          email: "",
          phone: "",
        });
      } else {
        setMessage("Failed to submit quote.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server Error");
    }
  };

  return (
    <section id="quote-form" className="quote-form-section">
      <div className="quote-box">

        <h2>Ready to Build Your Next Project?</h2>

        <p>
          Fill out the form to get a fast, accurate quote.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Choose the Main Service *</label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">
              Choose the Main Service
            </option>

            <option>PCB Design</option>
            <option>PCB Fabrication</option>
            <option>PCB Assembly</option>
            <option>Testing and QA</option>
            <option>Wire Harnessing</option>
            <option>Complete Product Development</option>
          </select>

          <label>Name *</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email Address *</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone *</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit
          </button>

        </form>

        {message && (
          <p
            style={{
              marginTop: "20px",
              color: "green",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}

      </div>
    </section>
  );
}

export default QuoteForm;