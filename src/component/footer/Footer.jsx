import "./footer.css";
import hometech from "../../assets/hometechfooter.png";
import { SocialIcon } from "react-social-icons";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "About", "Services", "Profile", "Team", "Contact"];
const Footer = () => {
  const navigation = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
 
  const hanldeNavigation = (servicename) => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    if (servicename === "HOUSE KEEPING") {
      navigation("/Housecleaninggallery");
      return;
    }
    if (servicename === "SECURITY") {
      navigation("/Security");
      return;
    }
    if (servicename === "CLEANING MATERIALS") {
      navigation("/Cleaning");
      return;
    }
    if (servicename === "PEST CONTROL") {
      navigation("/Pest");
      return;
    }
    if (servicename === "FIRE CREW") {
      navigation("/Fire");
      return;
    }
    if (servicename === "HVAC") {
      navigation("/Havc");
      return;
    }
    if (servicename === "ELECTRICALS") {
      navigation("/Electric");
      return;
    }
    if(servicename==="MARBLE POLISHING"){
      navigation("/MarbleGallery")

  }
  if(servicename==="MAN POWER SUPPLY"){
      navigation("/ManPowerGallery")

  }




    pages.map((page) => {
     
      if (servicename === "Home") {
        scrollToTop();

        navigation("/");
      }
      if (servicename === page) {
        scrollToTop();

        navigation("/hometech/aboutus");

      }
     
      if (page === servicename) {
        scrollToTop();

        navigation("/");
      }

      if (servicename  ===page ) {
        // scrollDown(Profilesection)
        scrollToTop();

        navigation("/");
      }
      if (page === servicename) {
        // scrollToTop()

        navigation("/hometech/aboutus");
        scrollToTop();
      }
      if (page === servicename) {
        // scrollToTop()

        navigation("/hometech/aboutus");
        scrollToTop();
      }
    });
  };
  return (
    <div className="footer-container">
      <div className="footer-top">
        {/* <h4>LinkedIn</h4>
        <h4>Instagram</h4>
        <h4>Facebook</h4> */}

        <div className="footer-about">
          <h6 className="footer-text-h-l">ABOUT US</h6>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("Home")} >  Why US</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("About")}>Career</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("Home")}>Blog</p>
        </div>

        <div className="footer-services">
          <h6 className="footer-text-h-l">SERVICES US</h6>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("HOUSE KEEPING")} >House Keeping</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("SECURITY")} >Security</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("ELECTRICALS")} >Electrical</p>
          <p className="footer-text-l"  onClick={()=>hanldeNavigation("PEST CONTROL")}>Pest</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("HVAC")} >HAVC</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("CLEANING MATERIALS")} >Cleaning material</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("FIRE CREW")} >Fire crew</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("MARBLE POLISHING")} >MARBLE POLISHING</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("MAN POWER SUPPLY")} >MAN POWER SUPPLY</p>
          <p className="footer-text-l" onClick={()=>hanldeNavigation("MAN POWER SUPPLY")} >CARPET UPHOSLSTERY SHAMPOOING</p>
        </div>

        <div className="footer-gettouch">
          <h6 className="footer-text-h-l">GET IN TOUCH</h6>
          <p className="footer-text-l" >Mail Us At :<a href="mailto:admin@hometechservices.in"> admin@hometechservices.in</a> </p>
          <p className="footer-text-l">Landline : <a href="tel:+918754038535"> 044-42088873</a></p>
          {/* <p className="footer-text-h-l">Mob :  <a href="tel:+918754038535"> +918754038535</a> / <a href="tel:+918754038535"> +918754038535</a></p> */}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-icon">
          <img
            src={hometech}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />

          <div className="social-media">
            <SocialIcon url="https://www.linkedin.com/company/home-tech-services-pvt-ltd/" />
            <SocialIcon url="https://whatsapp.com" />
            <SocialIcon url="mailto:admin@hometechservices.in" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
