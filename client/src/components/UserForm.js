import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  // const [profilePic, setProfilePic] = useState("");
  const [errors, setErrors] = useState({});
  // const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/addUser", {
        firstName,
        lastName,
        email,
        // gender,
        // dateOfBirth,
        password,
        // profilePic,
      })
      .then((res) => {
        console.log(res.data);
        // navigate("/profile-page")
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <>
      <Link to={`/profile-page`}>profile page</Link>
      <form className="userForm col-8 p-5 border" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="fName" className="form-label">
            First Name *
          </label>
          <input
            type="text"
            className="form-control"
            id="fName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName ? (
            <span className="text-danger">{errors.firstName.message}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last name *
          </label>
          <input
            type="text"
            className="form-control"
            id="lName"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName ? (
            <span className="text-danger">{errors.lastName.message}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address *
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
        {/* <div className="mb-3">
          <select
            className="form-select"
            onChange={(e) => setGender(e.target.value)}
          >
           
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div> */}
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
        </div>
        <div className="mb-3">
          <label htmlFor="profilePic" className="form-label">
            Profile picture
          </label>
          <input
            type="text"
            className="form-control"
            id="profilePic"
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
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
          {errors.password ? (
            <span className="text-danger">{errors.password.message}</span>
          ) : null}
        </div>
        <div className="mb-3">* required items</div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
