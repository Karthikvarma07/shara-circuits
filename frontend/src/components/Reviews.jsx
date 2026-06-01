function Reviews() {
  return (
    <section
      id="reviews"
      className="reviews"
    >

      <h2>
        Customer <span>Reviews</span>
      </h2>

      <div className="review-container">

        <div className="review-card">
          <h3>★★★★★</h3>
          <p>
            Exceptional quality and fast delivery.
          </p>
          <strong>Arun S</strong>
        </div>

        <div className="review-card">
          <h3>★★★★★</h3>
          <p>
            Reliable and cost effective PCB manufacturing.
          </p>
          <strong>Priya M</strong>
        </div>

      </div>

    </section>
  );
}

export default Reviews;