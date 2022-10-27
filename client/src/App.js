import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddPost from "./components/AddPost";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/addPost" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
