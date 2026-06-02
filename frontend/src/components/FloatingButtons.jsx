import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/9392578380"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+9392578380"
        className="call-float-btn"
      >
        <FaPhoneAlt />
      </a>
    </>
  );
}

export default FloatingButtons;