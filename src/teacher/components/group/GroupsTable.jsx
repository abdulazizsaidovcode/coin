import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { byId, config, setConfig, url } from '../../../components/api/api';
import avatar from "../../../assits/itca.jpg";
import { Link } from 'react-router-dom';

const GroupsTable = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        setConfig();
        getCategory();
    }, []);

    const getCategory = () => {
        axios.get(url + "group/teacher", config)
            .then(res => setGroups(res.data.body))
            .catch(() => console.log("kelmadi"))
    }

    const goStudent = () => byId("goStudent").click();

    return (
        <>
            <Link to="/teacher/student" id='goStudent'></Link>
            {/* //  px-4 sm:px-6 lg:px-8 */}
            <div className="w-full bg-gray-100 py-8">
                <div className="w-full mx-auto">
                    <div className="bg-white shadow-md rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        {/* Table Headers */}
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">No</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Photo</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Name</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Coin</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">More</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {groups.length !== 0 ?
                                        groups.map((group, i) => (
                                            <tr key={group.id} className='even:bg-slate-100 hover:bg-slate-200 duration-200 text-center'>
                                                <td className="py-3 px-6 border-b border-gray-200">{i + 1}</td>
                                                <td className="py-3 px-6 border-b border-gray-200 flex justify-center items-center">
                                                    <img
                                                        src={avatar}
                                                        alt="avatar"
                                                        className="h-16 w-16 rounded-full" />
                                                </td>
                                                <td className="py-3 px-6 border-b border-gray-200">
                                                    {group.name === null ? "Yo'q" : group.name}
                                                </td>
                                                <td className="py-3 px-6 border-b border-gray-200">
                                                    {group.coin === null ? "Yo'q" : group.coin}
                                                </td>
                                                <td className="py-3 px-6 border-b border-gray-200">
                                                    <button className='btm' onClick={() => {
                                                        goStudent();
                                                        sessionStorage.setItem("studentInfo", group.id)
                                                    }}>More</button>
                                                </td>
                                            </tr>
                                        )) :
                                        <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                                            <td className="py-3 px-6 font-inika font-medium text-lg tracking-wider leading-10" colSpan="7">loading...</td>
                                        </tr>
                                    }
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