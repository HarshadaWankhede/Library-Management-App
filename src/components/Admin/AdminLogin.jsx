import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  let formData = useRef();
  let [emailErr, setEmailerr] = useState('')
  let [pswdErr,setPswderr] = useState('')
  let navigate = useNavigate()

  const err="border: solid 2 px; background:rgba(175, 31, 31, 0.84)"

  let handleAdminForm = (e) => {
    e.preventDefault();

    let emailField = formData.current[0];
    let pswdField = formData.current[1];
    // console.log(emailField,pswdField)

    let credential = {
      email: "admin@gmail.com",
      password: "admin123",
    };
    
    let{email,password} = credential

    let checkEmail = (emailField.value === email)
    let checkpswd = (pswdField.value === password)

    if (checkEmail && checkpswd) {
      navigate("/adminportal")
    } else {
      // emailField.style.cssText = err;
      // pswdField.style.cssText=err;

      if(emailField.value === "" || emailField.value === null){
        emailField.style.cssText = err;
        setEmailerr("Email field is empty")
      }
      else if(pswdField.value === "" || pswdField.value === null){
        pswdField.style.cssText=err;
        setPswderr("Password field is empty")
      }
      else if(emailField.value !== email){
        emailField.style.cssText = err;
        setEmailerr("Invalid Email Address")

      } else if(pswdField.value !== password){
        pswdField.style.cssText = err;
        setPswderr("Wrong Password Entered")

      }

    }
  };

  return (
    <>
    <div className="admin-login">
      <form onSubmit={handleAdminForm} ref={formData} action="">
        <input type="email" placeholder="Enter the Email" />
        <span className="admin-span">{emailErr}</span>
        <input type="password" placeholder="Enter password" />
        <span className="admin-span">{pswdErr}</span><br/>
        <button className="adminlogin-btn">Admin Login</button>
      </form>
    </div>
    </>
  );
};

export default AdminLogin;
