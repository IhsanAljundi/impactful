import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Home } from "./modules/home/Home";
import { Register } from "./modules/register/Register";
import { Login } from "./modules/login/Login";
import { Profile } from "./modules/profile/Profile";
import { Campaign } from './pages/Campaign';
import { DetailCampaign } from './pages/DetailCampaign';
import { Volunteer } from './pages/Volunteer';
import { Donate } from './pages/Donate';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/Campaign" element={<Campaign />} />
        <Route path='/DetailCampaign' element={<DetailCampaign />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
