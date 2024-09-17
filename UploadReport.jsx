import React from 'react';
import { useState } from 'react';
import './UploadReport.css';
import mlogo from "./assets/ArRp_logo-removebg-preview.png";

import {
    Search,
    Upload,
    Edit3,
    BarChart2,
    FileText,
    MoreVertical,
    FileChartColumn ,
  } from "lucide-react";

 import { useNavigate } from 'react-router-dom';




const UploadReport = () => {
  const [reportName, setReportName] = useState('');
  const [department, setDepartment] = useState('');
  const [file, setFile] = useState(null);
    const navigate =useNavigate();  
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Check if all fields are non-empty
  const handleUploadClick = () => {
    const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== '');

    if (allFieldsFilled) {
       navigate('/UploadSuccess')
    } else {
      alert('Please fill in all the fields.');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', { reportName, department, file });
  };

  return (
    <div className="upload-report">
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
        <div className="upload-banner">
          <h1>Upload Report</h1>
          <div className="arrow-icon">➜</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reportName">Name Of Report</label>
            <input
              type="text"
              id="reportName"
              name='field1'
              value={formData.field1}
              onChange={handleInputChange}
              placeholder="Enter the Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Select Department</label>
            <select
              id="department"
              name='field2'
              value={formData.field2}
              onChange={handleInputChange}
            >
              <option value="">Select department</option>
              <option value="hr">COMPUTER</option>
              <option value="finance">AIML</option>
              <option value="it">IT</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="file">Select File to Upload</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="file"
                name='field3'
                value={formData.field3}
                onChange={handleInputChange}
              />
              <div className="file-input-placeholder">
                <span>Upload File from your device</span>
                <Upload/>
              </div>
            </div>
            {file && <p className="file-name">Selected file: {file.name}</p>}
          </div>

          <button type="submit" onClick={handleUploadClick} className="upload-button">Upload</button>
        </form>
      </main>
    </div>
  );
};

export default UploadReport;