import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import img from '../assets/pin.ico'

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '', image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    await axios.post('https://test-pinterest.onrender.com/register', data, { withCredentials: true });
    setFormData({ username: '', email: '', password: '', image: null });
    navigate('/login');
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <nav className="w-full bg-white p-2 shadow-md">
        <div className="flex justify-between items-center px-5">
          <button onClick={() => navigate("/home")} className="text-3xl font-extrabold flex items-center space-x-3">
            <img src={img} alt="Pinterest Icon" className="w-12 h-12 rounded-full shadow-md" />
            <span className="tracking-wide text-gray-800">Phinix</span>
          </button>
          <button type="button" onClick={() => navigate('/login')} className="bg-gray-800 hover:bg-gray-700 font-bold text-white px-3 py-2 rounded"> Login</button>
        </div>
      </nav>

      <div className="flex items-start justify-center pt-16">
        <div className="w-full max-w-xs bg-white border border-gray-500 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">Join Phinix</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm sm:text-sm font-semibold text-gray-800 mb-1">Full Name</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required placeholder="Enter your name" className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-400 rounded-md sm:rounded-lg outline-none focus:ring-1 focus:ring-gray-600" />
            </div>

            <div>
              <label className="block text-sm sm:text-sm font-semibold text-gray-800 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-400 rounded-md sm:rounded-lg outline-none focus:ring-1 focus:ring-gray-600" />
            </div>

            <div>
              <label className="block text-sm sm:text-sm font-semibold text-gray-800 mb-1">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Enter password" className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-400 rounded-md sm:rounded-lg outline-none focus:ring-1 focus:ring-gray-600" />
            </div>

            <div>
              <label className="block text-sm sm:text-sm font-semibold text-gray-800 mb-1">Upload Image</label>
              <input type="file" name="image" onChange={handleChange} required className="w-full text-xs sm:text-sm border border-gray-400 rounded-md sm:rounded-lg p-1.5 sm:p-2.5" />
            </div>

            <button type="submit" className="w-full bg-gray-900 text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-md sm:rounded-lg hover:bg-gray-700">Register</button>
          </form>
        </div>
      </div>


    </div >
  )
}

export default Register