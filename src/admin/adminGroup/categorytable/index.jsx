import React from 'react';
import '../../../globalcss/style.css';

const AdminGroupTable = ({editModal, group}) => {

    return (
        <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto space-y-8">
                <div className="bg-white shadow-md rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">No</th>
                                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Photo</th>
                                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Coins</th>
                                <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Tasks</th>
                                <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Active</th>
                                <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-700">
                            {group.map((group, index) => (
                                <tr key={group.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                                    <td className="py-3 px-6 text-left">
                                        <img src={group.imgurl} alt="Group" className="h-10 w-10 rounded-full"/>
                                    </td>
                                    <td className="py-3 px-6 text-left">{group.name}</td>
                                    <td className="py-3 px-6 text-center">{group.coin}</td>
                                    <td className="py-3 px-6 text-center">{group.task}</td>
                                    <td className="py-3 px-6 text-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600 rounded"
                                            checked={group.active}
                                            readOnly
                                        />
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <button onClick={() => editModal(group)}
                                                className="text-sm bg-red-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">
                                            edit</button>
                                        <button
                                            className=" ml-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">
                                            Info</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* {isModalOpen && (
        // ... Modal Content Here ...
      )} */}

        </div>
    );
};

export default AdminGroupTable;
