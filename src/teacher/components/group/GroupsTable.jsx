import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { config, setConfig, url } from '../../../components/api/api';
import avatar from "../../../assits/itca.jpg";

const initialCategories = [
    { id: 1, name: 'Front-End', description: 'Tashqi qism', programmingLanguage: 'JavaScript', active: true },
];

const GroupsTable = () => {
    const [categories, setCategories] = useState(initialCategories);

    useEffect(() => {
        setConfig();
        getCategory();
    }, []);

    const getCategory = () => {
        axios.get(url + "category/teacher/category/list", config)
            .then(res => setCategories(res.data.body))
            .catch(() => console.log("kelmadi"))
    }

    return (
        <>
            {/* //  px-4 sm:px-6 lg:px-8 */}
            <div className="w-full bg-gray-100 py-8">
                <div className="w-full mx-auto">
                    <div className="bg-white shadow-md rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        {/* Table Headers */}
                                        <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">No</th>
                                        <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Photo</th>
                                        <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                        <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Coin</th>
                                        <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">More</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {categories.map((category, i) => (
                                        <tr key={category.id} className='even:bg-slate-100 hover:bg-slate-200 duration-150'>
                                            <td className="py-3 px-6 border-b border-gray-200">{i + 1}</td>
                                            <td className="py-3 px-6 border-b border-gray-200">
                                                <img
                                                    src={avatar}
                                                    alt="avatar"
                                                    className="h-16 w-16 rounded-full" />
                                            </td>
                                            <td className="py-3 px-6 border-b border-gray-200">
                                                {category.name === null ? "Yo'q" : category.name}
                                            </td>
                                            <td className="py-3 px-6 border-b border-gray-200">
                                                {category.programmingLanguage === null ? "Yo'q" : category.programmingLanguage}
                                            </td>
                                            <td className="py-3 px-6 border-b border-gray-200">
                                                <button className='btm'>More</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupsTable;
