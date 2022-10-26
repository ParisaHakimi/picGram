const Image = require("../models/image.model");
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
    new: true,
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
  Image.create(req.body)
    .then((result) => {
      res.json(result);
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
