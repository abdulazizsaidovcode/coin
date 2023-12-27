import React from 'react';

const TotalCoinForStudent = () => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-lg border shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-semibold text-gray-900 dark:text-white">Total coin</div>
        <div className="text-3xl font-bold text-gray-900 dark:text-white">3255</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-semibold text-gray-900 dark:text-white">Rate</div>
        <div className="text-3xl font-bold text-gray-900 dark:text-white">15</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Learning time</span>
          <span className="ml-1 text-xl font-bold text-gray-900 dark:text-white">5h 45m</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Completed course</span>
          <span className="ml-1 text-xl font-bold text-gray-900 dark:text-white">3</span>
        </div>
      </div>
    </div>
  );
};

export default TotalCoinForStudent;
