import React, { useEffect } from 'react'
import GuessNumber from './GuessNumber'
import { GlobalContext } from '../utils/ContextAPI';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG3 from "../IMG/back22.png"
import LeaderBoard from './LeaderBoard';
const Body = () => {
  const {score} = useContext(GlobalContext);
  // console.log("body called")
  const navigate = useNavigate();
  const handleScoreCard = ()=>{
    navigate("/leaderboard")
   }
  //  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
  return (
    <div className='w-[100%] h-screen ' style={{backgroundImage:`url(${IMG3})`,backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat:"no-repeat"}}>
      <GuessNumber/>
      <div>
      <div className='p-[3px] relative float-right  my-[35%] sm:my-[2%] mx-[2%] sm:mx-[7%]  py-2 px-2 rounded-lg font-semibold text-sm sm:text-3xl  '>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
  Score-{score}
  </div>
      </div>

<button onClick={handleScoreCard}  className="p-[3px] relative 
float-left  my-[35%] cursor-pointer sm:my-[2%] mx-[2%] sm:mx-[7%] py-2 px-2 rounded-lg font-semibold text-sm sm:text-3xl  '>
        LEADERBOARD" >
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
  LEADERBOARD
  </div>
</button>
      </div>
      
    </div>
  )
}

export default Body