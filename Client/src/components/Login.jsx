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
    await axios.post('https://test-pinterest.onrender.com/login', formData, { withCredentials: true });
    setFormData({ email: '', password: '' });
    navigate('/home');
  }
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <nav className="w-full bg-white p-2 shadow-md">
        <div className="flex justify-between items-center px-5">
          <a href="#" className="text-3xl font-extrabold flex items-center space-x-3">
            <img src={img} alt="Pinterest Icon" className="w-12 h-12 rounded-full shadow-md" />
            <span className="tracking-wide text-gray-800">Phinix</span>
          </a>
          <button type="button" onClick={() => navigate('/')} className="bg-gray-800 hover:bg-gray-700 font-bold text-white px-3 py-2 rounded"> Register</button>
        </div>
      </nav>

      <div className="flex items-start justify-center pt-20">
        <div className="w-full max-w-xs bg-white border border-gray-500 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">Join Phinix</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm sm:text-sm font-semibold text-gray-800 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-500 rounded-md sm:rounded-lg outline-none focus:ring-1 focus:ring-gray-600" />
            </div>

            <div>
              <label className="block text-sm sm:text-sm font-semibold text-gray-800 mb-1">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Enter password" className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-500 rounded-md sm:rounded-lg outline-none focus:ring-1 focus:ring-gray-600" />
            </div>

            <button type="submit"
              className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login