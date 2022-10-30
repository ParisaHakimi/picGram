import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleImage = () => {
  const [image, setImage] = useState("");
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(218);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/image/${id}`)
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
 
  return (
    <div className="container p-3 w-75 grey">
      <div className="row mb-2">
        <div className="col-10 text-center  p-2 mx-auto singleImgBorder">
          <img src={image.postedImage} alt="" className="singleImage" />
        </div>
      </div>
      <div className="row mb-2  d-flex justify-content-around">
        <div className="col-3  ">
          
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
            <i class="fa fa-comment-o " aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <button className="btn btn-primary circle me-3">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button className="btn btn-secondary circle">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="row mb-2 d-flex align-items-center justify-content-center">
        <p className="border singleImagedesc w-75 ">
          Description: {image.postedImageDescription}
        </p>
      </div>
      <div className="row mb-2 d-flex align-items-center justify-content-center">
        <p className="border singleImagedesc w-75 ">
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
