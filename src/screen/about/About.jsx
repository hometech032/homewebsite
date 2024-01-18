import "./About.css";
import { useNavRef } from "../../context/navigation/navContext";
import { background,food } from "../../utils/clientimg";
const About = () => {
  const backgroundimg = background();

  const {

    Aboutsection,

  } = useNavRef();
  return (
    <div   className="about-container" ref={Aboutsection}>
        <div className="about-banner-container-A">
        <div className="about-bannerImage-container  background-img">
          {/* <img style={{backgroundColor:"red"}} draggable="false" src={foodimg[5]} alt="" /> */}
        </div>
        <div className="profile-text-section frontground">
          <h4 className="primary-heading">
         About Us
          </h4>

          {/* set one content */}
          <h5 className="primary-heading-white">
          
          </h5>
          <p className="primary-text-white">
          Home tech services has been one of the pioneers in providing housekeeping , security, and maintenance services in the region since the late 90’s. Nestled in the heart of Nungambakkam, our headquarters have been a hub for excellence, reaching out to major regions across the nation.
          Home Tech Services Pvt Ltd aspires to be the premier service provider in India's dynamically evolving facility management sector.
          We provide an extensive range of maintenance service for organizations, we handpick highly-skilled Trustworthy manpower to ensure the highest quality and reliability.  
          </p>


             {/* set one content */}
             <h5 className="primary-heading-white">
             Our Mission :
          </h5>
          <p className="primary-text-white">
          Our goal is to Identify each and every requirement of our client and be the solution to it. We want to be among the leaders in the facility management sector while also incorporating technology into the services we offer.
          </p>


            {/* set one content */}
            <h5 className="primary-heading-white">
            Our Vision:
          </h5>
          <p className="primary-text-white">
          Revolutionizing facility management, setting new industry standards for excellence and sustainability.
          </p>


       


            {/* set one content */}
            <h5 className="primary-heading-white">
            Our Responsibility:
          </h5>
          <p className="primary-text-white">
          HOME Tech SERVICES PVT LTD help our clients with their manpower intensive needs especially through fulfilling their blue collar staff vacancies. 
Our clients are often large establishments with facilities that require a lot of care and attention, we help by taking those responsibilities off their shoulders and enable them to focus on their core business. 
Home Tech is able to do this by assessing the facility while also taking inputs from the clients and developing a comprehensive plan that meets their specific needs.

          </p>
          {/* <button className="secondary-button">
            Order Now 
          </button> */}
        </div>
        <div data-aos="zoom-in" className="about-image-section foreground-img">
          <img src={backgroundimg[31]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
