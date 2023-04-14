import "./App.css";
import Sidebar from "./Component/Sidebar";
import Home from "./Screens/Home";

import Profile from "./Screens/Profile";
import LandingPage from "./Screens/LandingPage";

import { Routes, Route } from "react-router-dom";
import Model from "./Component/Model";
import CreatePost from "./Component/CreatePost";

function App() {
  return (
    <>
      {/* <Sidebar> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/signin" element={<Model />} /> */}
        {/* <Route path="/createpost" element={<CreatePost />} /> */}
        {/* <Route path="/dashboard" element={<Profile />} /> */}
        {/* <Route path="/notification" element={<Notification />} /> */}
      </Routes>
      {/* </Sidebar> */}
    </>
  );
}

export default App;
