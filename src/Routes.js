import React from "react";
import HomeTwo from "pages/HomeTwo";
import HomeOne from "pages/HomeOne";
import PlanDetails from "pages/PlanDetails";
import Home1 from "pages/Home1";
import PodDetails from "pages/PodDetails";
import DashboardOne from "pages/DashboardOne";
import DashboardTwo from "pages/DashboardTwo";
import Dashboard from "pages/Dashboard";
import OTPScreen from "pages/OTPScreen";
import Login from "pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/otpscreen" element={<OTPScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardtwo" element={<DashboardTwo />} />
        <Route path="/dashboardone" element={<DashboardOne />} />
        <Route path="/poddetails" element={<PodDetails />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/plandetails" element={<PlanDetails />} />
        <Route path="/homeone" element={<HomeOne />} />
        <Route path="/hometwo" element={<HomeTwo />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
