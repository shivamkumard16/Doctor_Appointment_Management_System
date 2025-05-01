import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((items, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${items._id}`);
              window.scrollTo(0, 0);
            }}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 bg-white"
          >
            <img
              className="bg-blue-50 w-full h-48 object-cover object-top"
              src={items.image}
              alt={items.name}
            />
            <div className="p-4 space-y-1">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>
              <p className="text-gray-900 text-lg font-medium">{items.name}</p>
              <p className="text-gray-600 text-sm">{items.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-100 text-gray-700 px-12 py-3 mt-10 rounded-full hover:bg-blue-200 transition-all"
        onClick={() => {
          navigate('/doctors');
          window.scrollTo(0, 0);
        }}
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;
