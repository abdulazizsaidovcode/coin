import React, { useState, useEffect } from "react";
import axios from "axios";
import { config, url } from "../../components/api/api.js";
import StudentsTotalcoin from "./Totalcoins";

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
            <StudentsTotalcoin/>
        </div>
    );
}

export default StudentDashboard;
