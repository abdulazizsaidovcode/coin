import React, { useEffect, useState } from 'react';

// Circular Progress Bar Component
export const CircularProgress = ({ percentage, color }) => {
    const radius = 18;
    const strokeWidth = 4;
    const normalizedRadius = radius - strokeWidth;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex justify-center items-center space-x-2">
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
                            className="text-white hover:text-blue-600 hover:bg-slate-200 hover:font-extrabold font-bold shadow-xl duration-200 hover:underline px-3 py-1 mt-2 rounded-lg bg-blue-500"
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const TopTeachers = ({ teacherList }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [teachersPerPage] = useState(5);
    const [currentTeachers, setCurrentTeachers] = useState([])

    const indexOfLastTeacher = currentPage * teachersPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;

    useEffect(() => {
        setCurrentTeachers(teacherList ? teacherList.map((t, i) => {
            t.color = ['#4f46e5', '#6366f1', '#10b981', '#3b82f6'][i % 4];
            return t;
        }) : [].slice(indexOfFirstTeacher, indexOfLastTeacher));
    }, []);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="bg-white rounded-lg shadow-md px-5 py-5">
            <div className="px-5 py-4 border-b border-gray-200">
                <div className="text-lg font-medium text-gray-900">Top Teachers</div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className='py-2 px-6'>#</th>
                            <th className='py-2 px-6'>Name</th>
                            <th className='py-2 px-6'>Students</th>
                            <th className='py-2 px-6'>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTeachers.map((teacher, index) => (
                            <tr key={index} className="border-t border-gray-200 text-center">
                                <td className="py-2 px-6 whitespace-nowrap text-gray-500">{index + 1}</td>
                                <td className="py-2 px-6 whitespace-nowrap text-gray-500">{teacher.teacherName}</td>
                                <td className="py-2 px-6 whitespace-nowrap text-gray-500">{teacher.numberOfStudent}</td>
                                <td className="py-2 px-6 whitespace-nowrap">
                                    <CircularProgress percentage={teacher.rate} color={teacher.color} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination itemsPerPage={teachersPerPage} totalItems={teacherList.length} paginate={paginate} />
        </div>
    );
};

export default TopTeachers;
