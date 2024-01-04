import React, { useState, useEffect } from "react";
import axios from "axios";
import { config, url } from "../../components/api/api.js";
import StudentsTotalcoin from "./Totalcoins";
import Studetsrate from "./Studentsrate/index.jsx";
import Studentcoinstatistic from "./Studentcoinstatistic/index.jsx";
import TopTeachers from "../Topteachers/index.jsx";
import TopGroup from "../TopGroups/index.jsx";

function StudentDashboard() {
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(url + "user/getMe", config)
            .then(response => {
                setName(response.data.body.fullName);
            })
            .catch(error => {
                console.log("Boshqa backendinchi topiyla iltomos 😭", error);
            });
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8  w-full">
            <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Hi {name} (student)</h1>
                <span className="text-sm text-gray-600">Welcome back to the Coin system dashboard</span>
            </div>
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
