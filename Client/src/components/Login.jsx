import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/pin.ico'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/login', formData, { withCredentials: true });
    setFormData({ username: '', email: '' });
    navigate('/home');
  }


  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">

      {/* Navbar */}
      <nav className="w-full bg-white p-3 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-5">
          <a href="#" className="text-2xl font-extrabold flex items-center space-x-3">
            <img
              src={img}
              alt="Pinterest Icon"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <span className="tracking-wide text-gray-800">Phinix</span>
          </a>

          <Link
            to="/"
            className="bg-gray-900 hover:bg-gray-700 font-bold text-white px-4 py-2 rounded-lg transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Center Section */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-300">

          <h2 className="text-gray-900 text-3xl font-extrabold text-center mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-gray-700 outline-none"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                value={formData.email}
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-gray-700 outline-none"
                placeholder="Enter password"
                onChange={handleChange}
                required
                value={formData.password}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Login
            </button>

          </form>
        </div>
      </div>
    </div>

  )
}

export default Login