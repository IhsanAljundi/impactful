import React from 'react';
import Navbar from '../components/Navbar';
import { FaAngleRight } from 'react-icons/fa';
import { IoChevronBackOutline } from 'react-icons/io5';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';

const DetailCampaign = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-12">
      <div className="md:w-1/5">
        <Navbar />
      </div>

      {/* Konten Utama */}
      <div className="md:w-3/5 py-4 px-24">
        <div className="flex flex-col justify-start mb-10 gap-4">
          <Link to="/Campaign">
            <button className="p-2 border-2 border-solid  rounded-full">
              <IoChevronBackOutline className="w-6 h-6" />
            </button>
          </Link>

          <img src={campaign.coverImage} className="rounded-3xl mt-5" />
          <div className="flex mt-4">
            <p className="text-[#6D6D78]">{campaign.startDate} - </p>
            <p className="text-[#6D6D78]">{campaign.endDate} </p>
          </div>

          <p className="font-bold text-3xl">{campaign.title}</p>
          <p className="text-[#6D6D78] text-xl mt-4">{campaign.description}</p>
        </div>
      </div>

      {/* Aside Kanan (Button) */}
      <aside className="md:w-1/5 p-4">
        <p className="font-semibold text-xl md:text-4xl ">Contribute</p>
        <Link to="/Volunteer">
          <button className="border-2 border-solid rounded-3xl p-2 md:p-4 w-full mt-4 md:mt-10 bg-[#FFDFD6]">
            <div className="flex flex-row justify-center items-center gap-2 md:gap-12">
              <p className="font-semibold text-base md:text-xl ">Volunteer</p>
              <FaAngleRight />
            </div>
          </button>
        </Link>
        <Link to="/Donation">
          <button className="bg-[#FFDFD6] border-2 border-solid rounded-3xl p-2 md:p-4 w-full mt-2 md:mt-4">
            <div className="flex flex-row justify-center items-center gap-2 md:gap-12">
              <p className="font-semibold text-base md:text-xl ">Donation</p>
              <FaAngleRight />
            </div>
          </button>
        </Link>
        <div className="border-t-4 rounded-3xl border-gray-300 my-8"></div>
        <p className="text-2xl font-semibold">Organization Detail</p>
        <div className="flex flex-col items-center mt-8">
          <img className="rounded-full border-2 border-solid w-64 h-64" src={profile.avatar ?? `https://api.dicebear.com/7.x/micah/svg?seed=${profile.username}`} />

          <p className="font-semibold text-2xl mt-2">{profile.username}</p>
          <p className=" text-[#6D6D78] mt-1 text-xl">{profile.email}</p>
          <p className=" text-black mt-4 text-xl text-center">{profile.description}</p>
        </div>
      </aside>
    </div>
  );
};

export default DetailCampaign;
