import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Volunteer = () => {
  const [volunteerData, setVolunteerData] = useState({
    name: '',
    email: '',
    reason: '',
    availability: '', // Changed to string
  });

  const handleCheckboxChange = (day) => {
    const currentAvailability = volunteerData.availability.split(', ');
    const updatedAvailability = currentAvailability.includes(day) ? currentAvailability.filter((d) => d !== day) : [...currentAvailability, day];
    setVolunteerData({
      ...volunteerData,
      availability: updatedAvailability.join(', '),
    });
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_HOST}/volunteer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(volunteerData),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('Volunteer created successfully:', responseData);
        // Handle success, e.g., show a success message, redirect, etc.
      } else {
        console.error('Failed to create volunteer:', responseData.message);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error creating volunteer:', error);
      // Handle unexpected errors
    }
  };

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
          <div className="mt-6 flex flex-col">
            <p className="text-[#6D6D78] text-xl">Availability</p>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <label key={day} className="inline-flex items-center mt-3">
                <input type="checkbox" className="w-4 h-4 rounded-full" checked={volunteerData.availability.includes(day)} onChange={() => handleCheckboxChange(day)} />
                <span className="ml-4 font-regular text-xl">{day}</span>
              </label>
            ))}
          </div>
          <button className="bg-[#FFDFD6] border-2 border-solid rounded-3xl p-2 md:p-4 w-full mt-2 md:mt-4" onClick={handleSignUp}>
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
