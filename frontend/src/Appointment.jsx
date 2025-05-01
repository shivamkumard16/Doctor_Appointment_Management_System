import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { assets } from './assets/assets';
import RelatedDoctors from './components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, loading, setLoading, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();


    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endtime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => ([...prev, timeSlots]));
    }

  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchDocInfo();
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);



  useEffect(()=>{
    console.log("docSlots-----------\n",docSlots);
  },[docSlots])

  return (
    <div>
      {loading ? (
        <div className="col-span-full text-center">
          <h1 className="text-lg font-medium animate-pulse text-gray-700">
            <span className="text-red-500 animate-blink">Loading...</span>
          </h1>
        </div>
      ) : (
        docInfo && (
          <div>
            {/* Doctor Details */}
            <div className="flex flex-col sm:flex-row gap-6 items-start px-4 sm:px-10 mt-10">
              <img className="bg-blue-100 w-full sm:max-w-60 rounded-xl" src={docInfo.image} alt={docInfo.name} />
              <div className="flex-1 bg-white shadow-md rounded-xl p-6 mt-[-60px] sm:mt-0">
                <p className="text-xl font-semibold flex items-center gap-2 text-gray-800">
                  {docInfo.name}
                  <img className="w-5" src={assets.verified_icon} alt="verified" />
                </p>
                <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                  <p>
                    {docInfo.degree} - {docInfo.speciality}
                  </p>
                  <span className="px-2 py-0.5 border text-xs rounded-full">{docInfo.experience}</span>
                </div>
                <div className="mt-3">
                  <p className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    About <img src={assets.info_icon} className="w-4" alt="info" />
                  </p>
                  <p className="text-sm text-gray-600 mt-1 max-w-2xl">{docInfo.about}</p>
                </div>
                <p className="text-sm text-gray-700 font-medium mt-3">
                  Appointment Fee:{' '}
                  <span className="text-gray-900">
                    {currencySymbol}
                    {docInfo.fees}
                  </span>
                </p>
              </div>
            </div>

            {/* Booking Slots */}
            <div className="px-4 sm:px-10 mt-10 ">
              <p className="font-semibold text-lg text-gray-800 mb-3">Booking Slots</p>
              <div className="flex gap-3 overflow-x-auto pb-3">
                {docSlots.map((day, index) => (
                  <div
                    onClick={() => setSlotIndex(index)}
                    key={index}
                    className={`text-center py-4 px-3 min-w-[64px] rounded-lg cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-200 text-gray-800'
                      }`}
                  >
                    <p className="text-sm font-medium">{day[0] && daysOfWeek[day[0].datetime.getDay()]}</p>
                    <p className="text-xs">{day[0] && day[0].datetime.getDate()}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 overflow-x-auto mt-4">
                {docSlots[slotIndex]?.map((slot, i) => (
                  <p
                    onClick={() => setSlotTime(slot.time)}
                    key={i}
                    className={`text-sm px-4 py-2 rounded-full cursor-pointer whitespace-nowrap ${slot.time === slotTime
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-500 border border-gray-300'
                      }`}
                  >
                    {slot.time}
                  </p>
                ))}
              </div>

              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-8 py-3 rounded-full mt-6">
                Book an Appointment
              </button>
            </div>

            {/* Related Doctors */}
            <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
          </div>
        )
      )}
    </div>
  );
};

export default Appointment;
