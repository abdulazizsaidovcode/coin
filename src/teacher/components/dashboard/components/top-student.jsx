import React, { useEffect, useState } from 'react';

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
const TopStudent = ({ students }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [teachersPerPage] = useState(5);
    const [currentStudents, setCurrentStudents] = useState(null)


    useEffect(() => {
        setCurrentStudents(students ? students.map((s, i) => {
            s.color = ['#4f46e5', '#6366f1', '#10b981', '#3b82f6'][i % 4];
            return s;
        }) : [].slice(indexOfFirstTeacher, indexOfLastTeacher))
    }, []);

    // let a = {
    //     active: false,
    //     coin: 15,
    //     fullName: "student_6 student_6",
    //     groupId: 2,
    //     groupName: "py-30",
    //     id: 7,
    //     numberOfExchange: 2,
    //     task: 2
    // }

    // Calculating the range of teachers for the current page
    const indexOfLastTeacher = currentPage * teachersPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="bg-white rounded-lg shadow-md px-5 py-5">
            <div className="px-5 py-4 border-b border-gray-200">
                <div className="text-lg font-medium text-gray-900">Top Student</div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full name</th>
                            <th>Group name</th>
                            <th>Exchanges</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentStudents && currentStudents.map((student, index) => (
                            <tr key={index} className="border-t border-gray-200 text-center">
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">{index + 1}</td>
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">{student.fullName}</td>
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">{student.coin}</td>
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">{student.groupName}</td>
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">{student.numberOfExchange}</td>
                                <td className="px-5 py-3 whitespace-nowrap text-right">
                                    <CircularProgress percentage={student.task} color={student.color} />
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
