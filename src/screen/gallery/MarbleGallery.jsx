import Header from "../header/Header";
import Footer from "../../component/footer/Footer";
import "./gallery.css";
import { useEffect, useState } from "react";
import React from "react";
import { background ,havc, food } from "../../utils/clientimg";
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
const MarbleGallery=()=>{

    const backgroundimg = background();
    const havcimg = havc();
  
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
                    src={havcimg[2]}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "95%", objectFit: "cover" }}
                    src={havcimg[6]}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "95%", objectFit: "cover" }}
                    src={havcimg[4]}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "95%", objectFit: "cover" }}
                    src={havcimg[9]}
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
              <h4 className="primary-heading">HVAC</h4>
            
  
              <h5 className="primary-heading-white">Temperature Regulation:  </h5>
              <p className="primary-heading-white">
              HVAC (Heating, Ventilation, and Air Conditioning) systems play a pivotal role in maintaining optimal indoor temperatures, ensuring a comfortable and productive environment.
              </p>
  
              <h5 className="primary-heading-white">Air Quality Management:  </h5>
              <p className="primary-heading-white">
              HVAC systems contribute to air quality control by filtering and circulating fresh air, minimizing pollutants, allergens, and contaminants for healthier indoor spaces.
              </p>
  
              <h5 className="primary-heading-white">  Energy Efficiency:  </h5>
              <p className="primary-heading-white">
              Efficient HVAC systems contribute to the overall energy efficiency of a facility, reducing operational costs and environmental impact through optimized heating and cooling processes.
              </p>
  
              <h5 className="primary-heading-white">
              Preventive Maintenance: 
              </h5>
              <p className="primary-heading-white">
              Regular maintenance of HVAC systems within facility management ensures peak performance, minimizes downtime, and extends the lifespan of equipment, promoting reliability.
              </p>
  
              <h5 className="primary-heading-white">Smart Technology Integration:  </h5>
              <p className="primary-heading-white">
              Modern HVAC systems incorporate smart technologies, allowing for remote monitoring, predictive maintenance, and energy optimization, enhancing overall facility management strategies.
              </p>
  
            
            </div>
            <div
              data-aos="zoom-in"
              className="about-image-section foreground-img"
            >
              <img src={havcimg[3]} alt="" />
            </div>
          </div>
        </div>
        <Footer/>
  
      </>
    );


}
export default MarbleGallery;