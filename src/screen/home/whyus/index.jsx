import "../whyus/Whyus.css";

const Whyus = () => {
  return (
    <>
      <div className="whyus-container">
        <h4 className=" whyus-headinftext-w">Why HomeTech</h4>

        <div className="why-content-conatiner">
          <div data-aos="slide-right" className="testimonial-item   whyus-card">
            <h6 className="textAlingLeft whyus-text-white">
              {" "}
              1. Decades of Experience:{" "}
            </h6>
            <p
              className="whyus-text-white textAlingLeft"
            >
              HomeTech boasts over two decades of expertise, with a collective
              field experience exceeding 100 years.
            </p>
          </div>
          <div data-aos="slide-right" className="testimonial-item    whyus-card ">
            <h6
              className="textAlingLeft whyus-text-white"
            >
              2. Extensive Workforce:{" "}
            </h6>
            <p
              className="whyus-text-white textAlingLeft"
            >
              With a team of over 1000 skilled blue-collar workers, we ensure a
              robust workforce dedicated to delivering quality services.
            </p>
          </div>
          <div data-aos="slide-left" className="testimonial-item   whyus-card ">
            <h6 className="textAlingLeft whyus-text-white">3. Cross-Sector Presence: </h6>
            <p className="whyus-text-white textAlingLeft">
              Our footprint extends across various sectors, showcasing our
              adaptability and proficiency in diverse industries such as
              education, healthcare, IT Industries, shopping malls, movie
              theatres, corporate offices.
            </p>
          </div>
          <div data-aos="slide-left" className="testimonial-item    whyus-card">
            <h6 className="textAlingLeft whyus-text-white">4. Comprehensive Services: </h6>
            <p className="whyus-text-white textAlingLeft">
              Under one umbrella, HomeTech offers a unified solution, seamlessly
              integrating facility management and security services for your
              convenience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
