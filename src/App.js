import "./App.css";
import Sidebar from "./Component/Sidebar";
import Home from "./Screens/Home";
import LandingPage from "./Screens/LandingPage";
import Profile from "./Screens/Profile";
import Notification from "./Screens/Notification";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

        {/* <Sidebar>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Profile />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </Sidebar> */}
      </Router >
    </>
  );
}

export default App;
