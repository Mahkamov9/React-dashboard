import './Sidebar.css';

// Images
 import Img from "../../assets/img/img.png";


const Sidebar = () =>{
    return(
        <div className='sidebar'>
            <div className="sidebar-box">
                <a className='dashboard-link' href="#">Dashboard</a>

                <ul className="sidebar-list">
                    <li className='sidebar-item'><a className='sidebar-item-link' href="#">Dashboard</a></li>
                    <li className='sidebar-item'><a className='sidebar-item-link' href="#">Dashboard</a></li>
                    <li className='sidebar-item'><a className='sidebar-item-link' href="#">Dashboard</a></li>
                    <li className='sidebar-item'><a className='sidebar-item-link' href="#">Dashboard</a></li>
                    <li className='sidebar-item'><a className='sidebar-item-link' href="#">Dashboard</a></li>
                    <li className='sidebar-item'><a className='sidebar-item-link' href="#">Dashboard</a></li>
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