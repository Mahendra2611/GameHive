import React, { useContext, useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from '../component/firebase';
import { GlobalContext } from '../utils/ContextAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const LeaderBoard = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [data, setData] = useState([]);
  // console.log("userEmail " + userEmail);
  const navigate = useNavigate();
 const handleNavigation = ()=>{
navigate("/home")
 }
  const readData = async () => {

    const q = query(collection(db, "Users"), orderBy("score", "desc"));
    
    const arr = [];
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        arr.push(doc.data());
      });
    }
    catch (error) {
      if (error.message.includes('Failed to get document because the client is offline') ||error.message.includes('net::ERR_INTERNET_DISCONNECTED')) {
        // console.log(error.message);
        toast.error("No Internet Connection", {
          position: "bottom-center",
          autoClose: 2000,
        })
      } else {
        // console.log(error.message);
        toast.error("Something Went Wrong", {
          position: "bottom-center",
          autoClose: 2000,
        })
  };
  }
    setData(arr);
    // console.log(arr);
  };
  
  useEffect(() => {
    // console.log("add called");
    readData();
  }, []);

  return (
    
    <div className='bg-blue-300 w-full h-full flex flex-col'>
    <div>
    <p className='text-gray-600 text-xl'>*Highest Score of each user are shown here</p>

<button onClick={handleNavigation} class="bg-slate-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-slate-700 hover:border-blue-500 rounded">
Go Back
</button>
    </div>
    <h1 className='text-xl sm:text-5xl m-auto pt-[5%] text-gray-800 sm:font-bold'>LEADERBOARD</h1>
    <div className='flex flex-col gap-4 pt-[3%] px-[5%] sm:px-[20%]'>
      <div className='text-center text-gray-700'>
        {data.filter((doc) => doc.email === userEmail).map((doc) => (
          <PlayerCard key={doc.email} {...doc} rank={data.findIndex(doc => doc.email === userEmail)} />
        ))}
      </div>
      <div className='hide-scrollbar text-center h-[400px] sm:h-[700px] mb-5 text-gray-600 overflow-y-scroll'>
        {data.map((doc, index) => (
          <PlayerCard key={doc.email} {...doc} rank={index} />
        ))}
      </div>
      <p className='text-gray-500 text-xl m-auto pb-[4%]'>Scroll Down</p>
    </div>
  </div>
  
  );
};

export default LeaderBoard;