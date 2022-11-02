import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ProfilePage = () => {
  const [userImage, setUserImage] = useState([]);
  const [user, setUser] = useState("");
  // const { _id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/`)
      .then((res) => {
        console.log("one user:", res.data.firstName);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/allImages`)
      .then((res) => {
        console.log("line 12 ", res.data);
        setUserImage(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 picGram">
          <h2 className="p-3">PicGram</h2>
        </div>
        <div className="container d-flex bodyColor p-3">
          <div className="col-3  pe-3">
            <div className="container text-center borderColor p-2 mb-3">
              <img
                src="./images/profileImage.jpeg"
                alt=""
                className="rounded mx-auto d-block profileImage img-fluid"
              />
              <div className="container w-100 d-flex justify-content-around align-items-center mt-3">
                <button type="button" className="btn editBtnColor circle">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-secondary circle">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="container">
              <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est at accusamus dolore veniam cum ullam quaerat id? Esse, ut. Consequuntur dolor esse officiis, illum iste vel autem incidunt voluptate error.
               
              </p>
              <button type="button" className="btn editBtnColor w-100">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="col-6  borderColor galleryBgr p-2">
            <div className="container  p-2 d-flex flex-wrap justify-content-between">
              {userImage.map((image) => (
                <Link
                  to={`/single-image/${image._id}`}
                  className="size d-flex justify-content-center align-items-center mb-2 "
                >
                  <img
                    src={image.postedImage}
                    alt=""
                    className="rounded img-fluid gallery "
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-3  d-flex flex-column justify-content-around align-items-center">
            <Link to="/addPost" className="btn addBtnColor w-50">
              Add post
            </Link>
            <div className="chat">chat here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
