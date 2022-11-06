import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getLoggedUser`, { withCredentials: true })
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setProfilePic(res.data.profilePic);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/editUser/${id}`, {
        firstName,
        lastName,
        email,
        profilePic,
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
        </div>
        <div className="container reg-page-bgc p-4">
          <form
            className="userForm col col-8 mx-auto p-4 borderColor"
            onSubmit={submitHandler}
          >
            <div className="mb-3">
              <label htmlFor="fName" className="form-label reg-form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName ? (
                <span className="text-danger">{errors.firstName.message}</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label reg-form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName ? (
                <span className="text-danger">{errors.lastName.message}</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label reg-form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email ? (
                <span className="text-danger">{errors.email.message}</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label
                htmlFor="profileImage"
                className="form-label reg-form-label"
              >
                Profile image
              </label>
              <input
                type="text"
                className="form-control"
                id="profileImage"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
              />
              {errors.profilePic ? (
                <span className="text-danger">{errors.profilePic.message}</span>
              ) : null}
            </div>
            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-primary w-100">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
