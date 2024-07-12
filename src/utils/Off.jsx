import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Off = () => {
  // const [isOnline, setIsOnline] = useState(true); // Initially assume the user is online
  // const navigate = useNavigate();
  // console.log("Component rendered");

  // useEffect(() => {
  //   const handleOnline = () => {
  //     console.log("Online event triggered");
  //     setIsOnline(true);
  //   };

  //   const handleOffline = () => {
  //     console.log("Offline event triggered");
  //     setIsOnline(false);
  //     navigate("/offline"); // Uncomment if you want to navigate to an offline page
  //   };

  //   console.log("Setting up event listeners");
  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     console.log("Cleaning up event listeners");
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   };
  // }, [navigate]);

  return  (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <svg
        className="w-16 h-16 mx-auto mb-4 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-6 6h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <h1 className="text-2xl font-bold mb-2">No Internet Connection</h1>
      <p className="text-gray-600 mb-4">Please check your internet connection and try again.</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Retry
      </button>
    </div>
  </div>
  ) 
};

export default Off;
