import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate, Link,useParams } from "react-router-dom";


const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState('')
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/login/${id}`)
      .then((res) => {
        console.log(res.data.postedImageDescription);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setProfilePic(res.data.profilePic)
        // setPassword(res.data.password);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/editUser/${id}`, {
        firstName,lastName,email,profilePic,
      })
      .then((res) => {
        navigate(`/profile-page`);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="container">
    <div className="row">
      <div className="col-12 picGram p-3 d-flex justify-content-between align-items-center">
        <h2 className="picGramFont">PicGram</h2>
        <Link to="/" className="text-light">Already have an account? Log in</Link>
      </div>
      <div className="container reg-page-bgc p-4">
     
      <form className="userForm col col-8 mx-auto p-4 borderColor" onSubmit={submitHandler}>
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
          {errors.firstName ? (
            <span className="text-danger">{errors.firstName.message}</span>
          ) : null}
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
          {errors.lastName ? (
            <span className="text-danger">{errors.lastName.message}</span>
          ) : null}
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
          {errors.email ? (
            <span className="text-danger">{errors.email.message}</span>
          ) : null}
        </div>
        {/* <div className="mb-3">
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
          {errors.password ? (
            <span className="text-danger">{errors.password.message}</span>
          ) : null}
        </div> */}
        {/* <div className="mb-3">
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
          {errors.password ? (
            <span className="text-danger">{errors.password.message}</span>
          ) : null}
        </div> */}
        <div className="mb-3 reg-form-label">* required items</div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
      </div>
    </div>
  </div>
);

};

export default EditProfile;
