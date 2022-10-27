import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css";
import ProfilePage from './components/ProfilePage';

function App() {
  return <div className="App">

<BrowserRouter>
<ProfilePage/>
</BrowserRouter>

  </div>;
}

export default App;
