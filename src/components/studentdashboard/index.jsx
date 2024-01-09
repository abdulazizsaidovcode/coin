import React, {useEffect, useState} from "react";
import StudentsTotalcoin from "./Totalcoins";
import Studetsrate from "./Studentsrate/index.jsx";
import Studentcoinstatistic from "./Studentcoinstatistic/index.jsx";
import TopGroup from "../TopGroups/index.jsx";
import {getTopGroup, getTopStudent, getTopTeacher} from "../api/api";
import TopLoading from "../Topteachers/TopLoading";
import TopTeachers from "../Topteachers";
import TopStudent from "../Topstudents";

function StudentDashboard() {

    const [topGroup, setTopGroup] = useState(null);
    const [topStudent, setTopStudent] = useState(null);


    useEffect(() => {
        getTopGroup(setTopGroup);
        getTopStudent(setTopStudent);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8  w-full">
            <div className="w-full py-5">
                <Studetsrate/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full ">
                <div className="col-span-1 lg:col-span-6 mb-3">
                    <StudentsTotalcoin/>
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
