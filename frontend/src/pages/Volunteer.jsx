import React from 'react';
import Navbar from '../components/Navbar';
import { FaAngleRight } from 'react-icons/fa';
import { IoChevronBackOutline } from 'react-icons/io5';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';

const Volunteer = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-12">
      <div className="md:w-1/5">
        <Navbar />
      </div>

      {/* Konten Utama */}
      <div className="md:w-3/5 py-4 px-24">
        <div className="flex flex-col justify-start mb-10 gap-4">
          <Link to="/DetailCampaign">
            <button className="p-2 border-2 border-solid  rounded-full">
              <IoChevronBackOutline className="w-6 h-6" />
            </button>
          </Link>
          <p className="font-bold text-3xl">Volunteer for Reforest to Reset: A Greenpeace Campaign to Heal Our Planet Tree at a Time</p>
          <div className="mt-10">
            <p className="text-[#6D6D78] text-xl">Name</p>
            <input type="text" placeholder="Enter your name" className="border-2 border-solid w-full py-2 px-4 mt-4 rounded-2xl" />
          </div>
          <div className="mt-4">
            <p className="text-[#6D6D78] text-xl">Email</p>
            <input type="text" placeholder="Enter your email account" className="border-2 border-solid w-full py-2 px-4 mt-4 rounded-2xl" />
          </div>
          <div className="mt-4">
            <p className="text-[#6D6D78] text-xl">Why you want to volunteer</p>
            <textarea type="text" placeholder="Explain your motivations" className="border-2 border-solid w-full py-2 px-4 mt-4 rounded-2xl resize-y max-h-40" />
          </div>
          <div className='mt-6 flex flex-col'>
            <p className='text-[#6D6D78] text-xl'>Availability</p>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="w-4 h-4 rounded-full" />
              <span className="ml-4 font-regular text-xl">Monday</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input type="checkbox" className="w-4 h-4 rounded-full" />
              <span className="ml-4 font-regular text-xl">Tuesday</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input type="checkbox" className="w-4 h-4 rounded-full" />
              <span className="ml-4 font-regular text-xl">Wednesday</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input type="checkbox" className="w-4 h-4 rounded-full" />
              <span className="ml-4 font-regular text-xl">Thursday</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input type="checkbox" className="w-4 h-4 rounded-full" />
              <span className="ml-4 font-regular text-xl">Friday</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input type="checkbox" className="w-4 h-4 rounded-full" />
              <span className="ml-4 font-regular text-xl">Saturday</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input type="checkbox" className="w-4 h-4 rounded-full" />
              <span className="ml-4 font-regular text-xl">Sunday</span>
            </label>
          </div>
          <button className="bg-[#FFDFD6] border-2 border-solid rounded-3xl p-2 md:p-4 w-full mt-2 md:mt-4">
            <div className="flex flex-row justify-center items-center gap-2 md:gap-12">
              <p className="font-semibold text-base md:text-xl ">Sign Up</p>
            </div>
          </button>
        </div>
      </div>

      {/* Aside Kanan (Button) */}
      <aside className="md:w-1/5 p-4">
        <div>
          <p className="font-semibold text-xl md:text-2xl mb-4">What You'll Get</p>
          <ul className="list-disc ml-8">
            <li>Skill Development</li>
            <li>Networking Opportunities</li>
            <li>Statistic of Marking an Impact</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Volunteer;
