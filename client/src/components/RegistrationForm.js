import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/register",
        {
          firstName,
          lastName,
          email,
          // dateOfBirth,
          password,
          confirmPassword,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/profile-page");
      })
      .catch((err) => {
        console.log(err);
        // setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="container">
      <div className="row">
        {/* <Link to={`/profile-page`}>profile page</Link> */}
        <div className="col-12 picGram">
          <h2 className="p-3">PicGram</h2>
        </div>
        <div className="container reg-page-bgc d-flex ">
        <div className="col col-5 me-4">
          <img className="reg-page-img" src="./images/1.jpg" alt="" />
        </div>
        <form className="userForm col col-6 p-4 borderColor" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="fName" className="form-label reg-form-label">
              First Name *
            </label>
            <input
              type="text"
              className="form-control"
              id="fName"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* {errors.firstName ? (
              <span className="text-danger">{errors.firstName.message}</span>
            ) : null} */}
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label reg-form-label">
              Last name *
            </label>
            <input
              type="text"
              className="form-control"
              id="lName"
              onChange={(e) => setLastName(e.target.value)}
            />
            {/* {errors.lastName ? (
              <span className="text-danger">{errors.lastName.message}</span>
            ) : null} */}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label reg-form-label">
              Email address *
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* {errors.email ? (
              <span className="text-danger">{errors.email.message}</span>
            ) : null} */}
          </div>

          {/* <div className="mb-3">
          <label htmlFor="DOB" className="form-label">
            Date of Birth *
          </label>
          <input
            type="Date"
            className="form-control"
            id="DOB"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
           {errors.dateOfBirth ? (
            <span className="text-danger">{errors.dateOfBirth.message}</span>
          ) : null}
        </div> */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label reg-form-label">
              Password *
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* {errors.password ? (
              <span className="text-danger">{errors.password.message}</span>
            ) : null} */}
          </div>
          <div className="mb-3">
            <label htmlFor="ConfirmPassword" className="form-label reg-form-label">
              Confirm Password *
            </label>
            <input
              type="text"
              className="form-control"
              id="ConfirmPassword"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {/* {errors.password ? (
              <span className="text-danger">{errors.password.message}</span>
            ) : null} */}
          </div>
          <div className="mb-3 reg-form-label">* required items</div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
