import { useState } from "react";
import "../assets/styles/landingpage.css";
import AdminLogin from "./Admin/AdminLogin";
import UserLogin from "./Users/UserLogin";
import { Link } from "react-router-dom";
import  "../assets/styles/admin.css"

const LandingPage = () => {
  let [bool, setBool] = useState(true);

  let handleToggle = () => {
    setBool(!bool);
  };

  return (
    <>
    <div className="landingpage">
      <div className="landing-container">
        <div className="btn-box">
          <button onClick={handleToggle} className={bool ? "lft-btn" : "ryt-btn"} >
            {bool ? "Admin Login" : "User Login"}
          </button>
        </div>

        <div className="header">
          <h2>{bool ? "Admin Login" : "User Login"}</h2>
        </div>

        <div className="form-box">
          {bool ? <AdminLogin /> : <UserLogin />}
        </div>

        <div className="forgotten-pswd">
         <Link to="/forgot">Forgotten Password?</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
