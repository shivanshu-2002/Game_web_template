import React from 'react';

const Card2 = ({ items }) => {
  return (
    <div className="rounded-3xl shadow-md flex justify-center items-center m-4 text-center">
      <div className="flex flex-col items-center gap-2 w-full">
        <img
          src={items.imagelink}
          alt={items.name}
          className="w-full h-[170px] object-cover rounded-xl"
        />
        <div className="text-left w-full">
          <h2 className="text-lg text-white font-semibold mb-1">{items.name}</h2>
          <p className="text-sm text-gray-400 font-semibold">{items.followers} Followers</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
