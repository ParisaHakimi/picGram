import React from "react";
import { Link } from "react-router-dom";
const ProfilePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">add menu here</div>
        <div className="container d-flex">
          <div className="col-3 pe-3">
            <div className="container text-center border p-2 mb-3">
              <img
                src="./images/1.jpg"
                alt=""
                className="rounded mx-auto d-block profileImage"
              />
              <div className="container w-100 d-flex justify-content-around align-items-center mt-3">
                <button type="button" className="btn btn-info circle">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-secondary circle">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti maiores, blanditiis earum saepe harum beatae, ad
                laborum perferendis alias molestiae temporibus tempora
                consequuntur aliquid soluta, reiciendis exercitationem quaerat
                delectus sapiente?
              </p>
              <button type="button" className="btn btn-info w-50">
                Edit
              </button>
            </div>
          </div>
          <div className="col-6 border p-2 border">
            <div className="container  p-2 d-flex flex-wrap justify-content-between">
              <Link className="  size border d-flex justify-content-center align-items-center mb-2">
                <img
                  src="./images/1.jpg"
                  alt=""
                  className="rounded w-100 profileImage"
                />
              </Link>
              <Link className=" orange size border d-flex justify-content-center align-items-center mb-2">
                <img
                  src="./images/1.jpg"
                  alt=""
                  className="rounded  profileImage"
                />
              </Link>
              <Link className=" orange size border d-flex justify-content-center align-items-center mb-2">
                <img
                  src="./images/1.jpg"
                  alt=""
                  className="rounded  profileImage"
                />
              </Link>
              <Link className=" orange size border d-flex justify-content-center align-items-center mb-2">
                <img
                  src="./images/1.jpg"
                  alt=""
                  className="rounded  profileImage"
                />
              </Link>
            </div>
          </div>
          <div className="col-3  d-flex flex-column justify-content-around align-items-center">
            <button className="btn btn-info w-50">Add post</button>
            <div className="chat">chat here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
