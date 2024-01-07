import Header from "../header/Header";
import Footer from "../../component/footer/Footer";
import "./gallery.css";
import { useEffect, useState } from "react";
import React from "react";
import { background ,pest, food } from "../../utils/clientimg";
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

const PestGallery = () => {
  const backgroundimg = background();
  const pestimg = pest();

  const [slideview, setslideview] = useState(5);
  const [slidecount, setslidecount] = useState(5);
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
                  src={pestimg[0]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={pestimg[1]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={pestimg[2]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={pestimg[3]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={pestimg[4]}
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
            <h4 className="primary-heading">Pest Controlling</h4>
           

            <h5 className="primary-heading-white">Integrated Pest Management (IPM):  </h5>
            <p className="primary-heading-white">
            Employing a holistic approach, IPM is a key facet of facility management, focusing on prevention, monitoring, and control of pests through environmentally friendly practices.
            </p>

            <h5 className="primary-heading-white">	Regulatory Compliance:  </h5>
            <p className="primary-heading-white">
            Facility managers ensure adherence to local and international regulations governing pest control, maintaining a safe and compliant environment.
            </p>

            <h5 className="primary-heading-white">	Routine Inspections:  </h5>
            <p className="primary-heading-white">
            Regular inspections are conducted to identify potential pest threats, enabling prompt action and minimizing the risk of infestations.
            </p>

            <h5 className="primary-heading-white">
            	Customized Solutions: 
            </h5>
            <p className="primary-heading-white">
            Facility managers tailor pest control strategies to the unique needs of the facility, considering factors such as structure, location, and the nature of the business.
            </p>

            <h5 className="primary-heading-white">	Collaboration with Experts:  </h5>
            <p className="primary-heading-white">
            Facility management teams often collaborate with pest control professionals, fostering a proactive partnership to address pest-related challenges effectively.
            </p>

          
          </div>
          <div
            data-aos="zoom-in"
            className="about-image-section foreground-img"
          >
            <img src={backgroundimg[28]} alt="" />
          </div>
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default PestGallery;





 
