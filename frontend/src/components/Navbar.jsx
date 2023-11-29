import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <aside className="px-4 py-5">
      {/* Profile Button */}
      <Link to="/Profile">
        <button className="border-2 border-solid rounded-3xl flex flex-row justify-around items-center p-4 w-full hover:bg-[#FFDFD6]">
          <img src="" alt="p" className="w-10 h-10" />
          <div className="flex flex-col">
            <p>username</p>
            <p>email</p>
          </div>
          <FaAngleRight />
        </button>
      </Link>

      {/* Navbar */}
      <div className="border-2 border-solid rounded-3xl mt-10 flex flex-col items-start px-6">
        <Link to="/Campaign" className="hover:bg-[#FFDFD6] w-full rounded-full my-3">
          <button className="my-3 flex flex-row gap-5 pl-4">
            <img src="home.png" />
            <p className="text-xl font-semibold">Home</p>
          </button>
        </Link>

        <Link to="/" className="hover:bg-[#FFDFD6] w-full rounded-full my-3">
          <button className="my-3 flex flex-row gap-5 pl-4">
            <img src="contribute.png" />
            <p className="text-xl font-semibold">Contributions</p>
          </button>
        </Link>

        <Link to="/Profile" className="hover:bg-[#FFDFD6] w-full rounded-full my-3">
          <button className="my-3 flex flex-row gap-5 pl-4">
            <img src="profile.png" />
            <p className="text-xl font-semibold">Profile</p>
          </button>
        </Link>
      </div>

      {/* LogOut */}
      <button className="border-2 border-solid rounded-3xl mt-10 p-4 w-full text-xl font-medium hover:bg-[#FFDFD6]">Log Out</button>
    </aside>
  );
};

export default Navbar;
