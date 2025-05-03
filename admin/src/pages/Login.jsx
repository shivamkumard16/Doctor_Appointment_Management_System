import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setSate] = useState('Admin');
  const { setAToken, backendUrl } = useContext(AdminContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  async function onSubmitHandler(e) {
    e.preventDefault();
    try {
      console.log(`backend = ${backendUrl}/api/admin/login`);
      console.log("state = " + state);

      if (state == 'Admin') {
        console.log("backnde url = ", backendUrl)
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password })
        if (data.success) {
          console.log(data.token);
          localStorage.setItem('aToken', data.token);
          toast.success(data.message);
          console.log(data.message);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      }

    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
        <p className="text-2xl font-semibold mb-6 text-center">
          <span className="capitalize text-primary">{state}</span> Login
        </p>

        <div className="mb-4">
          <p className="mb-1 text-sm text-gray-700">Email</p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-6">
          <p className="mb-1 text-sm text-gray-700">Password</p>
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-primary underline"
              onClick={() => setShow(!show)}
            >
              {show ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>

        <button
          type='submit'
          className="w-full bg-primary text-white py-2 mb-3 rounded-md hover:bg-primary/90 transition duration-300"
        >
          Login
        </button>
        {
          state === 'Admin'
            ?
            <p className='ml-2'>Doctor Login <span className='text-primary cursor-pointer underline' onClick={() => setSate('Doctor')}>Click here</span></p>
            :
            <p className='ml-2'>Admin Login <span className='text-primary cursor-pointer underline' onClick={() => setSate('Admin')}>Click here</span></p>
        }
      </div>
    </form>
  );
};

export default Login;
