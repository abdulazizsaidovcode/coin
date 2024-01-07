const Students = () => {
    return (
        <div className="p-8 w-full bg-studentTableBg min-h-full">
            <div className=" mb-4 flex justify-between items-center">
                <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4">students</h2>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        id="search"
                        className="w-80 py-3 ps-10 text-sm border border-gray-300 rounded-lg
                      bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                        placeholder="Search" />
                </div>
            </div>

            <div>
                <div className="mb-4">
                    <div className='flex mb-2 flex-wrap'>
                        <button
                            className="px-10 py-2.5 mr-5 my-2 rounded-3xl shadow-lg font-inika font-semibold tracking-wide text-xl
                            bg-purple-500 text-white hover:bg-purple-700 active:scale-90 focus:outline-none focus:bg-purple-600 duration-300">
                            button
                        </button>
                    </div>
                </div>

                <div className="w-full mt-8 shadow-md rounded-3xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-800 text-white rounded-t-2xl uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6">#</th>
                                <th className="py-3 px-6">Full Name</th>
                                <th className="py-3 px-6">Group</th>
                                <th className="py-3 px-6">Cion</th>
                                <th className="py-3 px-6">Phone Number</th>
                                <th className="py-3 px-6">Task</th>
                                <th className="py-3 px-6">Exschange</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 font-light">
                            <tr className="border-b border-gray-200 text-center hover:bg-gray-100 duration-300">
                                <td className="py-3 px-6">1</td>
                                <td className="py-3 px-6">Full Name</td>
                                <td className="py-3 px-6">Group</td>
                                <td className="py-3 px-6">Cion</td>
                                <td className="py-3 px-6">Phone Number</td>
                                <td className="py-3 px-6">Task</td>
                                <td className="py-3 px-6">Exschange</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Students;
