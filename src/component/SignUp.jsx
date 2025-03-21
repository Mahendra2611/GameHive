// src/Signup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "./firebase";
import { setDoc, doc ,getDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

function Signup() {
  console.log("signup called")
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();
    //console.log("Document data:", docSnap.data());
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db,"Users",user.uid),{
          email: user.email,
          userName : username,
          score:0
        });
        localStorage.setItem("userEmail",user.email)
        localStorage.setItem("uid",user.uid)
      }
      // console.log("User Registered Successfully!!");
      navigate("/home")
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              maxLength={10}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <p className='text-blue-400 text-xs'> *UserName should be atmost of 10 character</p>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className='text-blue-400 text-xs'> *Password should be atleast 6 character</p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
