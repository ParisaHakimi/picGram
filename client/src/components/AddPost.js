import React from "react";

const AddPost = () => {
  return (
    <div className="container">
      <div className="row">
        <form className="addPostForm col-8 p-5 border">
          <h2 className="text-center">Create Post</h2>
          <div class="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <div className="mb-3">
            <input class="form-control" type="file" id="formFile"></input>
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
