import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from './components/Home'
import AddPost from "./components/AddPost";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
