import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
            {/*------------Left Side---------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-white space-y-2'>
                    <p className='text-xl font-semibold'>Book Appointment</p>
                    <p className='text-2xl font-bold'>With 100+ Trusted Doctors</p>
                </div>
                <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='mt-6 px-5 py-2  bg-white text-primary font-semibold rounded-full shadow-md hover:bg-gray-100  translate-y-2 hover:scale-125 duration-500  active:bg-black active:text-white transition-all'>
                    Create Account
                </button>
            </div>

            {/* ---------Right Side------------ */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img
                    className='w-full absolute bottom-0 right-0 max-w-md'
                    src={assets.appointment_img}
                    alt="Doctor appointment illustration"
                />
            </div>
        </div>
    )
}

export default Banner
