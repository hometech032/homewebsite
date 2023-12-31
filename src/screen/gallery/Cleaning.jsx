import Header from "../header/Header";
import Footer from "../../component/footer/Footer";
import "./gallery.css";
import { useEffect, useState } from "react";
import React from "react";
import { background ,cleaning, food } from "../../utils/clientimg";
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
const Cleaning = () => {
  const backgroundimg = background();
  const cleaningimg = cleaning();

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
    slidesToScroll: slideview,
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
                  src={cleaningimg[0]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={cleaningimg[1]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={cleaningimg[2]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={cleaningimg[3]}
                />
              </div>
              <div>
                <img
                  style={{ width: "95%", objectFit: "cover" }}
                  src={cleaningimg[4]}
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
            <h4 className="primary-heading">Cleaning Material</h4>
            <p className="primary-heading-white">
            Quality cleaning for a spotless environment. Explore our range for effective and sustainable cleaning solutions. Facility Management involves the use of various cleaning agents tailored to different surfaces and materials, ensuring effective and safe cleaning.
            </p>

            <h5 className="primary-heading-white">Specialized Equipment: </h5>
            <p className="primary-heading-white">
             ---
            </p>

            <h5 className="primary-heading-white">Environmentally Friendly Options:</h5>
            <p className="primary-heading-white">
              ---
            </p>

            <h2 className="primary-heading-white">Disinfection Protocols</h2>
            <p className="primary-heading-white">
            ----
            </p>

            <h5 className="primary-heading-white">
            Proactive Maintenance:
            </h5>
            <p className="primary-heading-white">
             ----
            </p>

            <h5 className="primary-heading-white">Occupant Health and Safety: </h5>
            <p className="primary-heading-white">
            High-quality cleaning  adhere to industry standards, ensuring they meet safety and efficacy benchmarks for use in different facility environments.
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

export default Cleaning;





 
