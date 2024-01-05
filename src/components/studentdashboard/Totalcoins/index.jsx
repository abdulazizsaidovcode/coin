import React, {useEffect, useState} from "react";
import axios from "axios";
import {config, url} from "../../api/api";
import "./style.css"

function StudentsTotalcoin() {
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(url + "user/getMe", config)
            .then(response => {
                setName(response.data.body.fullName);
            })
            .catch(error => {
                console.log("Boshqa backendinchi topiyla iltimos 😭", error);
            });
    }, []);

    return (
        <div className="StudentsTotalcoin bg-white rounded-lg p-4 shadow-md w-6/12 h-80">
            <div className="flex items-center mb-4 sm:mb-0 ">
                <div>
                    <div className=" rounded-2xl bg bg-yellow-100 px-8 py-3">
                        <i className="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    </div>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Total coin</span>
                    <span className="text-lg font-semibold">3255</span>
                </div>
            </div>
            <div className="flex items-center   mb-4 sm:mb-0 ">
                <div className=" rounded-2xl bg bg-yellow-100 px-8 py-3">
                    <i className="fa-solid fa-trophy text-yellow-300 text-2xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Total coin</span>
                    <span className="text-lg font-semibold">3255</span>
                </div>
            </div>
            <div className="flex items-center mb-4 sm:mb-0 ">
                <div className=" rounded-2xl bg bg-blue-100 px-8 py-3">
                    <i className="fa-solid fa-clock text-blue-500 text-2xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Total coin</span>
                    <span className="text-lg font-semibold">3255</span>
                </div>
            </div>
            <div className="flex items-center  mb-4 sm:mb-0 ">
                <div className=" rounded-2xl bg bg-green-100 px-8 py-3">
                    <i className="fa-solid fa-check-circle text-green-500 text-2xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Total coin</span>
                    <span className="text-lg font-semibold">3255</span>
                </div>
            </div>
        </div>
    );
}

export default StudentsTotalcoin;
