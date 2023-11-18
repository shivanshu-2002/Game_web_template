import React from 'react';

const Card = ({ items }) => {
  const { name, usersWatchingLive, image, status } = items;

  return (
    <div className='bg-blue  rounded-lg shadow-md flex justify-between'>
      <div className='flex items-center'>
        <div className='w-16 h-14  mr-4'>
          {/* Assuming you want to display the image, you can use an <img> tag here */}
          <img src={image} alt={name} className='w-full h-full object-cover rounded-xl' />
        </div>
        <div>
          <div className='font-semibold text-lg text-gray-200'>{name}</div>
          <div className='text-sm text-gray-400 font-semibold'>Watching: {usersWatchingLive}</div>
        </div>
      </div>
      <div className='p-2 py-1 border-2 flex  justify-center border-purple-800 w-[100px] rounded-lg text-gray-400  text-center font-bold hover:text-white hover:bg-[#191439] items-center'>{status}</div>
    </div>
  );
};

export default Card;
