
import { useNavigate } from "react-router-dom";

const NotFound=()=>{
    const navigate = useNavigate();
    const handleReadmore = () => {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
    
        navigate("/");
      };
    return(
        <>
          <h2>404 - Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a
            onClick={handleReadmore}
            className="btn btn-primary px-4 py-2 rounded-pill"
          >
            Home 
          </a>
        
        </>
    )
}

export default NotFound;