import "../aboutus/Aboutus.css";
import { useNavigate } from "react-router-dom";

import { background } from "../../../utils/clientimg";

const AboutUs = () => {
  const backgroundimg = background();

  const navigate = useNavigate();
  const handleReadmore = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    navigate("/hometech/aboutus");
  };
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-content-container">
          <h1 className="primary-heading ">About Us</h1>
          <p className="primary-text-white">
            HOME Tech SERVICES PVT LTD help our clients with their manpower
            intensive needs especially through fulfilling their blue collar
            staff vacancies. Our clients are often large establishments with
            facilities that require a lot of care and attention, we help by
            taking those responsibilities off their shoulders and enable them to
            focus on their core business. Home Tech is able to do this by
            assessing the facility while also taking inputs from the clients and
            developing a comprehensive plan that meets their specific needs.
          </p>
          <a
            onClick={handleReadmore}
            className="btn btn-primary px-4 py-2 rounded-pill"
          >
             More About Us
          </a>
        </div>
          <div className="imgfit-about-container">

          <img className="imgfit-about" src={backgroundimg[27]} alt="" />
          </div>
      </div>
    </>
  );
};

export default AboutUs;
