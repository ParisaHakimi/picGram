import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from './components/Home'
import AddPost from "./components/AddPost";
import EditPhoto from "./components/EditPhoto";
import ProfilePage from "./components/ProfilePage";
import SingleImage from "./components/SingleImage";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/userForm" element={<UserForm />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/single-image/:id" element={<SingleImage />} />
          <Route path="edit-photo/:id" element={<EditPhoto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
