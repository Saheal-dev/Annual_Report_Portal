
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage.jsx';



import Homepage from './components/Homepage.jsx';
import AdminPage1 from './components/AdminPage1.jsx';
import UploadReport from './components/UploadReport.jsx';
import UploadSuccess from './components/UploadSuccess.jsx';



function App() {
  return (
    <>
   {/* <Homepage/> */}





   
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Admin" element={<AdminPage1/>}/>
        <Route path="/Upload" element={<UploadReport/>}/>
        <Route path="/UploadSuccess" element={<UploadSuccess/>}/>
      </Routes>
    
    </>
  );
}

export default App;
