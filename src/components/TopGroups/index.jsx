import React from 'react';

const TopGroup = () => {
  const groups = [
    { name: 'F-1', percentage: 3, color: 'bg-purple-500' },
    { name: 'G-1', percentage: 89, color: 'bg-green-500' },
    { name: 'B-4', percentage: 89, color: 'bg-blue-500' },
    { name: 'f-5', percentage: 80, color: 'bg-red-500' },
  ];

  return (
    <div className="h-96 bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Top Group</h2>
        <span>...</span>
      </div>
      {groups.map((group, index) => (
        <div key={index} className="flex items-center mb-2 mt-10 align-middle">
          <span className="text-sm font-semibold w-8">{group.name}</span>
          <div className="flex-1 h-4 mx-2 bg-gray-200 rounded">
            <div
              className={`${group.color} h-4 rounded`}
              style={{ width: `${group.percentage}%` }}
            ></div>
          </div>
          <span className="text-sm w-10 text-right">{group.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default TopGroup;
