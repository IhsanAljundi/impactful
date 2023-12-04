import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch campaigns when the component mounts
 useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/campaigns`); 

        if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();  
        setCampaigns(data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleInputChange = () => {
    setSearchTerm(e.target.value);
  };

  const filteredCampaigns = campaigns.filter((campaign) => campaign.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex flex-col md:flex-row p-12">
      <div className="md:w-1/5">
        <Navbar />
      </div>

      {/* Konten Utama */}
      <div className="md:w-4/5 py-4 px-24">
        <div className="flex flex-row justify-start items-center mb-10 gap-4">
          <Link to="/Contribution">
            <button className="p-2 border-2 border-solid  rounded-full">
              <IoChevronBackOutline className="w-6 h-6" />
            </button>
          </Link>
          <p className="font-semibold text-2xl md:text-4xl mb-1">Find a Campaign</p>
        </div>

        <div className="relative mb-12">
          <input type="text" placeholder="Search for campaigns" className="text-xl border p-3 pl-12 rounded-2xl w-full" value={searchTerm} onChange={handleInputChange} />
          <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <IoSearchOutline className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-20">
          {filteredCampaigns.map((campaign, index) => (
            <div key={index} className="rounded-t-lg rounded-b-lg w-72">
              <img src={campaign.coverImage} alt={campaign.title} className="w-full h-48" />
              <p className="text-[#6D6D78] text-base mb-3">{campaign.startDate}</p>
              <h3 className="font-bold text-xl mb-2">{campaign.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaign;
