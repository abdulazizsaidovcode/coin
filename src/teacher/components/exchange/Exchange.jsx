import React, { useState } from 'react';
import TotalCoins from '../total-coins/TotalCoins';
import TotalCoinsmonth from './total-coin-month';

const Exchange = () => {
    const [data, setData] = useState([]);
    const toggleActive = (id) => {
        setData(data.map(item => item.id === id ? { ...item, active: !item.active } : item));
    };

    return (
        <div className="p-8 w-full">
            <div className="mt-10 flex justify-between items-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Exchange</h2>
                <input
                    type="search"
                    className="w-80 py-3 px-3 text-sm border border-gray-300 rounded-lg
                    bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                    placeholder="🔍  Search" />
            </div>
            <div className='flex justify-around mb-10 px-10'>
                <div className='w-5/12 shadow-xl up'>
                    {/* <TotalCoins /> */}
                </div>
                <div className='w-5/12 shadow-xl up'>
                    <TotalCoinsmonth />
                </div>
            </div>

            <div>
                <table className="w-full">
                    <thead className="bg-gray-800 text-white uppercase text-sm leading-normal">
                        <tr>
                            <th className="py-3 px-6">No</th>
                            <th className="py-3 px-6">Photo</th>
                            <th className="py-3 px-6">Gift name</th>
                            <th className="py-3 px-6">name</th>
                            <th className="py-3 px-6">Cion</th>
                            <th className="py-3 px-6">Date</th>
                            <th className="py-3 px-6">Active</th>
                            <th className="py-3 px-6">Info</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <th className="py-3 px-6">1</th>
                            <td className="py-3 px-6">
                                <img src='' alt="nofound" />
                            </td>
                            <td className="py-3 px-6">giftname</td>
                            <td className="py-3 px-6">name</td>
                            <td className="py-3 px-6">Coin</td>
                            <td className="py-3 px-6">date</td>
                            <td className="py-3 px-6">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                // checked={item.active}
                                // onChange={() => toggleActive(item.id)}
                                />
                            </td>
                            <td className="py-3 px-6">
                                <div className="flex item-center justify-center">
                                    <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">info</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Exchange;
