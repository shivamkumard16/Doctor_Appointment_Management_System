import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function onSubmitHandler(e) {
    e.preventDefault();
    // Handle form logic here
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-md mt-20"
    >
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-sm text-center tecd f  xt-gray-500 mb-6">
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
        </p>

        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-primary text-white rounded-md hover:bg-primary/90 transition duration-300"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-sm text-center text-gray-600 mt-5">
          {state === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-primary font-medium cursor-pointer hover:underline"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-primary font-medium cursor-pointer hover:underline"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  )
}

export default Login
