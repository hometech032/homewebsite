import { TestimonyCard } from "../../../component/card/Cardc";
import "../testimony/testimony.css";
import { clientimg } from "../../../utils/clientimg";
import Slider from "react-slick";
import { useState,useEffect } from "react";
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
        setFade(true)
      } else {
        setslideview(3);
        setslidecount(3);
        setFade(false)

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
     fade:fade,
    slidesToShow:slideview,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    autoplay: true,
    speed: 5000,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };

  return (
    <>
      <div className="testimony-container">
        <h4 className="primary-heading ">What Our Client Says</h4>
        <div className="testimony-container-client-card">
          <div className=" slider-con">
            <Slider {...settings}>
           
              <TestimonyCard
                  img={clientImages[15].log}
                  content={
                    "We help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies Home Tech Services Pvt Ltd aspires to be the premier service provider in India's dynamically evolving facility management sector."
                  }
                />

                <TestimonyCard
                  img={clientImages[18].log}
                  content={
                    "We help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies Home Tech Services Pvt Ltd aspires to be the premier service provider in India's dynamically evolving facility management sector."
                  }
                />
                     <TestimonyCard
                  img={clientImages[17].log}
                  content={
                    "We help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies Home Tech Services Pvt Ltd aspires to be the premier service provider in India's dynamically evolving facility management sector."
                  }
                />

             <TestimonyCard
                  img={clientImages[16].log}
                  content={
                    "We help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies Home Tech Services Pvt Ltd aspires to be the premier service provider in India's dynamically evolving facility management sector."
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
