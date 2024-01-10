import React, { useEffect, useState } from 'react';
import { config, setConfig, url } from '../../../components/api/api';
import axios from 'axios';

function Studetsrate() {
    const [coin, setCoinsRate] = useState([]);
    useEffect(() => {
        setConfig();
        axios.get(url + "user/rate/statistics", config)
            .then(res => {
                setCoinsRate(res.data.body);
                console.log(coin);
            })
            .catch(err => console.log("Boshqa backendinchi topiyla iltomos 😭", err));
    }, []);

    return (
        <div className="bg-white rounded-full p-4 flex justify-around items-center all-shadow">
            <div className="flex items-center sm:items-start  mb-4 sm:mb-0 ">
                <div className="rounded-2xl bg-gray-200 px-5 py-2">
                    <i className="fa-solid fa-dollar-sign text-4xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Current Coin</span>
                    <span className="text-lg font-semibold">{coin.currentRate}</span>
                </div>
            </div>
            <div className="flex items-center sm:items-start  mb-4 sm:mb-0 ">
                <div className="rounded-2xl bg-gray-200 px-5 py-2">
                    <i className="fa-solid fa-hand-holding-dollar text-4xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Exchange Coin</span>
                    <span className="text-lg font-semibold">{coin.usedRate}</span>
                </div>
            </div>
            <div className="flex items-center sm:items-start  mb-4 sm:mb-0 ">
                <div className="rounded-2xl bg-gray-200  px-5 py-2">
                    <i className="fa-solid fa-sack-dollar text-4xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Total coin</span>
                    <span className="text-lg font-semibold">{coin.numberOfExchange}</span>
                </div>
            </div>
        </div>
    );
}

export default Studetsrate;
