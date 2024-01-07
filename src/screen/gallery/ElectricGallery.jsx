import Header from "../header/Header";
import Footer from "../../component/footer/Footer";
import "./gallery.css";
import { useEffect, useState } from "react";
import React from "react";
import { background ,electric, food } from "../../utils/clientimg";
import Slider from "react-slick";

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

const ElectricGallery = () => {
  const backgroundimg = background();
  const electricimg = electric();

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

        <div className="gallaery-img">
          <div>
            <Slider {...settings}>
              

              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={electricimg[0]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={electricimg[9]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={electricimg[10]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={electricimg[3]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={electricimg[8]}
                />
              </div>
            </Slider>
          </div>
        </div>


      </div>





      <div className="about-container">
        <div className="about-banner-container">
          <div className="about-bannerImage-container  background-img">
            {/* <img style={{backgroundColor:"red"}} draggable="false" src={foodimg[5]} alt="" /> */}
          </div>
          <div className="profile-text-section frontground">
            <h4 className="primary-heading">Electric Services</h4>
          

            <h5 className="primary-heading-white">Critical Infrastructure Maintenance:  </h5>
            <p className="primary-heading-white">
            Electrical systems are pivotal in facility management, requiring regular checks, upgrades, and preventive maintenance to ensure continuous operation.
            </p>

            <h5 className="primary-heading-white">Energy Efficiency Strategies:  </h5>
            <p className="primary-heading-white">
            Facility managers implement energy-efficient practices in electrical systems, optimizing consumption and reducing environmental impact.
            </p>

            <h5 className="primary-heading-white">Emergency Response Planning: </h5>
            <p className="primary-heading-white">
            Robust plans for electrical emergencies, such as power outages or electrical faults, are essential to minimize downtime and ensure the safety of occupants.
            </p>

            <h5 className="primary-heading-white">
            Technology Integration: 
            </h5>
            <p className="primary-heading-white">
            The integration of smart technologies in electrical systems enhances monitoring, control, and energy management, contributing to overall operational efficiency.
            </p>

            <h5 className="primary-heading-white">Regulatory Compliance: </h5>
            <p className="primary-heading-white">
            Facility managers navigate and adhere to electrical regulations and codes, ensuring that electrical systems meet safety standards and comply with legal requirements.
            </p>

           
          </div>
          <div
            data-aos="zoom-in"
            className="about-image-section foreground-img"
          >
            <img src={electricimg[1]} alt="" />
          </div>
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default ElectricGallery;





 
