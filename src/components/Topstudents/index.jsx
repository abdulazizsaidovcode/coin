import React, { useState } from 'react';

// Circular Progress Bar Component
const CircularProgress = ({ percentage, color }) => {
  const radius = 18;
  const strokeWidth = 4;
  const normalizedRadius = radius - strokeWidth;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center space-x-2">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span className="text-sm font-semibold">{percentage}%</span>
    </div>
  );
};

// Pagination Component
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex list-none">
        {pageNumbers.map(number => (
          <li key={number} className="mr-2">
            <button 
              onClick={() => paginate(number)} 
              className="text-white hover:text-blue-600 hover:underline px-3 py-1 rounded bg-blue-500"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Main Component
const TopStudent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [teachersPerPage] = useState(5);

  // Mock data for teachers - replace this with actual data from your backend or service
  const students = new Array(20).fill(null).map((_, i) => ({
    number: i + 1,
    name: `Teacher ${i + 1}`,
    group: 'Java',
    exchange: '154',
    tasks: '28 Tasks Done',
    rate: Math.floor(Math.random() * 100) + 1,
    avatarUrl: 'path-to-avatar', // Replace with actual path or URL to avatar image
    color: ['#4f46e5', '#6366f1', '#10b981', '#3b82f6'][i % 4],
  }));

  // Calculating the range of teachers for the current page
  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = students.slice(indexOfFirstTeacher, indexOfLastTeacher);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="bg-white rounded-lg shadow-md px-5 py-5">
      <div className="px-5 py-4 border-b border-gray-200">
        <div className="text-lg font-medium text-gray-900">Top Student</div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <tbody>
            {currentTeachers.map((student, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-5 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-gray-900">{student.number}</div>
                    <img
                      className="h-10 w-10 rounded-full mx-3"
                      src={student.avatarUrl}
                      alt={student.name}
                    />
                    <div className="text-gray-900">{student.name}</div>
                  </div>
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-gray-500">{student.group}</td>
                <td className="px-5 py-3 whitespace-nowrap text-gray-500">{student.exchange}</td>
                <td className="px-5 py-3 whitespace-nowrap text-gray-500">{student.tasks}</td>
                <td className="px-5 py-3 whitespace-nowrap text-right">
                  <CircularProgress percentage={student.rate} color={student.color} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination itemsPerPage={teachersPerPage} totalItems={students.length} paginate={paginate} />
    </div>
  );
};

export default TopStudent;
