import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "What types of PCBs do you manufacture?",
      answer:
        "We specialize in various types of PCBs, including rigid, flexible, rigid-flex, and metal core PCBs. We cater to both standard and custom designs to meet your specific needs."
    },

    {
      question: "How quickly can I receive my PCB prototype?",
      answer:
        "Prototype PCB turnaround times typically range from 24 to 72 hours depending on design complexity, quantity, and manufacturing requirements."
    },

    {
      question: "What is the minimum order quantity (MOQ)?",
      answer:
        "We support both prototype and bulk production orders. Contact us with your requirements for a customized quotation."
    },

    {
      question: "Do you provide assembly services for PCBs?",
      answer:
        "Yes. We offer complete PCB assembly services, including SMT assembly, through-hole assembly, testing, and quality inspection."
    },

    {
      question: "Can you assist with PCB design and testing?",
      answer:
        "Absolutely. Our engineering team can help with PCB design, layout optimization, prototyping, testing, and validation."
    }
  ];

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-box">
          <div
            className={`faq-question ${
              open === index ? "active" : ""
            }`}
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            <span>{faq.question}</span>

            <span>
              {open === index ? "✕" : "+"}
            </span>
          </div>

          {open === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;