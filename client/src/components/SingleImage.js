import React,{useState,useEffect} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom'


const SingleImage = () => {
    const [image, setImage] = useState('')
    const {id}=useParams()
    useEffect(() => {
     axios.get(`http://localhost:8000/api/image/${id}`)
     .then(res=>{
        setImage(res.data)
     })
     .catch(err=>console.log(err))
    }, [])
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <img src={image.postedImage} alt="" />
            </div>
            <div className="container">
                <button></button>
            </div>
        </div>
    </div>
  )
};

export default SingleImage;
