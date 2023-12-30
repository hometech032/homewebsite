import "./footer.css";
import hometech from '../../assets/hometechfooter.png'
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        {/* <h4>LinkedIn</h4>
        <h4>Instagram</h4>
        <h4>Facebook</h4> */}

        <div className="footer-about">

        <h6 className="footer-text-l">About Us</h6>
        <p className="footer-text-l">Why US</p>
        <p className="footer-text-l">Contact Us</p>
        <p className="footer-text-l">Career</p>
        <p className="footer-text-l">Blog</p>
        </div>

        <div className="footer-services" >
            
        <h6 className="footer-text-l">Services Us</h6>
        <p className="footer-text-l">House Keeping</p>
        <p className="footer-text-l">Security</p>
        <p className="footer-text-l">Electrical</p>
        <p className="footer-text-l">Pest</p>
        <p className="footer-text-l">HAVC</p>
        </div>

        <div className="footer-gettouch" >
            
            <h6 className="footer-text-l">Get in Touch</h6>
            <p className="footer-text-l">Mail Us At : info@hometechservices.in</p>
            <p className="footer-text-l">Landline   : 8754038535</p>
            <p className="footer-text-l">Mob        : 8754038535 / 8754038535</p>
          
            </div>
    
        

      </div>

      <div className="footer-bottom">
        <div className="footer-icon">
         <img src={hometech}   sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
        
                <div className="social-media">
                        <SocialIcon url="https://www.linkedin.com/in/mohamed-ibrahim-b62b3aa8/" />
                        <SocialIcon url="https://whatsapp.com" />
                        <SocialIcon url="https://email.com" />

                </div>
        </div>

     
      </div>

      


    </div>
  );
};
export default Footer;
