import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(false);

  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      applyFilter()
      setLoading(false);
    }, 2000); // Simulating a network delay
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-700'>Browse through the doctors specialists.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
        <button
          onClick={() => setFilter((prev) => !prev)}
          className={`px-4 py-2 rounded sm:hidden border-2 p-3 rounded-lg ${filter ? 'bg-primary  text-white ' : 'bg-slate-100 text-black'
            }`}
        >
          Filter
        </button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${filter ? 'flex' : 'hidden sm:flex'} `}>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer hover:text-md  hover:bg-black hover:text-white font-serif translate-y hover:scale-105 outline-none ${speciality === 'General physician' ? 'bg-indigo-200 text-black' : ''}`} onClick={() => { speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician') }}>General Physician</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer hover:text-md  hover:bg-black hover:text-white font-serif translate-y hover:scale-105 outline-none ${speciality === 'Gynecologist' ? 'bg-indigo-200 text-black' : ''}`} onClick={() => { speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist') }}>Gynecologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer hover:text-md  hover:bg-black hover:text-white font-serif translate-y hover:scale-105 outline-none ${speciality === 'Dermatologist' ? 'bg-indigo-200 text-black' : ''}`} onClick={() => { speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist') }}>Dermatologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer hover:text-md  hover:bg-black hover:text-white font-serif translate-y hover:scale-105 outline-none ${speciality === 'Pediatricians' ? 'bg-indigo-200 text-black' : ''}`} onClick={() => { speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians') }}>Pediatricians</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer hover:text-md  hover:bg-black hover:text-white font-serif translate-y hover:scale-105 outline-none ${speciality === 'Neurologist' ? 'bg-indigo-200 text-black' : ''}`} onClick={() => { speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist') }}>Neurologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer hover:text-md  hover:bg-black hover:text-white font-serif translate-y hover:scale-105 outline-none ${speciality === 'Gastroenterologist' ? 'bg-indigo-200 text-black' : ''}`} onClick={() => { speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist') }}>Gastroenterologist</p>
        </div>

        {/* Doctor Cards */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>

          {loading ? (
            // Loading state with blinking text
            <div className='col-span-full text-center'>
              <h1 className='text-lg font-medium animate-pulse text-gray-700'>
                <span className="text-red-500 animate-blink">Loading...</span>
              </h1>
            </div>
          ) : (
            filterDoc.map((items, index) => (
              <div onClick={() => navigate(`/appointment/${items._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>

                <img className='bg-blue-50' src={items.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium' >{items.name}</p>
                  <p className='text-gray-600 text-sm'>{items.speciality}</p>
                </div>
              </div>
            ))
          )
          }


        </div>

      </div>

    </div>
  )
}

export default Doctors;
