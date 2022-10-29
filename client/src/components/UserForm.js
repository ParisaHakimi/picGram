import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/addUser", {
        firstName,
        lastName,
        email,
        gender,
        dateOfBirth,
        password,
        profilePic,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="userForm col-8 p-5 border" onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="fName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fName"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lname" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lName"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          onChange={(e) => setGender(e.target.value)}
        >
          {/* <option disabled>Gender</option> */}
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="DOB" className="form-label">
          Date of Birth
        </label>
        <input
          type="Date"
          className="form-control"
          id="DOB"
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="profilePic" className="form-label">
          Profile picture
        </label>
        <input
          type="file"
          className="form-control"
          id="profilePic"
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
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
      </div>
      <div className="mb-3 form-check"></div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
