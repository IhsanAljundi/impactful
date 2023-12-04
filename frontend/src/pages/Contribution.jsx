import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contribution = () => {
  const [followedCampaigns, setFollowedCampaigns] = useState([]);

  useEffect(() => {
    //fungsi mengambil campaign yang telah diikuti oleh user
    const fetchFollowedCampaigns = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/contributions/followed-campaigns`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setFollowedCampaigns([...data.donationCampaigns, ...data.volunteerCampaigns]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFollowedCampaigns();
  }, []);

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

        <div className="flex flex-wrap gap-4 md:gap-20">
          {/* Hasil Kontribusi */}
          {followedCampaigns.map((campaign, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8">
              <Link to={`/campaign/${campaign._id}`}>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  {campaign.isDonation && <p className="text-[#6D6D78] text-base mb-1">Donator</p>}
                  {campaign.isVolunteer && <p className="text-[#6D6D78] text-base mb-1">Volunteer</p>}

                  <img src={campaign.coverImage} alt={campaign.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                    <p className="text-gray-600">
                      {campaign.startDate} - {campaign.endDate}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
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
