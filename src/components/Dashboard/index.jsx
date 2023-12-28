import React, {useEffect, useState} from 'react';
import TopGroup from '../TopGroups';
import TopStudent from '../Topstudents';
import TopTeachers from '../Topteachers';
import TotalCoins from '../Total coins';
import axios from "axios";
import {config, setConfig, url} from "../api/api";
import TopLoading from "../Topteachers/TopLoading";

const Dashboard = () => {

    const [STMGSize, setSTMGSize] = useState(null);
    const [topTeacher, setTopTeacher] = useState(null);
    const [topStudent, setTopStudent] = useState(null);
    const [topGroup, setTopGroup] = useState(null);
    const [pl, setPl] = useState(null);

    useEffect(() => {
        setConfig();
        axios.get(url + "user/statistic", config).then(res => setSTMGSize(res.data.body));
        axios.get(url + 'user/top/teachers', config).then(res => setTopTeacher(res.data.body))
        axios.get(url + 'user/top/student', config).then(res => setTopStudent(res.data.body))
        axios.get(url + 'group/topGroupsForAdmin', config).then(res => setTopGroup(res.data.body))
        axios.get(url + 'coin/history/course/statistics', config).then(res => setPl(res.data.body))
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-8 ml-64 w-full">
            <div className=" mb-4">
                <h1 className="text-3xl font-semibold text-gray-800">Hi Admin(a)</h1>
                <span className="text-sm text-gray-600">Welcome back to Coin system dashboard</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                <MetricCard title="Number of Students" value={STMGSize && STMGSize.studentCount} icon="fas fa-users"/>
                <MetricCard title="Number of Teachers" value={STMGSize && STMGSize.teacherCount}
                            icon="fas fa-chalkboard-teacher"/>
                <MetricCard title="Monthly Growth" value={STMGSize && STMGSize.statisticByPercentage + '%'}
                            icon="fas fa-chart-line"/>
                <MetricCard title="Number of Groups" value={STMGSize && STMGSize.groupCount} icon="fas fa-users"/>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex-grow">
                    {console.log(pl ? 'ha' : 'yuq')}
                    {pl ? <TotalCoins pl={pl}/> : <TotalCoins pl={[{categoryName: "Loading...", coin: 100}]}/>}
                </div>
                <div className="flex-grow">
                    {topTeacher ? <TopTeachers teacherList={topTeacher}/> : <TopLoading name='Top Teacher'/>}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-grow">
                    {topStudent ? <TopStudent students={topStudent}/> : <TopLoading name='Top Student'/>}
                </div>
                <div className="flex-grow">
                    {topGroup ? <TopGroup topGroups={topGroup}/> : <TopLoading name='Top Group'/>}
                </div>
            </div>
        </div>
    )
};

const MetricCard = ({title, value, icon}) => (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center justify-between text-center">
        <div>
            <h2 className="text-lg text-gray-700">{title}</h2>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <i className={`${icon} text-3xl text-gray-400`}></i>
    </div>
);

export default Dashboard;
