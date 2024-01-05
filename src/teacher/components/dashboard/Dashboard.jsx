import React, { useEffect, useState } from "react";
import TopGroup from "./components/top-group";
import TopStudent from "./components/top-student";
import TopTeachers from "./components/top-teacher";
import TotalCoins from "./components/total-coin";
import axios from "axios";
import { config, setConfig, url } from "../../../components/api/api";
import TopLoading from "./components/loading";
import { toast } from "react-toastify";

const Dashboard = () => {
    const [STMGSize, setSTMGSize] = useState(null);
    const [topTeacher, setTopTeacher] = useState(null);
    const [topStudent, setTopStudent] = useState(null);
    const [topGroup, setTopGroup] = useState(null);
    const [pl, setPl] = useState(null);
    const [name, setName] = useState([]);

    useEffect(() => {
        setConfig();
        axios
            .get(url + "user/statistic", config)
            .then((res) => setSTMGSize(res.data.body))
            .catch(() => toast.warning("internetga blan aloqani tekshirig!"));
        axios
            .get(url + "user/top/teachers", config)
            .then((res) => setTopTeacher(res.data.body))
            .catch((err) => console.log(err));
        axios
            .get(url + "user/top/student", config)
            .then((res) => setTopStudent(res.data.body))
            .catch((err) => console.log(err));
        axios
            .get(url + "group/topGroupsForAdmin", config)
            .then((res) => setTopGroup(res.data.body))
            .catch((err) => console.log(err));
        axios
            .get(url + "coin/history/course/statistics", config)
            .then((res) => setPl(res.data.body))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get(url + "user/getMe", config)
            .then((response) => {
                setName(response.data.body.fullName);
            })
            .catch((error) => {
                console.log("Boshqa backendinchi topiyla iltimos 😭", error);
            });
    }, []);

    console.log(name);

    return (
        <>
            <div className="bg-gray-100 min-h-screen p-8  w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                    <MetricCard
                        title="Number of Students"
                        value={STMGSize && STMGSize.studentCount}
                        icon="fas fa-users"
                    />
                    <MetricCard
                        title="Number of Teachers"
                        value={STMGSize && STMGSize.teacherCount}
                        icon="fas fa-chalkboard-teacher"
                    />
                    <MetricCard
                        title="Monthly Growth"
                        value={STMGSize && STMGSize.statisticByPercentage + "%"}
                        icon="fas fa-chart-line"
                    />
                    <MetricCard
                        title="Number of Groups"
                        value={STMGSize && STMGSize.groupCount}
                        icon="fas fa-users"
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                    <div className="flex-grow">
                        {pl ? (
                            <TotalCoins pl={pl} />
                        ) : (
                            <TotalCoins pl={[{ categoryName: "Loading...", coin: 100 }]} />
                        )}
                    </div>
                    <div className="flex-grow">
                        {topTeacher ? (
                            <TopTeachers teacherList={topTeacher} />
                        ) : (
                            <TopLoading name="Top Teacher" />
                        )}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-grow">
                        {topStudent ? (
                            <TopStudent students={topStudent} />
                        ) : (
                            <TopLoading name="Top Student" />
                        )}
                    </div>
                    <div className="flex-grow">
                        {topGroup ? (
                            <TopGroup topGroups={topGroup} />
                        ) : (
                            <TopLoading name="Top Group" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

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
