import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link,useParams } from "react-router-dom";

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
      navigate(`/profile-page/${logged.data._id}`);
    } catch (err) {
      console.log(err);
      setErrors(err.response.data.errors);
    }
  };

  return (
    <div className="container reg-page-bgc">
      <div className="row p-5 login-page">
        <div className="col-xs-12 col-sm-5 loginImg">
          <img className="reg-page-img" src="./images/4.jpg" alt="" />
        </div>
        <div className="container col-xs-12 col-sm-7 loginTextSection">
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
          <div className="container d-flex flex-column justify-content-between mt-3 loginLinkContainer">
            <Link to="/registration" className="text-light">
              Don't have an account? Register
            </Link>
            <div className="text-light recruterFriendly">
              Jump in without registration(recruter friendly)
              <p className="text-light recruterPasscode">I wanted to showcase the validation abilities of the registration and login forms. If you are not interested in making a new account, you can use these passcodes instead: "Email:tina@email.com", "Password:12345"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
