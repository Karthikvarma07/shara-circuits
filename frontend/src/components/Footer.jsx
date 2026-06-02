function Footer() {
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
              placeholder="Email address"
            />

            <button>
              Submit
            </button>
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