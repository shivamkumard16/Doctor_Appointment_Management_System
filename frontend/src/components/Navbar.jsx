import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-600'>
            <img onClick={() => navigate('/')} src={assets.logo} alt="Logo of website is not loaded" className='w-44 cursor-pointer' />

            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token ? (
                        <div className='flex items-center gap-2 cursor-pointer relative group'>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="User's profile pic is not loaded" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown_icon not loaded" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden z-20 group-hover:block'>
                                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                    <p onClick={() => navigate('my-profile')} className="text-black cursor-pointer border-b-2 border-b-transparent hover:border-b-green-500 hover:text-red-600 hover:font-medium transition-all duration-200">
                                        My Profile
                                    </p>
                                    <p onClick={() => navigate('my-appointments')} className="text-black cursor-pointer border-b-2 border-b-transparent hover:border-b-green-500 hover:text-red-600 hover:font-medium transition-all duration-200">
                                        My Appointments
                                    </p>
                                    <p onClick={() => setToken(false)} className="text-black cursor-pointer border-b-2 border-b-transparent hover:border-b-green-500 hover:text-red-600 hover:font-medium transition-all duration-200">
                                        Logout
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
                    )
                }

                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt='menu icon not loaded' />

                {/* Mobile menu */}
                <div className={`fixed top-0 bottom-0 right-0 z-20 bg-white transition-all duration-300 ${showMenu ? 'w-full' : 'w-0 overflow-hidden'}`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="Logo" />
                        <img className='w-7 cursor-pointer' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Cross" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink className='rounded px-4 py-2 inline-block hover:cursor-pointer hover:text-red-600 transition duration-700' onClick={() => setShowMenu(false)} to={'/'}> <p>HOME</p> </NavLink>
                        <NavLink className='rounded px-4 py-2 inline-block hover:cursor-pointer hover:text-red-600 transition duration-700' onClick={() => setShowMenu(false)} to='/doctors'> <p>ALL DOCTORS</p> </NavLink>
                        <NavLink className='rounded px-4 py-2 inline-block hover:cursor-pointer hover:text-red-600 transition duration-700' onClick={() => setShowMenu(false)} to={'/about'}> <p>ABOUT</p></NavLink>
                        <NavLink className='rounded px-4 py-2 inline-block hover:cursor-pointer hover:text-red-600 transition duration-700' onClick={() => setShowMenu(false)} to={'/contact'}> <p>CONTACT</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;