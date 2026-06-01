function Navbar() {
  return (
    <>
      <div className="top-bar">
        Submit your details now and get 5% off your first PCB order!
      </div>

      <nav className="navbar">

        <div className="logo">
          <h2>SHARA</h2>
          <span>CIRCUITS</span>
        </div>

        <ul className="nav-links">

          <li>
            <a href="#how-it-works">
              How it Works
            </a>
          </li>

          <li>
            <a href="#reviews">
              Customer Reviews
            </a>
          </li>

          <li>
            <a href="#why-choose-us">
              Why Choose Us
            </a>
          </li>

          <li>
            <a href="#faq">
              FAQ's
            </a>
          </li>

        </ul>

        <a
          href="tel:+919187453367"
          className="call-btn"
        >
          Call Now!!
        </a>

      </nav>
    </>
  );
}

export default Navbar;