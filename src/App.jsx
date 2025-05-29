import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AdminPortal from "./components/Admin/AdminPortal";
import Forgot from "./components/Forgot";
import UserPortal from "./components/Users/UserPortal";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adminportal/*" element={<AdminPortal />} />
        <Route path="/forgot"  element={<Forgot/>} />
        <Route path="/userportal/*" element={<UserPortal/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
