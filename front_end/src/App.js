import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleGroup from "./pages/Groups/SingleGroup"
import { Routes, Route } from "react-router-dom";
import Group from "./pages/Groups/Group";
import MyGroup from "./pages/Groups/MyGroup";






function App() {
  return(
    <div>
  <Routes>
     <Route path="/home" element={ <Home/> } />
     <Route path="/" element={ <Login/> } />
     <Route path="/register" element={ <Register/> } />
     <Route path="/SingleGroup" element={ <SingleGroup/> } />
     <Route path="/Profile" element={ <Profile/> } />
     <Route path="/group" element={ <Group/> } />
     <Route path="/MyGroup" element={ <MyGroup/> } />



   </Routes>
</div>
)

}

export default App;