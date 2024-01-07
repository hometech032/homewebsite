import "./Team.css";
import { useNavRef } from "../../context/navigation/navContext";
import { background } from "../../utils/clientimg";
import CardM from "../../component/card/Card";

import Slider from "react-slick";

import { useEffect, useState } from "react";

const Team = () => {
  const backgroundimg = background();

  const {
  
    Teamsection,
  } = useNavRef();

  const [slideview, setslideview] = useState(3);
  const [slidecount, setslidecount] = useState(3);
  useEffect(() => {
    // Function to update slideview and slidecount based on window.innerWidth
    const updateSlideValues = () => {
      if (window.innerWidth <= 900) {
        setslideview(1);
        setslidecount(1);
      } else {
        setslideview(3);
        setslidecount(3);
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

    slidesToShow: slideview,
    slidesToScroll: slidecount,
    arrows: true,
    // fade: true,
    // autoplay: true,
    // speed: 5000,
    // autoplaySpeed:500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="team-container" ref={Teamsection}>
      <div className="team-banner-container">
        <div className="team-bannerImage-container  background-img">
          {/* <img src={foodimg[6]} alt="" /> */}
        </div>
        <div className="team-text-section frontground">
          <h4 className="primary-heading">Teams</h4>
          <h5 className="primary-heading-white team-text-align">
            We provide an extensive range of maintenance service for
            organizations
          </h5>
          <p className="primary-text-white">
            At Home Tech Services Pvt Ltd, we take immense pride in our team of
            dedicated professionals who form the backbone of our organization.
            Each member brings a unique set of skills, passion, and expertise,
            contributing to the success and growth of our company. Get to know
            the faces behind the commitment to excellence:
          </p>
          <div data-aos="slide-right" className="team-card-container">
            <div className="team-crad-slider">
              <Slider {...settings}>
                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Mohamed Mahmood "}
                  position={"CEO"}
                  qutos={
                    "orchestrates the strategic direction of Home Tech Services, ensuring that every aspect aligns with our mission and goals."
                  }
                />

                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Jinu John "}
                  position={"Operation Manager"}
                  qutos={
                    " oversees the seamless execution of our services, ensuring optimal efficiency and client satisfaction."
                  }
                />

                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Babu V"}
                  position={"HR"}
                  qutos={
                    " Responsible for our talented workforce, ensures a harmonious work environment, attracting and retaining the best talent."
                  }
                />

                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Redhulal C V"}
                  position={"HR"}
                  qutos={
                    "Responsible for our talented workforce, ensures a harmonious work environment, attracting and retaining the best talent."
                  }
                />
                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Saleem Raja K"}
                  position={"Accounts "}
                  qutos={
                    " Weaving financial strategies with a personal touch. Bringing numbers to life, Ensures a seamless financial journey for our clients."
                  }
                />
                <CardM
                  photo={backgroundimg[11]}
                  name={"Mr Nagarajan S "}
                  position={"Auditing  "}
                  qutos={
                    "Optimize our soft services operations with our expert Uncover hidden efficiencies and elevate service quality through our comprehensive audits."
                  }
                />

                <CardM
                  photo={backgroundimg[11]}
                  name={"Mohamed Ibrahim L A Z "}
                  position={"Client Relations Specialist "}
                  qutos={
                    " Focuses on nurturing strong relationships with our clients, understanding their unique requirement and dedicated to providing exceptional support and addressing client needs."
                  }
                />
              </Slider>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="team-image-section foreground-img"
        >
          <img src={backgroundimg[30]} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Team;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "black " }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}
