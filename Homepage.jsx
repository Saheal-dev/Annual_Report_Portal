import React from 'react';
import logo from './assets/ArRp_logo-removebg-preview.png'; 
import polygon1 from './assets/Polygon 1.png';
import polygon2 from './assets/Polygon 2.png';
import polygon3 from './assets/Polygon 3.png';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';


function Homepage() {
    const navigate = useNavigate();

    const goToNextPage = () => {
      navigate('/login');  // Navigates to the next page
    };
  return (
    <div className="App">
      <div className='first-container'>
      {/* right container */}
      <div className='right'>
      <p>WELCOME TO</p>
      <img src={logo} alt="Logo" />
     <h1>ANNUAL REPORT PORTAL</h1>
     <button onClick={goToNextPage}>Get Started
     {/* <span class="material-symbols-outlined">
chevron_right
</span>   */}
  </button>
      </div>
       {/* left container */}
      <div className='out-left'>
      <div className='left'>
        <img src={polygon1} width={"350px"} height={"350px"} className='p1'/>
        <img src={polygon2} width={"300px"} height={"300px"} className='p2'/>
        <img src={polygon3} width={"250px"} height={"200px"} className='p3'/>
      </div>
      </div>

      </div>
     
    </div>
  )
}

export default Homepage
