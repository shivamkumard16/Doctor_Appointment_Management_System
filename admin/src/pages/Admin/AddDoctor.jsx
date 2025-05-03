import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';

const AddDoctor = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { aToken, backendUrl } = useContext(AdminContext);

  async function onSubmitHandler(e) {
    e.preventDefault();
    try {
      if (!docImg) {
        toast.error('Doctor Image is not selected yet. Please select.')
        return;
      }

      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('about', about);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));
      //console log form data
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      console.log("token - ", aToken);
      setLoading(true);
      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } });
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName('');
        setEmail('');
        setPassword('');
        setExperience('1 Year');
        setFees('');
        setAbout('');
        setSpeciality('General physician');
        setDegree('');
        setAddress1('');
        setAddress2('');

      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }

  }


  return (
    <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <p className="text-xl font-semibold mb-6 text-center md:text-left">Add Doctor</p>
      <form onSubmit={onSubmitHandler}>
        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col gap-6 max-w-6xl mx-auto">
          {/* Upload Image */}
          <div className="flex  items-center gap-2">
            <label htmlFor="doc-img" className="cursor-pointer">
              <img src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" className={`w-16 h-16 sm:h-32 sm:w-32 object-contain   ${docImg ? 'border-primary border-2 rounded-full w-auto bg-black ' : ''}`} />
            </label>
            <input type="file" id="doc-img" hidden onChange={(e) => setDocImg(e.target.files[0])} />
            {!docImg && <p className="font-semibold text-center font-sm sm:text-lg sm:font-md  text-gray-500">Upload doctor <br /> picture</p>
            }          </div>

          {/* Grid Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Doctor's Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Doctor's Name" required className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Doctor's Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Doctor's Email" required className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Doctor's Password</p>
                <div className="relative">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Doctor's Password"
                    required
                    className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-primary"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-sm text-gray-600 cursor-pointer select-none  underline font-semibold"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>


              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Doctor's Experience</p>
                <select
                  onChange={(e) => setExperience(e.target.value)} value={experience} className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="1 Year">1 Year</option>
                  <option value="2 Year">2 Year</option>
                  <option value="3 Year">3 Year</option>
                  <option value="4 Year">4 Year</option>
                  <option value="5 Year">5 Year</option>
                  <option value="6 Year">6 Year</option>
                  <option value="7 Year">7 Year</option>
                  <option value="8 Year">8 Year</option>
                  <option value="9 Year">9 Year</option>
                  <option value="10 Year">10 Year</option>
                </select>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Fees</p>
                <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Fees" required className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Speciality</p>
                <select
                  onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="General physician">General physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                </select>

              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Education</p>
                <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder="Doctor's education" required className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Address</p>
                <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address 1" required className="w-full border rounded-lg px-4 py-2 mb-2 focus:outline-primary" />
                <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address 2" required className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
              </div>
            </div>
          </div>

          {/* About Doctor */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">About Doctor</p>
            <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Write about doctor" rows={5} required className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button type="submit" disabled={loading} className={` bg-primary text-white px-6 py-2 rounded-full transition-all duration-500  hover:bg-primary active:scale-125 ${loading ? 'animate-blink bg-blue-400 text-red-600' : ''}`}>
              {loading ? 'Loading...' : 'Add Doctor'}
            </button>

          </div>
        </div>
      </form>
    </div>

  )
}

export default AddDoctor