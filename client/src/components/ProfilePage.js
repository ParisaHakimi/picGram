import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ProfilePage = (props) => {
  //This fixes missing cookie issue
  axios.defaults.withCredentials = true;

const [userId, setUserId] = useState('')
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [userImage, setUserImage] = useState([]);
  const [userImgAmount, setUserImgAmount] = useState('')
  const navigate = useNavigate();
  // const localUser = localStorage.getItem("getLoggedUser");
  // const loggedUser = JSON.parse(localUser);
  // console.log(props);
  useEffect(() => {
    // console.log("loggedUser: ", loggedUser._id);
    // console.log("image ", loggedUser.image);
    // console.log("logged image length", loggedUser.image.length)

    axios
      .get(`http://localhost:8000/api/getLoggedUser`, { withCredentials: true })
      .then((res) => {
        console.log("logged user data: ", res.data);
        setUserId(res.data._id)
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setProfilePic(res.data.profilePic);
        setUserImage(res.data.image);
        // console.log("image length res:", res.data.image.length )
        setUserImgAmount(res.data.image.length)
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = (e) => {
    axios
      .get("http://localhost:8000/api/logout", { withCredentials: true })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar col-12 picGram">
          <div className="container-fluid">
            <h2 className="picGramFont">PicGram</h2>
            <button className="btn logoutBtn" onClick={logout}>
              Logout
            </button>
          </div>
        </nav>
        <div className="container d-flex bodyColor p-3">
          <div className="col-3 d-flex flex-column  align-items-center me-4">
            <div className="container mb-3">
              <img
                src="../images/profileImage.jpeg"
                alt="profile-image"
                className=" mx-auto d-block profileImage img-fluid"
              />
            </div>
            <div className="container text-center mb-3">
              <h4>
                {firstName} {lastName}
              </h4>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-5 w-100">
              <h6 className="text-center"> {userImgAmount} posts</h6>
              <h6 className="text-center">200 followers</h6>
              <h6 className="text-center">230 following</h6>
            </div>
            <Link
              className="btn editBtnColor w-100"
              to={`/edit-profile/${userId}`}
            >
              <i className="fa fa-pencil me-3" aria-hidden="true"></i> Edit
              Profile
            </Link>
          </div>

          <div className="col-6  borderColor galleryBgr galleryshadow p-2">
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
            <Link to={`/addPost/${userId}`} className="btn addBtnColor w-50">
              <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> New
              post
            </Link>
            <div className="chat">chat here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
