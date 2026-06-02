function Services() {
  return (
    <section id="services" className="services-section">

      <h2 className="services-title">
        What We Offer
      </h2>

      <div className="services-grid">

        <div className="service-card">
          <h3>PCB Design</h3>
          <p>
            From schematic to Gerber, our expert team designs
            efficient and reliable PCBs tailored to your specifications.
          </p>
        </div>

        <div className="service-card">
          <h3>PCB Fabrication</h3>
          <p>
            We handle 1 to 8 layers, FR4, Aluminum,
            and High TG boards with precision and quality.
          </p>
        </div>

        <div className="service-card">
          <h3>PCB Assembly</h3>
          <p>
            Our capabilities include SMT, Through-hole,
            and mixed assemblies for a complete solution.
          </p>
        </div>

        <div className="service-card">
          <h3>Testing & QA</h3>
          <p>
            We perform functional testing, in-circuit testing,
            and create test jigs to ensure product quality.
          </p>
        </div>

        <div className="service-card">
          <h3>Wire Harnessing</h3>
          <p>
            We provide signal/power wire solutions and
            connector integration for a seamless final product.
          </p>
        </div>

        <div className="service-card">
          <h3>Component & BOM Sourcing</h3>
          <p>
            Let us handle the procurement of components
            and bill of materials for you.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;