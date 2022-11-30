import './App.css';


import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar.jsx';


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

    </div>
  );
}

export default App;
