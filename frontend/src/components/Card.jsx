import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link to="/DetailCampaign">
      <div className="w-72 rounded-t-2xl rounded-b-3xl overflow-hidden shadow-lg relative">
        <div className="absolute mt-4 ml-5 bg-green-500 text-white py-1 px-2 rounded-2xl">Donation</div>
        <div className="absolute mt-14 ml-5 bg-blue-500 text-white py-1 px-2 rounded-2xl">Volunteer</div>
        <img src="image2.png" alt="" className="w-full h-48  rounded-t-2xl" />
        <div className="px-6 py-4">
          <p className="text-[#6D6D78] text-base mb-3">20 June 2023</p>
          <div className="font-bold text-xl mb-2">Green Cities, Clean Futures</div>
          <p className="text-[#6D6D78] text-base">By Greenpeace</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
