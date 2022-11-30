
import ChartsHeader from './BarCharts';
import Diagramm from './Diagramm';
import './Header.css';


const Header = () =>{
    return(
        <div className="header">
            <div className='header-box'>
                <div className='header-charts'>
                    <div className='charts-subtitle'>
                        <h3>Yillik statistika</h3>
                        <select className='charts-select'><option>2022</option></select>
                    </div>
                    <ChartsHeader/>
                </div>

                <div>
                    <Diagramm/>
                </div>

            </div>
        </div>
    )
}


export default Header;