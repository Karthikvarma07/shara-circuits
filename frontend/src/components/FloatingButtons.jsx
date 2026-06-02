import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/919187453367"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919187453367"
        className="call-float-btn"
      >
        <FaPhoneAlt />
      </a>
    </>
  );
}

export default FloatingButtons;