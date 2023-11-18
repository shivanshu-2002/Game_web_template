import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Corousel = () => {
  // Set the maxHeight of the images
  const imageStyle = {
    maxHeight: '20%', // Adjust this value to control the image size
    borderRadius:'40px',
    border:'1px solid black' ,
  };

  return (
    <div className='w-[85%]  rounded-2xl'>
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} stopOnHover={false} showStatus={false}>
        <div>
          <img src={`https://wallpapercave.com/wp/wp4583303.png`} alt="Avatar 1" style={imageStyle} height={'100px'} />
          
        </div>
        <div>
          <img src={`https://wallpaperaccess.com/full/4739220.jpg`} alt="Avatar 3" style={imageStyle} />
        </div>
        <div>
          <img src={`https://i.ytimg.com/vi/gCfITVsBlLw/maxresdefault.jpg`} alt="Avatar 3" style={imageStyle} />
          
        </div>
      </Carousel>
    </div>
  );
};

export default Corousel;
