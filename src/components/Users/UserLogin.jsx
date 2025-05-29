import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [users, setUsers] = useState([]);
  
  const formRef = useRef();
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await axios.get("http://localhost:4000/users");
        setUsers(usersData.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // Run only once on component mount

  const handleUserForm = (e) => {
    e.preventDefault();

    const emailVal = formRef.current[0].value;
    const passwordVal = formRef.current[1].value;

    const userEmails = users.map((user) => user.email);

    const emailExists = userEmails.includes(emailVal);
    const passwordIsCorrect = passwordVal === "user123"; 
    
    if (emailExists && passwordIsCorrect) {
      navigate("/userportal");
    } else {
      alert("Wrong Email or Password Entered !")
    }
  };

  return (
    <div className="users-login">
      <form onSubmit={handleUserForm} ref={formRef}>
        <input type="email" placeholder="Enter the Email" required />
        <input type="password" placeholder="Enter password" required />
        <span className="admin-span"></span><br />
        <button className="adminlogin-btn">User Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
