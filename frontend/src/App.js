import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { store } from "./stores/store";

import { Home } from "./modules/home/Home";
import { Feeds } from "./modules/feeds/Feeds";
import { Register } from "./modules/register/Register";
import { Login } from "./modules/login/Login";
import { Profile } from "./modules/profile/Profile";

import { UserProvider } from "./providers";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feeds" element={<Feeds />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>

      <Toaster />

      <UserProvider />
    </Provider>
  );
}

export default App;
