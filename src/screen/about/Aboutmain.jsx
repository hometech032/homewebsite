import About from "./About";
import Header from "../header/Header";
import Contact from "../contact/contact";
import Team from "../team/Team";
import Footer from "../../component/footer/Footer";
import ProfileC from"../../component/ProfileC/ProfileC";
const Aboutmain=()=>{


    return(
        <div style={{marginTop:"120px"}}>
        <Header/>
        <About/>
        <Team/>
        <ProfileC/>
        <Contact/>
        
        <Footer/>
        
        </div>
    )
}

export default Aboutmain;