import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import vdo from '../../assets/SaveTube.App-FREE Fortnite Cinematic Intro (No Text) (4K) _ Free Fortnite Intro No Text-(480p).mp4'

const About = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-5xl text-white  mb-4 font-cursive">
        <Typist cursor={{ show: false }} infinite>
          Welcome to Our World!
        </Typist>
      </h1>
      <div className="w-[70%] mb-8">
        {/* Replace the video source with your actual video URL */}
        <video autoPlay controls loop  muted className="w-full rounded-lg shadow-md">
          <source
            src={vdo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <h2 className="text-3xl font-semibold text-gray-200 mb-2">
        Your Gateway to Gaming Excitement
      </h2>
      <p className="text-lg text-gray-400 mb-8 font-semibold">
        We are passionate about gaming and dedicated to providing an immersive and thrilling gaming experience. Join us on an epic journey through fantastical worlds, epic battles, and unforgettable adventures. Our community is built on the love of games, and we strive to create an environment where every gamer feels at home. Whether you're a casual player or a hardcore gamer, we have something special for you. Get ready to explore, compete, and conquer!
      </p>
    </div>
  );
};

export default About;


