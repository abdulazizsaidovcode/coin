import React, { useState, useEffect } from "react";
import axios from "axios";
import { config, url } from "../api/api";

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
            <div className="bg-white rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center shadow-md">
                <div className="flex items-center justify-center mb-4 sm:mb-0">
                    <div className=" rounded-2xl bg bg-yellow-100 px-5 py-2">
                        <i className="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    </div>
                    <div className="flex flex-col ml-3">
                        <span className="text-sm text-gray-600 ">Total coin</span>
                        <span className="text-lg font-semibold">3255</span>
                    </div>
                </div>
                <div className="flex items-center justify-center mb-4 sm:mb-0">
                    <div className=" rounded-2xl bg bg-yellow-100 px-5 py-2">
                        <i className="fa-solid fa-trophy text-yellow-300 text-2xl"></i>
                    </div>
                    <div className="flex flex-col ml-3">
                        <span className="text-sm text-gray-600 ">Total coin</span>
                        <span className="text-lg font-semibold">3255</span>
                    </div>
                </div>
                <div className="flex items-center justify-center mb-4 sm:mb-0">
                    <div className=" rounded-2xl bg bg-blue-100 px-5 py-2">
                        <i className="fa-solid fa-clock text-blue-500 text-2xl"></i>
                    </div>
                    <div className="flex flex-col ml-3">
                        <span className="text-sm text-gray-600 ">Total coin</span>
                        <span className="text-lg font-semibold">3255</span>
                    </div>
                </div>
                <div className="flex items-center justify-center mb-4 sm:mb-0">
                    <div className=" rounded-2xl bg bg--100 px-5 py-2">
                        <i className="fa-solid fa-check-circle text-green-500 text-2xl"></i>
                    </div>
                    <div className="flex flex-col ml-3">
                        <span className="text-sm text-gray-600 ">Total coin</span>
                        <span className="text-lg font-semibold">3255</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
