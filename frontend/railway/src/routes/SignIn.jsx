import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../App";
import { login } from "../services/admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddTrainStyles.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const { dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailEmpty, setEmailEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/register");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.length === 0) {
      setEmailEmpty(true);
      toast.error("Please enter email");
      return;
    }
    setEmailEmpty(false);

    if (password.length === 0) {
      setPasswordEmpty(true);
      toast.error("Please enter password");
      return;
    }
    setPasswordEmpty(false);

    try {
      const result = await login(email, password);
      const role = result.role;

      if (result.status === "success") {
        sessionStorage.setItem("name", result.firstName);
        sessionStorage.setItem("id", result.id);

        if (role === "ADMIN") {
          toast.success("Login Successful.");
          dispatch({ type: "ADMIN", payload: true });
          navigate("/adminhome");
        } else if (role === "CUSTOMER") {
          toast.success("Login Successful.");
          dispatch({ type: "USER", payload: true });
          navigate("/home");
        }
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Error occurred during login");
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="middleContent">
      <br />
      <br />
      <div className="container">
        <div className="container-fluid bg-light py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-lg-4 bg-white rounded shadow p-4">
              <div style={{ justifyContent: "center" }}>
                <h2 className="text-center">Login here</h2>
                <br />
                <form onSubmit={handleSubmit} className="add-train-form">
                  <div>
                    <label htmlFor="email">Email :</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {isEmailEmpty && (
                      <p style={{ color: "red" }}>Email is mandatory</p>
                    )}
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="password">Password :</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {isPasswordEmpty && (
                      <p style={{ color: "red" }}>Password is mandatory</p>
                    )}
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                  <br />
                  <button
                    type="button"
                    onClick={handleSignup}
                    className="btn btn-primary btn-block"
                  >
                    Sign Up
                  </button>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    <Footer></Footer>
    </>
  );
}

export default Login;
