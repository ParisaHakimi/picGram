import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPhoto = () => {
  const [postedImageDescription, setPostedImageDescription] = useState("");
  const [postedImage, setPostedImage] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/image/${id}`)
      .then((res) => {
        console.log(res.data.postedImageDescription);
        setPostedImage(res.data.postedImage);
        setPostedImageDescription(res.data.postedImageDescription);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/editImage/${id}`, {
        postedImage,
        postedImageDescription,
      })
      .then((res) => {
        navigate(`/single-image/${id}`);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <form className="addPostForm col-8 p-5 border" onSubmit={submitHandler}>
          <div className="mb-4">
            <h2 className="text-center">Edit Post</h2>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="What's on your mind?"
              value={postedImageDescription}
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
              value={postedImage}
              onChange={(e) => setPostedImage(e.target.value)}
            />
            {errors.postedImage ? (
              <span className="text-danger">{errors.postedImage.message}</span>
            ) : null}
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <Link
              className="btn backToHomeBtn w-25 me-2"
              to={`/single-image/${id}`}
            >
              Back
            </Link>
            <button className="btn btn-success w-75">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPhoto;
