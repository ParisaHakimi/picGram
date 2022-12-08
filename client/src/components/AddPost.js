import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddPost = () => {
  const [postedImageDescription, setPostedImageDescription] = useState("");
  const [postedImage, setPostedImage] = useState("");
  const [errors, setErrors] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/addImage",
        {
          postedImage,
          postedImageDescription,
        },
        { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data);
        navigate(`/profile-page/${id}`);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div className="container bodyColor">
      <div className="row p-3">
        <form
          className="addPostForm col-sm-8 p-5 borderColor"
          onSubmit={submitHandler}
        >
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
            {errors.postedImageDescription ? (
              <span className="text-danger">
                {errors.postedImageDescription.message}
              </span>
            ) : null}
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              id="formFile"
              placeholder="Upload Image"
              onChange={(e) => setPostedImage(e.target.value)}
            />
            {errors.postedImage ? (
              <span className="text-danger">{errors.postedImage.message}</span>
            ) : null}
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <Link
              className="btn backToHomeBtn w-25 me-2"
              to={`/profile-page/${id}`}
            >
              Home
            </Link>

            <button className="btn addBtnColor w-75">
              <i className="fa fa-upload me-3" aria-hidden="true"></i> Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
