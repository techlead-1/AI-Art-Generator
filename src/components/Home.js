import { Link } from "react-router-dom";
import "../stylesheet/home.css"

const Home = () => {
    return ( 
        <div className="homepage">
            <div className="contents">
                <h1 className="header">Real Solutions, Artificial Intelligence</h1>
                <p className="description">Generate very high quality images and arts using natural language with the Open Ai Dall-E 2 system in just seconds and for free</p>
                <button className="home-button"><Link to="/generator" className="home-link">Try Our System Now</Link></button>
            </div>
        </div>
     );
}
 
export default Home;