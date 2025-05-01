import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets';
const MyAppointments = () => {

  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b text-lg sm:text-xl'>My Appointment</p>

      <div>
        {
          doctors.slice(0, 2).map((item, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-6 py-4 border-b' key={index}>
              <div>
                <img 
                  className='w-32 sm:w-40 md:w-48 bg-indigo-50 object-cover transition duration-300 ease-in-out transform hover:scale-105 rounded-md' 
                  src={item.image} 
                  alt="doctor image is not loaded yet" 
                />
              </div>
              <div className='flex flex-col sm:flex-row sm:justify-between text-sm text-zinc-600 gap-2'>
                <div className='space-y-1'>
                  <p className='text-neutral-800 font-semibold text-base sm:text-lg'>{item.name}</p>
                  <p>{item.speciality}</p>
                  <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                  <p className='text-sm'>{item.address.line1}</p>
                  <p className='text-sm'>{item.address.line2}</p>
                  <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25, July, 2024 |  8:30 PM</p>
                </div>
                <div></div>
                <div className='flex flex-col justify-end gap-2 mt-2 sm:mt-0'>
                  <button className='text-sm hover:text-white text-center py-2 px-4 hover:bg-primary border rounded sm:min-w-48 transition duration-500 ease-in-out transform hover:scale-x-95'>
                    Pay Online
                  </button>
                  <button className='text-sm hover:text-white text-center py-2 px-4 hover:bg-red-700 border rounded sm:min-w-48 transition duration-500 ease-in-out transform hover:scale-x-95'>
                    Cancel Appointment
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments
