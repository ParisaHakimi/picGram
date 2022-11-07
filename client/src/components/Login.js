import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      let logged = await axios.get("http://localhost:8000/api/getLoggedUser", {
        withCredentials: true,
      });
      console.log(`email is: ${logged.data.email}`);
      localStorage.setItem("getLoggedUser", JSON.stringify(logged.data));
      console.log(`logged in user is: ${logged.data.firstName}`);
      navigate("/profile-page");
    } catch (err) {
      console.log(err);
      setErrors(err.response.data.errors);
    }
  };

  return (
    <div className="container reg-page-bgc">
      <div className="row p-5">
        <div className="col col-5 me-4">
          <img className="reg-page-img" src="./images/4.jpg" alt="" />
        </div>
        <div className="container col col-6">
          <h2 className="p-3 welcome picGramFont"> Welcome to PicGram</h2>
          <form className="userForm  p-4 borderColor" onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label reg-form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email ? (
                <span className="text-danger">{errors.email.message}</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label reg-form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errors.password ? (
                <span className="text-danger">{errors.password.message}</span>
              ) : null}
            </div>
            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-primary w-100">
              Log in
            </button>
          </form>
          <div className="container d-flex flex-column justify-content-between align-items-center mt-3 loginLinkContainer">
            <Link to="/registration" className="text-light">
              Don't have an account? Register
            </Link>
            {/* <Link to="/profile-page" className="text-light">
              Jump in without registration(recruter friendly)
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
