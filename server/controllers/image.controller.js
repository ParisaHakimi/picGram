const Image = require("../models/image.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;

const showAllImage = (req, res) => {
  Image.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const showOneImage = (req, res) => {
  Image.findOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const editExistingImage = (req, res) => {
  Image.updateOne({ _id: req.params.id }, req.body, {
    new: true, //sending it back as a new object. it acts like a create, it sends back a whole object like a brand new
    runValidators: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const createNewImage = (req, res) => {
 const {_id}=jwt.verify(req.cookies.userToken,SECRET)
  Image.create(req.body)
    .then((result) => {
      res.json(result);
      User.updateOne({ _id },{$push:{image:result._id}})
      .catch(err=>res.status(400).json(err))
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deleteExistingImage = (req, res) => {
  Image.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  showAllImage,
  showOneImage,
  editExistingImage,
  createNewImage,
  deleteExistingImage,
};
