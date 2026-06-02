import { useState } from "react";
function Footer() {
  const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>Shara Circuits Pvt. Ltd.</h2>

        <p>
          Address: No. 23, 5, Somashetti Halli, Karnataka 560090
        </p>

        <p>
          Contacts: 9187453367 | info@sharacircuits.com
        </p>

        <div className="newsletter">

          <h3>Subscribe to our newsletter</h3>

          <div className="newsletter-form">
            <input
              type="email"
             placeholder="Email Address"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />

           <button
           type="button"
            onClick={() => {
             setMessage("Subscribed Successfully!");
             setEmail("");

               setTimeout(() => {
               setMessage("");
            }, 3000);
          }}
>
  Submit
</button>
             {message && (
  <p
    style={{
      color: "#22c55e",
      marginTop: "10px",
      fontWeight: "600",
    }}
  >
    {message}
  </p>
)}
          </div>

        </div>

        <hr />

        <p className="copyright">
          Privacy Policy | © 2024 Shara Circuits Pvt. Ltd.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;