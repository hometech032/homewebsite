import { TestimonyCard } from "../../../component/card/Cardc";
import "../testimony/testimony.css";
import { clientimg } from "../../../utils/clientimg";
import Slider from "react-slick";
import { useState, useEffect } from "react";
const Testimony = () => {
  const clientImages = clientimg();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, color: "black ", display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, color: "black", display: "none" }}
        onClick={onClick}
      />
    );
  }

  const [slideview, setslideview] = useState(3);
  const [slidecount, setslidecount] = useState(3);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    // Function to update slideview and slidecount based on window.innerWidth
    const updateSlideValues = () => {
      if (window.innerWidth <= 900) {
        setslideview(1);
        setslidecount(1);
        setFade(true);
      } else {
        setslideview(3);
        setslidecount(3);
        setFade(false);
      }
    };

    // Initial update
    updateSlideValues();

    // Event listener for window resize
    window.addEventListener("resize", updateSlideValues);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlideValues);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    fade: fade,
    slidesToShow: slideview,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    autoplay: true,
    speed: 4000,
    autoplaySpeed:2000,
    cssEase: "linear",
   
    
  };

  return (
    <>
      <div className="testimony-container">
        <h4 className="primary-heading ">What Our Client Says</h4>
        <div className="testimony-container-client-card">
          <div className=" slider-con">
            <Slider {...settings}>
              <TestimonyCard
                img={clientImages[7].log}
                content={
                  "We needed a facilities management team. HomeTech's security and cleaning services are the backbone of Marina Mall,They exceeded our expectations. Their proactive approach prevents problems before they arise, saving us time and money. We're thrilled!"
                }
              />

              <TestimonyCard
                img={clientImages[37].log}
                content={
                  "We needed a facilities management team. HomeTech's security and cleaning services are the backbone of Marina Mall,They exceeded our expectations. Their proactive approach prevents problems before they arise, saving us time and money. We're thrilled!."
                }
              />
              <TestimonyCard
                img={clientImages[14].log}
                content={
                  "HomeTech has transformed Crescent Colleges' campus. Their pest control, waste management, and grounds maintenance are top-notch, creating a healthy and vibrant learning environment for our students and staff. We can focus on education, knowing our facilities are in good hands"
                }
              />

              <TestimonyCard
                img={clientImages[18].log}
                content={
                  "Our showroom needs to be immaculate to showcase our premium vehicles. HomeTech understands that. Their attention to detail is breathtaking, and their maintenance ensures our showroom always shines We've seen a direct correlation with increased sales since HomeTech came onboard. They're worth their weight in gold."
                }
              />
               <TestimonyCard
                img={clientImages[0].log}
                content={
                  "HomeTech isn't just a facility management company; They're our partners in peace of mind. They keep our offices secure, our systems running smoothly, and our employees happy. Knowing everything's in their capable hands frees us to focus on growing the business. We wouldn't trust anyone else with our building."
                }
              />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
