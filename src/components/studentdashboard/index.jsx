import React from "react";
import StudentsTotalcoin from "./Totalcoins";
import Studetsrate from "./Studentsrate/index.jsx";
import Studentcoinstatistic from "./Studentcoinstatistic/index.jsx";
import TopTeachers from "../Topteachers/index.jsx";
import TopGroup from "../TopGroups/index.jsx";

function StudentDashboard() {
    

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8  w-full">
            <div className="w-full py-5">
                <Studetsrate />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full ">
                <div className="col-span-1 lg:col-span-6 mb-3">
                    <StudentsTotalcoin />
                </div>
                <div className="col-span-1 lg:col-span-6 ">
                    <Studentcoinstatistic />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full ">
                <div className="col-span-1 lg:col-span-6 mb-3">
                    {/* <TopTeachers/> */}
                </div>
                <div className="col-span-1 lg:col-span-6 ">
                    <TopGroup/>
                </div>
            </div>

        </div>
    );
}

export default StudentDashboard;
