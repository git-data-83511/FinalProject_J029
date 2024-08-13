import React, { useState } from "react";
import UserSiderbar from "../components/UserSidebar";
import "../styles/AddTrainStyles.css"
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const navigate = useNavigate();
  const USER_BASE_REST_API_URI = "http://localhost:8080/users";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    adress: "",
    role:"",
  });

  const {
    email,
    password,
    firstName,
    lastName,
    address,
    role,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        USER_BASE_REST_API_URI + `/register`,
        formData
      );
      console.log(response.data + "<>><");
      toast.success("Registration Successful.");
      navigate("/login");
    } catch (error) {
      if (error.response.status === 404) {
        toast.error(`${error.response.data}`);
      }
    }
    // Call register function or API to register user
  };

  return (
    <>
    <Navbar></Navbar>
    <UserSiderbar>
    <div className="middleContent">
      <div className="container">
        <h1>Sign Up Here</h1>
        <br />
        <div
          style={{
            backgroundColor: "InfoBackground", // Choose your desired background color
            padding: '20px',             // Adjust padding as needed
            borderRadius: '10px',        // Optional: Adds rounded corners
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Adds a subtle shadow
          }}
        >
          <form className="add-train-form" onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="email">Email </label>
              <br />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
  
            <div>
              <label htmlFor="password">Password </label>
              <br />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="5"
                required
              />
            </div>
  
            <div>
              <label htmlFor="firstName">First Name </label>
              <br />
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
  
            <div>
              <label htmlFor="lastName">Last Name </label>
              <br />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => onChange(e)}
              />
            </div>
  
            <div>
              <label htmlFor="address">Address </label>
              <br />
              <input
                type="text"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => onChange(e)}
              />
            </div>
  
            <div>
              <label htmlFor="role">Role</label>
              <br />
              <select
                name="role"
                value={role}
                onChange={(e) => onChange(e)}
                required
                style={{ width: '200px', height: '40px' }}
              >
                <option value="">Select Role</option>
                <option value="CUSTOMER">CUSTOMER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
  
            <input
              type="submit"
              className="add-flight-form button"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  </UserSiderbar>
  <Footer></Footer>
  </>
  );
};

export default Register;
