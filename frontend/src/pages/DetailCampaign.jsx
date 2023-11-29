import React from 'react';
import Navbar from '../components/Navbar';
import { FaAngleRight } from 'react-icons/fa';
import { IoChevronBackOutline } from 'react-icons/io5';
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";

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
          <img src="image2.png" className="rounded-3xl mt-5" />
          <p className="text-[#6D6D78] mt-4">09 September 2023 - 15 December 2023</p>
          <p className="font-bold text-3xl">Reforest to Reset: A Greenpeace Campaign to Heal Our Planer One Tree at a Time</p>
          <p className="text-[#6D6D78] text-xl mt-4">
            Forests are the lungs of the Earth. They absorb carbon dioxide, refresh the air with oxygen, and provide a home to countless wildlife. Yet, every year, we lose 18.7 million acres of forests globally—that's 27 soccer fields every
            minute! 
            <br />
            <br />
            Greenpeace invites you to join hands in our groundbreaking campaign Reforest to Reset, aimed at reversing deforestation and revitalizing our planet's ecosystems. We believe that when we heal the Earth, we heal ourselves.
            We invite you to be a part of this journey, as a volunteer or donor.
          </p>
          <p className='font-bold text-2xl mt-5 mb-2'>Statistics</p>
          <div className='flex flex-row justify-start gap-8 border-2 border-solid p-7 rounded-3xl mb-2'>
            <CiUser className='w-20 h-20 bg-[#52C3FF] rounded-full p-2'/>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-xl'> 5/12 Volunteers</p>
                <p className='text-xl text-[#6D6D78]'>Current Volunteers / Target Volunteers</p>
            </div>
          </div>
          <div className='flex flex-row justify-start gap-8 border-2 border-solid p-7 rounded-3xl'>
            <AiOutlineDollar className='w-20 h-20 bg-[#BCFF67] rounded-full p-2'/>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-xl'> Rp 5.234.000 / Rp 24.000.000</p>
                <p className='text-xl text-[#6D6D78]'>Current Volunteers / Target Volunteers</p>
            </div>
          </div>
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
        <Link to="/Donate">
          <button className="bg-[#FFDFD6] border-2 border-solid rounded-3xl p-2 md:p-4 w-full mt-2 md:mt-4">
            <div className="flex flex-row justify-center items-center gap-2 md:gap-12">
              <p className="font-semibold text-base md:text-xl ">Donation</p>
              <FaAngleRight />
            </div>
          </button>
        </Link>
        <div className='border-t-4 rounded-3xl border-gray-300 my-8'></div>
        <p className='text-2xl font-semibold'>Organization Detail</p>
        <div className='flex flex-col items-center mt-8'>
          <img className='rounded-full border-2 border-solid w-64 h-64' src='image2.png'/>
          <p className='font-semibold text-2xl mt-2'>Greenpeace</p>
          <p className=' text-[#6D6D78] mt-1 text-xl'>info@greenpeace.org</p>
          <p className=' text-black mt-4 text-xl text-center'>Greenpeace exist because this fragile Earth deserves a voice. It needs solutions. It needs change. It needs action</p>
        </div>
        <p className='text-2xl font-semibold text-center mt-8'>Previous Campaigns</p>
      </aside>
    </div>
  );
};

export default DetailCampaign;
