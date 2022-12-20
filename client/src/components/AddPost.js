import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddPost = () => {
  const [postedImageDescription, setPostedImageDescription] = useState("");
  const [postedImage, setPostedImage] = useState("");
  const [fileName, setFileName] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({}) //default is an object because what we are sending back from our server is an object(image.controller.js file line 60)
  const [errors, setErrors] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  const onChange=e=>{
    // because with html file input we can do multiple files so "e.target.files" are like an array and because we just need the first one since this is a single file upload  
    setPostedImage(e.target.files[0]);
    setFileName(e.target.files[0].name)
  }
  const submitHandler = async(e) => {
     e.preventDefault();
    // in order to send a file we need to added to our form data, so we create a variable called formData and set it to FormData which is a part of javascript
    const formData=new FormData(); 
    formData.append('file',postedImage); //this "file" is comming from image.controller.js file line 53. if we wrote "image" instead of "file" over there, then we had to write "image" here.
    try{
      const res=await axios.post('http://localhost:8000/api/uploadPost', formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      // we'll get res.data that's going to include the object we send back from the server(image.controller.js file line 60) so we're going to pull out the fileName and filePath from it
      const {fileName,filePath}=res.data
      setUploadedFile({fileName,filePath})
    }catch(err){
if(err.response.status===500){
  console.log('there was a problem with the server')
}else{
  console.log(err.response.data.msg) //msg is comming from image.controller.js file line 51 
}
    }
    }
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       "http://localhost:8000/api/addImage",
  //       {
  //         postedImage,
  //         postedImageDescription,
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       // console.log(res.data);
  //       navigate(`/profile-page/${id}`);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setErrors(err.response.data.errors);
  //     });
  // };
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
              type="file"
              id="formFile"
              onChange={onChange}
            />
          </div>
          {/* <div className="mb-3">
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
          </div> */}
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <Link
              className="btn backToHomeBtn w-25 me-2"
              to={`/profile-page/${id}`}
            >
              Home
            </Link>

            <button className="btn addBtnColor w-75">
              <i className="fa fa-upload me-3" aria-hidden="true"></i> Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
