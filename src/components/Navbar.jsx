import React  from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate(); 
   return (
    <div className='flex flex-row justify-between mx-10 my-auto h-full'>
      {/* Left section with logo, greeting, and input */}
      <div className='flex flex-row items-center gap-5'>
        <div className='text-xl font-bold'><IoPersonCircleSharp size={50} color='white' /></div>
        <div className='text-gray-400 text-xl font-semibold'>Hello, <span className='text-white font-bold'>Shivanshu</span></div>
        <div className="relative">
          <CiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" size={27} />
          <input
            type="text"
            className="rounded-xl bg-inherit border-2 border-purple-900 pl-10 pr-8 py-3 focus:outline-none focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <div className='text-xl font-semibold text-gray-300 border-2 border-purple-800 px-3 py-2 rounded-lg hover:cursor-pointer' onClick={()=>{navigate('/about')}}>About</div>
      </div>

      {/* Right section with buttons */}
      <div className='flex gap-7 h-[50%] my-auto'>
        <button className='border-2 border-purple-700  text-gray-500 hover:text-white px-4 py-1 rounded-2xl font-bold text-md'>Start Stream</button>
        <button className=' border-2 border-purple-700 px-4 py-2 rounded-2xl text-gray-500 hover:text-white'>
        <FaRegBell size={26} />
        </button>
        <button className='text-gray-500 border-2 border-purple-700 px-4 py-2  rounded-2xl font-bold hover:text-white'><LuGlobe size={26} /></button>
      </div>
    </div>
  );
};

export default Navbar;
