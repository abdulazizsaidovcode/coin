import React from 'react';
import TopGroup from '../../TopGroups';
import TopStudent from '../../Topstudents';
import TopTeachers from '../../Topteachers';
import TotalCoins from '../../Total coins';
import "../../../globalcss/style.css"

const Dashboard = () => (
  <div className="bg-gray-100 min-h-screen p-8">
    <Header />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      <MetricCard title="Number of Students" value="200" icon="fas fa-users" />
      <MetricCard title="Number of Teachers" value="20" icon="fas fa-chalkboard-teacher" />
      <MetricCard title="Monthly Growth" value="33.98%" icon="fas fa-chart-line" />
      <MetricCard title="Number of Groups" value="8" icon="fas fa-users" />
    </div>
    <div className="flex flex-col lg:flex-row gap-4 mb-4">
      <div className="flex-grow">
        <TotalCoins />
      </div>
      <div className="flex-grow">
        <TopTeachers />
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-grow">
        <TopStudent />
      </div>
      <div className="flex-grow">
        <TopGroup />
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
  <div className="bg-white rounded shadow p-4 flex flex-col items-center justify-between text-center">
    <div>
      <h2 className="text-lg text-gray-700">{title}</h2>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
    <i className={`${icon} text-3xl text-gray-400`}></i>
  </div>
);

export default Dashboard;
