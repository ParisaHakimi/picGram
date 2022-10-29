import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddPost = () => {
  const [postedImageDescription, setPostedImageDescription] = useState("");
  const [postedImage, setPostedImage] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/addImage", {
        postedImage,
        postedImageDescription,
      })
      .then((res) => {
        // console.log(res.data);
        navigate("/")
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="row">
        <Link to="/">Back to Home</Link>
        <form className="addPostForm col-8 p-5 border" onSubmit={submitHandler}>
          <div className="mb-4">
            <h2 className="text-center">Create Post</h2>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="What's on your mind?"
              onChange={(e) => setPostedImageDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              id="formFile"
              onChange={(e) => setPostedImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-success w-100">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
