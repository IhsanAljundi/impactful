import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Home } from "./modules/home/Home";
import { Register } from "./modules/register/Register";
import { Login } from "./modules/login/Login";
import { Profile } from "./modules/profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
