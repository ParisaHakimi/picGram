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
// const createNewImage = (req, res) => {
//  const {_id}=jwt.verify(req.cookies.userToken,SECRET)
//   Image.create(req.body)
//     .then((result) => {
//       res.json(result);
//       User.updateOne({ _id },{$push:{image:result._id}})
//       .catch(err=>res.status(400).json(err))
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// };
const uploadFile=(req,res)=>{
//  const {_id}=jwt.verify(req.cookies.userToken,SECRET)
  if(req.file===null){
    return res.status(400).json({msg:'No file uploaded'});
  }
  const file=req.files.file; //pull our file from req.files
  // __dirname means current directory
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err=>{
    if(err){
      console.log(err);
      return res.status(500).send(err); //500 is server error
    }
    res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
  })
}
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
  // createNewImage,
  uploadFile,
  deleteExistingImage,
};
