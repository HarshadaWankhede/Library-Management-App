import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/viewuser.css';  

const ViewUser = () => {
  const { id } = useParams();
  const [viewuser, setViewuser] = useState({});
   const bool = location.pathname.startsWith(`/adminportal`); 

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    let respApi = await fetch(`http://localhost:4000/users/${id}`);
    let view = await respApi.json();
    setViewuser(view);
  };

  const { firstname, lastname, contact, email, dob, place,password } = viewuser;

  return (
    <div className="view-user">
      <div className="view-user-header">
        <h1>User Details</h1>
      </div>
      <div className="view-user-table">
        <table border="1">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{firstname}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{lastname}</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>{contact}</td>
            </tr>
            <tr>
            {bool && <th>Email</th>}
            {bool && <td>{email}</td>}
            </tr>
            <tr>
               {bool && <th>Password</th>}
               {bool && <td>{password}</td>}
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{dob}</td>
            </tr>
            <tr>
              <th>Place</th>
              <td>{place}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;
