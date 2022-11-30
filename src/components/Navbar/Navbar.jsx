import "./Navbar.css";

import dayNight from "../../assets/img/Vector.png";
import Add from "../../assets/img/Add.png";
import Notification from "../../assets/img/Group.png";




const Navbar = () =>{
    return(
        <div className="navbar">
            <div>
                <h1 className="navbar-user">Salom Ahadjon👋</h1>
            </div>
            <div className="navbar-button-box">
                <a className="navbar-btn" href="#"><img src={dayNight} alt="" /></a>
                <a className="navbar-btn" href="#"><img src={Add} alt="" /></a>
                <a className="navbar-btn" href="#"><img src={Notification} alt="" /></a>
                <input className="nav-search" type="text" placeholder="Qidiruv" />
            </div>
        </div>
    )
}


export default Navbar;