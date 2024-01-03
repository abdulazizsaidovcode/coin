import React, { useState, useEffect } from "react";
import axios from "axios";
import { config, setConfig, url } from "../api/api";

function StudentDashboard() {
    const [name, setName] = useState("");

    useEffect(() => {
        setConfig()
        axios.get(url + "user/getMe", config)
            .then(response => {
                setName(response.data.body.fullName);
            })
            .catch(error => {
                console.log("Boshqa backendinchi topiyla iltomos 😭", error);
            });
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8 ml-0 sm:ml-64 w-full">
            <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Hi {name} (student)</h1>
                <span className="text-sm text-gray-600">Welcome back to the Coin system dashboard</span>
            </div>
            <div className="bg-white rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center shadow-md">
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <i className="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <span className="text-lg font-semibold">3255</span>
                    <span className="text-sm text-gray-600">Total coin</span>
                </div>
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <i className="fa-solid fa-trophy text-yellow-300 text-2xl"></i>
                    <span className="text-lg font-semibold">15</span>
                    <span className="text-sm text-gray-600">Rate</span>
                </div>
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <i className="fa-solid fa-clock text-blue-500 text-2xl"></i>
                    <span className="text-lg font-semibold">5h 45m</span>
                    <span className="text-sm text-gray-600">Learning time</span>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-check-circle text-green-500 text-2xl"></i>
                    <span className="text-lg font-semibold">3</span>
                    <span className="text-sm text-gray-600">Completed course</span>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
