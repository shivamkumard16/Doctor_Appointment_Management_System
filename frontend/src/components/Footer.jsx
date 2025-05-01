import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='px-4 md:mx-10'>
            {/* Main Grid Section */}
            <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-gray-700'>
                
                {/* Left Section */}
                <div>
                    <img src={assets.logo} alt="logo" className='mb-5 w-32 sm:w-40' />
                    <p className='leading-6 max-w-full sm:max-w-[24rem]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* Center Section */}
                <div>
                    <p className='text-xl font-semibold text-black mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='cursor-pointer hover:text-black transition'>Home</li>
                        <li className='cursor-pointer hover:text-black transition'>About us</li>
                        <li className='cursor-pointer hover:text-black transition'>Delivery</li>
                        <li className='cursor-pointer hover:text-black transition'>Privacy policy</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <p className='text-xl font-semibold text-black mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='cursor-pointer hover:text-black transition'>
                            <a href='tel:+917492029458'>+91 749202948</a>
                        </li>
                        <li className='cursor-pointer hover:text-black transition'>
                            <a href='mailto:shivamkumard16@gmail.com'>shivamkumard16@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='border-t border-gray-300 py-5 text-sm text-center text-black'>
                <p>Copyright 2025 © Greatstack.dev – All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
