// import { Route } from 'react-router';
import { Routes, Route } from "react-router-dom";
import './App.css';


import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar.jsx';

// import DashboardPage from './pages/DashboardPage';


function App() {
  return (
    <div className="App">
      <div className="page-box">
                <div className='sidebar-page'>
                    <Sidebar/>
                </div>
                <div className='page-main'>
                    <Navbar/>
                    <Header/>
                </div> 
          </div>

          <Routes>
            <Route path='/' element={<div>Salom</div>} />
            <Route path="/group" element={<Navbar/>} />
          </Routes>
    </div>
  );
}

export default App;
