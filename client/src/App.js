import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import AddPost from "./components/AddPost";
import EditPhoto from "./components/EditPhoto";
import EditProfile from "./components/EditProfile";
import ProfilePage from "./components/ProfilePage";
import SingleImage from "./components/SingleImage";
import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login";

function App() {
  // const [userId, setUserId] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
          <Route path="/registration/" element={<RegistrationForm />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/single-image/:id" element={<SingleImage />} />
          <Route path="edit-photo/:id" element={<EditPhoto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
