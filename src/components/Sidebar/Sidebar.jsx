import './Sidebar.css';
import {Link} from 'react-router-dom';


// Images
 import Img from "../../assets/img/img.png";


const Sidebar = () =>{
    return(
        <div className='sidebar'>
            <div className="sidebar-box">
                <a className='dashboard-link' href="#">Dashboard</a>

                <ul className="sidebar-list">
                    <li className='sidebar-item'><Link to="/" className='sidebar-item-link1' href="#">Dashboard</Link></li>
                    <li className='sidebar-item'><Link to="/group" className='sidebar-item-link2' href="#">Guruhlar</Link></li>
                    <li className='sidebar-item'><a className='sidebar-item-link3' href="#">O'quvchilar</a></li>
                    <li className='sidebar-item'><a className='sidebar-item-link4' href="#">Dars jadvali</a></li>
                    <li className='sidebar-item'><a className='sidebar-item-link5' href="#">Sozlamalar</a></li>
                    <li className='sidebar-item'><a className='sidebar-item-link6' href="#">Yordam</a></li>
                </ul>

                <div className='sidebar-time'>
                    <p>16:55:24</p>
                </div>

                <a className='sidebar-accaunt' href="#">
                    <div>
                        <img src={Img} alt="Icon" />
                    </div>
                    <div>
                        <h3>Ahadjon Mahkamov</h3>
                        <p>Frontend dasturchi</p>
                    </div>
                </a>
            </div>
        </div>
    )
}


export default Sidebar;