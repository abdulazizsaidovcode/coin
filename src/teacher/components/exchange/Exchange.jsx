import React, { useState } from 'react';
import TotalCoins from '../total-coins/TotalCoins';
import TotalCoinsmonth from './total-coin-month';

const Exchange = () => {
    const [data, setData] = useState([]);
    const toggleActive = (id) => {
        setData(data.map(item => item.id === id ? { ...item, active: !item.active } : item));
    };

    return (
        <div className="p-8 w-full bg-gray-100">
            <div className="mt-10 flex justify-between items-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Exchange</h2>
                <input
                    type="search"
                    className="w-80 py-3 px-3 text-sm border border-gray-300 rounded-lg
                    bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                    placeholder="🔍  Search" />
            </div>
            <div className='flex justify-between my-14'>
                <div className='w-6/12 shadow-xl up duration-300 rounded-lg mr-4'>
                    <TotalCoins />
                </div>
                <div className='w-6/12 shadow-xl up duration-300 rounded-lg ml-4'>
                    <TotalCoinsmonth />
                </div>
            </div>

            <div>
                <table className="w-full rounded-3xl shadow-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white uppercase text-sm leading-normal">
                        <tr>
                            <th className="py-3 px-6">#</th>
                            <th className="py-3 px-6">photo</th>
                            <th className="py-3 px-6">gift name</th>
                            <th className="py-3 px-6">name</th>
                            <th className="py-3 px-6">coin</th>
                            <th className="py-3 px-6">date</th>
                            <th className="py-3 px-6">active</th>
                            <th className="py-3 px-6">action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-light">
                        <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
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
                                    <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white active:scale-95 tracking-widest rounded-lg shadow-lg font-semibold py-1.5 px-4 duration-300">info</button>
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
