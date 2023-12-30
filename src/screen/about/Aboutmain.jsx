import About from "./About";
import Header from "../header/Header";
import Contact from "../contact/contact";
import Team from "../team/Team";
import Footer from "../../component/footer/Footer";

const Aboutmain=()=>{


    return(
        <div style={{marginTop:"120px"}}>
        <Header/>
        <About/>
        <Team/>
        <Contact/>
        <Footer/>
        
        </div>
    )
}

export default Aboutmain;