import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Dr. Ashish Kumar Pandey",
    image: assets.profile_pic,
    email: 'ashish@gmail.com',
    phone: '+91 8258967455',
    address: {
      line1: 'delight cenama , dehri on sone , bihar',
      line2: 'local zone ranch , jharkhand ',
    },
    gender: 'male',
    dob: '1999-01-01'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 font-sans text-gray-800 m-auto">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={userData.image}
          alt="Profile"
          className="w-56 h-72 rounded-md object-cover border shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-xl font-semibold">{userData.name}</h1>
          <hr className="my-2" />

          <h2 className="uppercase text-xs text-gray-600 mb-2">Contact Information</h2>
          <div className="space-y-2 mb-6">
            <p><strong>Email Id:</strong> <span className="text-blue-600">{userData.email}</span></p>
            <p>
              <strong>Phone:</strong>{' '}
              {isEdit ? (
                <input
                  className="border rounded px-2 py-1 w-full max-w-xs"
                  type="text"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
              ) : (
                <span>{userData.phone}</span>
              )}
            </p>

            <p><strong>Address:</strong></p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  placeholder="Line1 update"
                  className="border rounded px-2 py-1 w-full"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: { ...userData.address, line1: e.target.value }
                    })
                  }
                />
                <input
                  placeholder="Line2 update"
                  className="border rounded px-2 py-1 w-full"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: { ...userData.address, line2: e.target.value }
                    })
                  }
                />
              </div>
            ) : (
              <p className="ml-4">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>

          <h2 className="uppercase text-xs text-gray-600 mb-2">Basic Information</h2>
          <div className="space-y-2 mb-6">
            <p><strong>Gender:</strong>{' '}
              {isEdit ? (
                <select
                  className="border rounded px-2 py-1"
                  value={userData.gender}
                  onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              ) : (
                userData.gender
              )}
            </p>
            <p>
              <strong>Birthday:</strong>{' '}
              {isEdit ? (
                <input
                  type="date"
                  className="border rounded px-2 py-1"
                  value={userData.dob}
                  onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
                />
              ) : (
                new Date(userData.dob).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })
              )}
            </p>
          </div>

          <div className="flex gap-4">
            {isEdit ? (
              <button
                className="border border-blue-500 translate-all hover:scale-75 translate-x-2 duration-700  px-4 py-1 rounded hover:bg-blue-200"
                onClick={() => setIsEdit(false)}
              >
                Save Information
              </button>
            ) : (
              <button
                className="border border-blue-500 translate-all hover:scale-75 translate-x-2 duration-700  px-4 py-1 rounded hover:bg-blue-200"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
