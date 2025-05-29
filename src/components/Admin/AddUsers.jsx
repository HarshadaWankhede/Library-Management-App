import React, { useRef } from 'react';
import "../../assets/styles/adduser.css"; // Import the CSS
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
  let formData = useRef();
  let navigate = useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault();

    let userData = {
      firstname: formData.current[0].value,
      lastname: formData.current[1].value,
      contact: formData.current[2].value,
      email: formData.current[3].value,
      password: formData.current[4].value,
      dob: formData.current[5].value,
      place: formData.current[6].value,
    };
    console.log("New user data", userData);

    fetch(`http://localhost:4000/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    alert("User added successfully!");
    formData.current.reset();
    navigate(`/adminportal/user`)
  };

  return (
    <div className="adduser">
      <div className="adduser-header">
        <h1>Add Users</h1>
      </div>
      <div className="adduser-container">
        <div className="adduser-form-box">
          <form ref={formData} onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter the First Name" />
            <input type="text" placeholder="Enter the Last Name" />
            <input type="number" placeholder="Enter Contact No" />
            <input type="email" placeholder="Enter the Email Address" />
            <input type="password" placeholder="Enter the Password" disabled />
            <input type="date" />
            <input type="text" placeholder="Enter the Place" />
            <br />
            <button type="submit">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
