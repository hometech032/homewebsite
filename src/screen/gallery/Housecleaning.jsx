import Header from "../header/Header";
import Footer from "../../component/footer/Footer";
import "./gallery.css";
import { useEffect, useState } from "react";
import React from "react";
import { background ,housekeeping, food } from "../../utils/clientimg";
import Slider from "react-slick";

import GalleryC from "../../component/Gallery/GalleryC";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}

      onClick={onClick}
    />
  );
}

const Housecleaning = () => {
  const backgroundimg = background();
  const housekeepingimg = housekeeping();

  const [slideview, setslideview] = useState(3);
  const [slidecount, setslidecount] = useState(3);
  const [center, setCenter] = useState(false);

  useEffect(() => {
    // Function to update slideview and slidecount based on window.innerWidth
    const updateSlideValues = () => {
      if (window.innerWidth <= 900) {
        setslideview(1);
        setslidecount(1);
        setCenter(true)
      } else {
        setslideview(3);
        setslidecount(3);
        setCenter(false)
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
    centerMode:center,

    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };


 


  return (
    <>
      <Header />

    
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "150px",
          gap:"25px"
        }}
      >
      <h4 className="primary-heading">Gallery</h4>

        <div className="gallaery-img" >
          <div>
            <Slider {...settings}>
              

              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={housekeepingimg[9]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={housekeepingimg[18]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={housekeepingimg[19]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={housekeepingimg[16]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={housekeepingimg[17]}
                />
              </div>
            </Slider>
            {/* <GalleryC/> */}
          </div>
        </div>


      </div>





      <div className="about-container">
        <div className="about-banner-container">
          <div className="about-bannerImage-container  background-img">
            {/* <img style={{backgroundColor:"red"}} draggable="false" src={foodimg[5]} alt="" /> */}
          </div>
          <div className="profile-text-section frontground">
            <h4 className="primary-heading">House Keeping</h4>
            <p className="primary-heading-white">
              Maintain a pristine workplace with our top-tier housekeeping
              services. Housekeeping services within facility management cover a
              broad spectrum, including daily cleaning, sanitation, and upkeep
              of interior spaces.
            </p>

            <h5 className="primary-heading-white">Comprehensive Cleaning </h5>
            <p className="primary-heading-white">
              Housekeeping services in Facility Management cover thorough
              cleaning of interiors, maintaining a pristine and sanitized
              environment.
            </p>

            <h5 className="primary-heading-white">Scheduled Maintenance </h5>
            <p className="primary-heading-white">
              Regular schedules ensure consistent cleaning routines, preventing
              the accumulation of dust, dirt, and germs in various spaces.
            </p>

            <h5 className="primary-heading-white">Professional Staff: </h5>
            <p className="primary-heading-white">
              Trained and skilled housekeeping professionals handle tasks
              efficiently, utilizing industry best practices and quality
              cleaning agents.
            </p>

            <h5 className="primary-heading-white">
              Surface and Material Expertise:{" "}
            </h5>
            <p className="primary-heading-white">
              Knowledgeable in handling various surfaces and materials,
              housekeeping services cater to the specific cleaning needs of
              different areas within the facility.
            </p>

            <h5 className="primary-heading-white">Health and Safety: </h5>
            <p className="primary-heading-white">
              Prioritizing the health and safety of occupants, housekeeping
              services adhere to hygiene standards, reducing the risk of
              infections and promoting a healthy environment.
            </p>

            <h5 className="primary-heading-white"> Waste Management </h5>
            <p className="primary-heading-white">
              Housekeeping services are equipped to respond to unexpected
              situations promptly, maintaining a clean and safe environment even
              during emergencies.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="about-image-section foreground-img"
          >
            <img src={backgroundimg[5]} alt="" />
          </div>
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default Housecleaning;





 
