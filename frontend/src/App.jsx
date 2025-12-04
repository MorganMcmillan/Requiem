import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import SelectRole from './pages/Auth/SelectRole';
import RegisterCompany from './pages/Business/RegisterCompany';
import BusinessDashboard from './pages/Business/BusinessDashboard';
import DeveloperDashboard from './pages/Developer/DeveloperDashboard';
import CreateProject from './pages/Developer/CreateProject';
import Requirements from './pages/Requirements/Requirements';
import SubmitRequirement from './pages/Business/SubmitRequirement';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/business-dashboard" element={<BusinessDashboard />} />
        <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/requirements/new" element={<SubmitRequirement />} />
      </Routes>
    </Router>
  );
}

export default App;
