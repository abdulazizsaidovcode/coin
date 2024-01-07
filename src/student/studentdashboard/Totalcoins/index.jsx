import React, { useEffect, useState } from "react";
import axios from "axios";
import { config, setConfig, url } from "../../../components/api/api";
import "./style.css"

function StudentsTotalcoin({ studentStatistics }) {
    const [totalCoin, setTotalCoin] = useState({});
    useEffect(() => {
        setConfig();
        axios.get(url + "user/student/statistics", config)
            .then(res => {
                setTotalCoin(res.data.body);
                console.log("salom" + totalCoin);
            })
            .catch(err => console.log("Boshqa backendinchi topiyla iltomos 😭", err));
    }, []);
        
    return (
        <div className="StudentsTotalcoin bg-white rounded-lg p-4 all-shadow w-6/12 h-80">
            <div className="flex items-center mb-4 sm:mb-0 ">
                <div>
                    <div className=" rounded-2xl bg bg-yellow-100 px-8 py-3">
                        <i className="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    </div>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Total coin</span>
                    <span className="text-lg font-semibold">{totalCoin.coin}</span>
                </div>
            </div>
            <div className="flex items-center   mb-4 sm:mb-0 ">
                <div className=" rounded-2xl bg bg-yellow-100 px-8 py-3">
                    <i className="fa-solid fa-trophy text-yellow-300 text-2xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Rate</span>
                    <span className="text-lg font-semibold">{totalCoin.rate}</span>
                </div>
            </div>
            <div className="flex items-center mb-4 sm:mb-0 ">
                <div className=" rounded-2xl bg bg-blue-100 px-8 py-3">
                    <i className="fa-solid fa-clock text-blue-500 text-2xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Learning time</span>
                    <span className="text-lg font-semibold">{totalCoin.time}</span>
                </div>
            </div>
            <div className="flex items-center  mb-4 sm:mb-0 ">
                <div className=" rounded-2xl bg bg-green-100 px-8 py-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-2xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Completed course</span>
                    <span className="text-lg font-semibold">{totalCoin.completedCourse}</span>
                </div>
            </div>
        </div>
    );
}

export default StudentsTotalcoin;
