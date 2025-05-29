import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/styles/users.css';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Users = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const bool = location.pathname.startsWith(`/adminportal`);
  const viewNavigate = useNavigate();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let usersApiData = await fetch(`http://localhost:4000/users`);
    let data = await usersApiData.json();
    setUsers(data);
  };

  
  const handleView = (id) => {
    const basePath = bool ? '/adminportal' : '/userportal';
    viewNavigate(`${basePath}/viewuser/${id}`);
  };

  const deleteUser = (id, firstname) => {
    let confirmDelete = window.confirm(`Do you want to delete ${firstname}'s details?`);
    if (confirmDelete) {
      fetch(`http://localhost:4000/users/${id}`, { method: 'DELETE' });
      alert(`${firstname}'s details have been deleted.`);

    } else {
      alert(`${firstname}'s details were not deleted.`);
    }
  };

  return (
    <div className="users">
      <div className="user-header">
        <h1>Users Details</h1>
      </div>
      <div className="user-container">
        <div className="user-table-box">
          <table>
            <thead>
              <tr>
                <th>SL No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact</th>
                {bool && <th>Email</th>}
                {bool && <th>Password</th>}
                {bool && <th>Date of Birth</th>}
                <th>Age</th>
                <th>Place</th>
                <th>View</th>
                {bool && <th>Delete</th>}
              </tr>
            </thead>
            <tbody>
              {users.map((elem, index) => {
                const { id, firstname, lastname, contact, email, dob, place } = elem;
                let age = new Date().getFullYear() - parseInt(dob.slice(0, 4));

                return (
                  <tr key={id}>
                    <th>{index + 1}</th>
                    <td>{firstname}</td>
                    <td>{lastname}</td>
                    <td>{contact}</td>
                    {bool && <td>{email}</td>}
                    {bool && <td>user123</td>}
                    {bool && <td>{dob}</td>}
                    <td>{age}</td>
                    <td>{place}</td>
                    <td>
                      <button className="view" onClick={() => handleView(id)}>
                        <VisibilityIcon />
                      </button>
                    </td>
                    {bool && (
                      <td>
                        <button className="del" onClick={() => deleteUser(id, firstname)}>
                          <DeleteIcon />
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
