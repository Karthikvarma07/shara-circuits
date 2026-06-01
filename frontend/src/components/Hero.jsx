import { useState } from "react";

function Hero() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      });

      alert("Submitted Successfully");

      setName("");
      setPhone("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        <div className="hero-left">

          <span className="tag">
            #1 PCB Manufacturing Company
          </span>

          <h1>
            Are you looking for a
            <span className="green">
              {" "}PCB Design & Manufacturing
            </span>
            {" "}Company?
          </h1>

          <p>
            Get high-quality PCBs designed and manufactured with precision and delivered on time.
          </p>

          <ul>
            <li>🟢 High-Quality & Reliable PCBs</li>
            <li>🟢 Fast Turnaround & On-Time Delivery</li>
            <li>🟢 Competitive Pricing & Custom Solutions</li>
          </ul>

          <div className="testimonial">
            ⭐⭐⭐⭐⭐
            <p>
              Exceptional PCB quality and fast delivery.
              Highly recommended.
            </p>
            <strong>Rajesh K</strong>
          </div>

        </div>

        <div className="hero-right">

          <form onSubmit={handleSubmit} className="hero-form">

            <label>Name</label>

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Phone Number</label>

            <input
              type="text"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit">
              Get Instant Pricing Now
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Hero;