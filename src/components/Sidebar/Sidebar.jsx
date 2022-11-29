import './Sidebar.css';



const Sidebar = () =>{
    return(
        <div className='sidebar'>
            <div className="sidebar-box">
                <a className='dashboard-link' href="#">Dashboard</a>

                <ul className="sidebar-list">
                    <li className="sidebar-item">Guruhlar</li>
                </ul>

                <div className='sidebar-time'>
                    16:55
                </div>

                <a href="sidebar-accaunt">
                    Sss
                </a>
            </div>
        </div>
    )
}


export default Sidebar;