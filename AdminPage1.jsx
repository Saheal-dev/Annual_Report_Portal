import React from "react";
import "./AdminPage1.css";
import {
  Search,
  Upload,
  Edit3,
  BarChart2,
  FileText,
  MoreVertical,
  FileChartColumn ,
} from "lucide-react";
import mlogo from "./assets/ArRp_logo-removebg-preview.png";

import { useNavigate } from 'react-router-dom';

export default function AdminPage1() {
    const navigate = useNavigate();
    const goToUploadPage = () => {
        navigate('/Upload');  // Navigates to the next page
      };
  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="logo">
          <img src={mlogo} alt="Logo" width={"70px"} height={"60px"} />
          <h3>ADMIN</h3>
        </div>
        <div className="search-bar">
          <Search className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="profile">
          <div className="wordp">
            <p>Profile</p>
            <span className="log-out">Log out</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#000000"
          >
            <path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.81-195q-57.81 0-97.31-39.69-39.5-39.68-39.5-97.5 0-57.81 39.69-97.31 39.68-39.5 97.5-39.5 57.81 0 97.31 39.69 39.5 39.68 39.5 97.5 0 57.81-39.69 97.31-39.68 39.5-97.5 39.5Zm.66 370Q398-80 325-111.5t-127.5-86q-54.5-54.5-86-127.27Q80-397.53 80-480.27 80-563 111.5-635.5q31.5-72.5 86-127t127.27-86q72.76-31.5 155.5-31.5 82.73 0 155.23 31.5 72.5 31.5 127 86t86 127.03q31.5 72.53 31.5 155T848.5-325q-31.5 73-86 127.5t-127.03 86Q562.94-80 480.47-80Zm-.47-60q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z" />
          </svg>
        </div>
      </header>

      <main className="main-content">
        <div className="action-buttons">
          <button onClick={goToUploadPage} className="action-button upload">
            <Upload size={48} />
            <span>Upload New Report</span>
          </button>
          <button className="action-button update">
            <Edit3 size={48} />
            <span>Update Report</span>
          </button>
          <button className="action-button view">
            <BarChart2 size={48} />
            <span>View Reports Uploaded by Faculty</span>
          </button>
        </div>

        <section className="recently-added">
          <h2>Newly Added</h2>
          <div className="report-cards">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="report-card">
                <FileText size={150} />
                <div className="report-info">
                  <h3>Report name</h3>
                  <p>comp deparment</p>
                </div>
                <button className="more-options">
                  <MoreVertical />
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* recetly added section */}

        <section className="recently-added">
          <h2>Recently Added</h2>
          <div className="report-cards">
            {[1, 2, 3, 4,5,6,7,8].map((i) => (
              <div key={i} className="report-card">
                <FileText size={150} />
                <div className="report-info">
                  <h3>Report name</h3>
                  <p>comp deparment</p>
                </div>
                <button className="more-options">
                  <MoreVertical />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
