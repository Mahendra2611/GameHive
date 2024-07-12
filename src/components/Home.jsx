import React, { useContext } from 'react';
import bgimg from '../IMG/bg.png'; // Assuming this is the correct path to your background image
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate("/body")
  }
  return (
   <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
  <div className="text-center absolute top-1/4 w-full">
    <div className="inline-block bg-white bg-opacity-80 rounded-lg p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
        GUESS THE NUMBER GAME
      </h1>
    </div>
  </div>
  <div className="flex justify-center items-center mt-10">
    <button onClick={handleNavigation} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 text-lg sm:text-xl">
      Start The Game
    </button>
  </div>
</div>


  );
};

export default Home;