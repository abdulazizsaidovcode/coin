import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen signin w-full z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 font-inika">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Edu Coin System</h2>
        <form className="mt-4">
          <div>
            <label className="block mb-1 font-bold text-gray-500">Username</label>
            <input type="text" className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500" placeholder="Enter username"/>
          </div>
          <div className="mt-4">
            <label className="block mb-1 font-bold text-gray-500">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500" placeholder="Enter password"/>
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                      onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-1">
            <a href="#" className="text-sm text-end text-purple-600 hover:underline w-full block">Forgot password?</a>
            <button type="submit" className="w-full py-2 px-4 mt-7 bg-purple-500 hover:bg-purple-600 rounded text-white font-bold">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
