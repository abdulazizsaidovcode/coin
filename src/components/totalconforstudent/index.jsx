import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrophy, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TotalCoinForStudent = () => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg border shadow-md p-4 md:p-6 lg:p-8">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" />
          <span className="text-sm font-semibold">Total coin</span>
        </div>
        <span className="text-lg font-bold">3255</span>
      </div>
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-2" />
          <span className="text-sm font-semibold">Rate</span>
        </div>
        <span className="text-lg font-bold">15</span>
      </div>
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="text-blue-500 mr-2" />
          <span className="text-sm font-semibold">Learning time</span>
        </div>
        <span className="text-lg font-bold">5h 45m</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
          <span className="text-sm font-semibold">Completed course</span>
        </div>
        <span className="text-lg font-bold">3</span>
      </div>
    </div>
  );
};

export default TotalCoinForStudent;
