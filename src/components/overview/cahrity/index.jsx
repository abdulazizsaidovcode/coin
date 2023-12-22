// Dashboard.js

import React from 'react';

const Dashboard = () => (
  <div className="bg-gray-100 min-h-screen p-8">
    <Header />
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      <MetricCard title="Number of Students" value="200" icon="fas fa-users" />
      <MetricCard title="Number of Teachers" value="20" icon="fas fa-chalkboard-teacher" />
      <MetricCard title="Monthly Growth" value="33.98%" icon="fas fa-chart-line" />
      <MetricCard title="Number of Groups" value="8" icon="fas fa-users" />
    </div>
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="lg:w-1/2">
        <TotalCoinsByCourses />
      </div>
      <div className="lg:w-1/2">
        <TopTeachers />
        <TopStudents />
        <TopGroups />
      </div>
    </div>
  </div>
);

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-3xl font-semibold text-gray-800">Hi Admin Admina</h1>
    <span className="text-sm text-gray-600">Welcome back to Coin system dashboard</span>
  </div>
);

const MetricCard = ({ title, value, icon }) => (
  <div className="bg-white rounded shadow p-4 flex items-center justify-between">
    <div>
      <h2 className="text-lg text-gray-700">{title}</h2>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
    <i className={`${icon} text-3xl text-gray-400`}></i>
  </div>
);

const TotalCoinsByCourses = () => (
  <div className="bg-white rounded shadow p-4 mb-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Coin by Courses</h3>
    {/* Insert Pie Chart Here */}
  </div>
);

const TopTeachers = () => (
  <div className="bg-white rounded shadow p-4 mb-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Top Teacher</h3>
    {/* Teacher List Here */}
  </div>
);

const TopStudents = () => (
  // Similar structure to TopTeachers
  <h1>salom</h1>
);

const TopGroups = () => (
  // Similar structure to TopTeachers
  <div>salom</div>
);

export default Dashboard;
