import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className="relative bg-primary px-6 py-10 md:py-16 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center">
            
            {/* Left Section */}
            <div className="md:w-1/2 flex flex-col justify-center gap-6 z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-snug">
                    Book Appointment <br /> With Trusted Doctors
                </h1>

                <div className="flex items-center gap-4 text-white text-sm font-light">
                    <img className="w-20" src={assets.group_profiles} alt="Group Profiles" />
                    <p>
                        Simply browse through our extensive list of trusted doctors,
                        <br className="hidden sm:block" />
                        schedule your appointment hassle-free.
                    </p>
                </div>

                <a href="#speciality" className="flex items-center gap-2 bg-white px-6 py-2.5 rounded-full text-gray-700 text-sm font-medium w-fit hover:scale-105 transition-all duration-300">
                    Book appointment <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
                </a>
            </div>

            {/* Right Section - Doctor Image */}
            <div className="md:w-1/2 mt-8 md:mt-0">
                <img src={assets.header_img} alt="Doctors" className="w-full h-auto object-contain" />
            </div>
        </div>
    );
};

export default Header;
