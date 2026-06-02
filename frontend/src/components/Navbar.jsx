import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>
     
     
      <nav className="navbar">

        <div className="logo">
  <img src={logo} alt="Shara Circuits" />
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

        <a href="#quote-form" className="call-btn">
          Get Quote
        </a>

      </nav>
    </>
  );
}

export default Navbar;