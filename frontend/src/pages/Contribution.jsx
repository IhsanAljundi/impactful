import React from 'react';
import Navbar from '../components/Navbar';
import { FaAngleRight } from 'react-icons/fa';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';

const Contribution = () => {
  return (
    <div className="flex flex-col md:flex-row p-12">
      <div className="md:w-1/5">
        <Navbar />
      </div>

      {/* Konten Utama */}
      <div className="md:w-3/5 py-4 px-24">
        <div className="flex flex-row justify-start items-center mb-10 gap-4">
          <p className="font-semibold text-2xl md:text-4xl mb-1">Contributions</p>
        </div>

        <div className="relative mb-12">
          <input type="text" placeholder="Search for campaigns" className="text-xl border p-3 pl-12 rounded-2xl w-full" />
          <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <IoSearchOutline className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-20">{/* Tampilkan hasil kontribusi yang user sudah lakukan */}</div>
      </div>

      {/* Aside Kanan (Button) */}
      <aside className="md:w-1/5 p-4">
        <p className="font-semibold text-xl md:text-4xl ">Quick Actions</p>
        <Link to="/Campaign">
          <button className="border-2 border-solid rounded-3xl p-2 md:p-4 w-full mt-4 md:mt-10 bg-[#FFDFD6]">
            <div className="flex flex-row justify-center items-center gap-2 md:gap-12">
              <p className="font-semibold text-base md:text-xl ">Join a Campaign</p>
              <FaAngleRight />
            </div>
          </button>
        </Link>
      </aside>
    </div>
  );
};

export default Contribution;
