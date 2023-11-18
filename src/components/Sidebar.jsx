import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { GrGamepad } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-10 mt-5 text-gray-400 mx-0 font-Inter' >
      <div className='flex flex-row items-center justify-center text-2xl gap-2 '>
            <div> <GrGamepad size={32}/></div>
            <div className='text-white'>GbTrain</div>
            </div>
     

        <div className='mt-3 font-semibold text-[17px] flex flex-col gap-4 justify-start'>
          <div className='text-sm'>Menu</div>
            <div className='flex flex-row items-center  gap-2 cursor-pointer hover:bg-[#0f0e2d] hover:text-white p-2 rounded-lg' onClick={()=>{navigate('/')}}>
            <div><IoHomeOutline size={23}/></div>
            <div>Home</div>
            </div>

            <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-[#0f0e2d] hover:text-white p-2 rounded-lg'>
            <div><IoGameControllerOutline size={23}/></div>
            <div>MyGame</div>
            </div>

            <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-[#0f0e2d] hover:text-white p-2 rounded-lg'>
            <div><CiStar size={23}/></div>
            <div>Favourite</div>
            </div>
        </div>

        <div className='mt-3 font-semibold text-[17px] flex flex-col gap-4  justify-start'>
          <div className='text-sm'>Social</div>
          <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-[#0f0e2d] hover:text-white p-2 rounded-lg'>
            <div><IoChatboxOutline size={23}/></div>
            <div>Team Chat</div>
            </div>
            <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-[#0f0e2d] hover:text-white p-2 rounded-lg'>
            <div><IoIosPeople size={23}/></div>
            <div>Friends</div>
            </div>
            <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-[#0f0e2d] hover:text-white p-2 rounded-lg'>
            <div><SlCalender size={23}/></div>
            <div>New Released</div>
            </div>
        </div>
      </div>
  )
}

export default Sidebar