import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const SingleImage = () => {
  const [image, setImage] = useState("");
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(218);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/image/${id}`)
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteHandler = (deletId) => {
    axios
      .delete(`http://localhost:8000/api/deleteImage/${deletId}`)
      .then((res) => {
        console.log("Deleted from database");
        navigate(`/profile-page/${id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-3 col-xs-6 col-sm-9 bodyColor">
       <Link className="btn backToHomeBtn w-25 mb-3" to={`/profile-page/${id}`}>Home</Link>
      <div className="row mb-2">
        <div className="col-xs-10 text-center  p-2 mx-auto singleImgBorder">
          <img src={image.postedImage} alt="" className="singleImage" />
        </div>
      </div>
      <div className="row mb-2  d-flex justify-content-around">
        <div className="col-xs-5 col-sm-5 col-md-4 ">
          {like ? (
            <i
              onClick={() => {
                setLike(!like);
                setLikeCount(likeCount - 1);
              }}
              className="fa fa-heart liked pointer"
              aria-hidden="true"
            ></i>
          ) : (
            <i
              onClick={() => {
                setLike(!like);
                setLikeCount(likeCount + 1);
              }}
              className="fa fa-heart-o pointer"
              aria-hidden="true"
            ></i>
          )}
          <span className="ms-1 me-5">{likeCount} Like(s)</span>
          <button className="btn  circle">
            <i className="fa fa-comment-o " aria-hidden="true"></i>
          </button>
        </div>
        <div className="  col-xs-5 col-sm-5 col-md-3 d-flex justify-content-end">
          <Link
            to={`/edit-photo/${image._id}`}
            className="btn editBtnColor circle me-3"
          >
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </Link>
          <button
            className="btn btn-secondary circle"
            onClick={(e) => deleteHandler(image._id)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="row mb-2 d-flex align-items-center justify-content-center">
        <p className="borderColor singleImagedesc w-75 ">
          Description: {image.postedImageDescription}
        </p>
      </div>
      <div className="row mb-2 d-flex align-items-center justify-content-center">
        <p className="borderColor singleImagedesc w-75 ">
          Comment: {image.postedImageComments} Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat cum illum ipsum at corporis modi
          nam autem molestiae sit assumenda, quisquam, maiores iure quam quos
          magnam consectetur quasi adipisci vel.
        </p>
      </div>
      
    </div>
  );
};

export default SingleImage;
