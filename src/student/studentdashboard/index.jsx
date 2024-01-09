import React, {useEffect, useState} from "react";
import StudentsTotalcoin from "./Totalcoins/index.jsx";
import Studetsrate from "./Studentsrate/index.jsx";
import Studentcoinstatistic from "./Studentcoinstatistic/index.jsx";
import TopGroup from "../../components/TopGroups/index.jsx";
import {getStudentStatistics, getTopGroupForTeacher, getTopStudent, setConfig} from "../../components/api/api.js";
import TopLoading from "../../components/Topteachers/TopLoading.js";
import TopStudent from "../../components/Topstudents/index.jsx";

function StudentDashboard() {

    const [topGroup, setTopGroup] = useState(null);
    const [topStudent, setTopStudent] = useState(null);
    const [studentStatistics, setStudentStatistics] = useState(null);


    useEffect(() => {
        setConfig();
        getTopGroupForTeacher(setTopGroup);
        getTopStudent(setTopStudent);
        getStudentStatistics(setStudentStatistics);
    }, []);

    console.log(studentStatistics)
    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8  w-full">
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Dashboard</h2>
            </div>
            <div className="w-full py-5">
                <Studetsrate/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full ">
                <div className="col-span-1 lg:col-span-6 mb-3">
                    {studentStatistics ? (
                        <StudentsTotalcoin studentStatistics={studentStatistics}/>
                    ) : (
                        <StudentsTotalcoin studentStatistics={{coin: 0, rate: 0, time: 0, completedCourse: 0}}/>
                    )}
                </div>
                <div className="col-span-1 lg:col-span-6 ">
                    <Studentcoinstatistic/>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full ">
                <div className="col-span-1 lg:col-span-6 mb-3">
                    {topStudent ? (
                        <TopStudent students={topStudent}/>
                    ) : (
                        <TopLoading name="Top Student"/>
                    )}
                </div>
                <div className="col-span-1 lg:col-span-6 ">
                    {topGroup ? (
                        <TopGroup topGroups={topGroup}/>
                    ) : (
                        <TopLoading name="Top Group"/>
                    )}
                </div>
            </div>

        </div>
    );
}

export default StudentDashboard;