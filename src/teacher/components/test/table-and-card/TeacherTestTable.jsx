import { Icon } from "@iconify/react";

function TeacherTestTable() {
    return (
        <div className="w-full mt-8 shadow-md rounded-3xl overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-800 text-white rounded-t-2xl uppercase text-sm leading-normal">
                    <tr>
                        <th className="py-3 px-6">#</th>
                        <th className="py-3 px-6">Question</th>
                        <th className="py-3 px-6">Time</th>
                        <th className="py-3 px-6">Coin</th>
                        <th className="py-3 px-6">Category</th>
                        <th className="py-3 px-6">Atribute</th>
                        <th className="py-3 px-6">Answer</th>
                        <th className="py-3 px-6" colSpan='2'>Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 font-light">
                    {/* {student.length != 0 ? */}
                    {/* student.map((item, i) => */}
                    <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                        <td className="py-3 px-6">i + 1</td>
                        <td className="py-3 px-6">Question</td>
                        <td className="py-3 px-6">Time</td>
                        <td className="py-3 px-6">Coin</td>
                        <td className="py-3 px-6">Category</td>
                        <td className="py-3 px-6">Atribute</td>
                        <td className="py-3 px-6">Answer</td>
                        <td className="py-3 px-6">
                            <button
                                className="bg-yellow-500 rounded-lg px-5 py-1.5 font-semibold text-black shadow-xl hover:bg-yellow-600 active:scale-95 duration-300"
                            >Edit</button>
                        </td>
                        <td className="py-3 px-6">
                            <button 
                            className="bg-red-500 rounded-lg px-5 py-1.5 font-semibold text-black shadow-xl hover:bg-red-600 active:scale-95 duration-300"
                            >Delete</button>
                        </td>
                    </tr>
                    {/* ) : */}
                    {/* <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                            <td className='py-3 px-6'></td>
                            <td className='py-3 px-6'></td>
                            <td className='py-3 px-6'></td>
                            <td className='py-3 px-6'></td>
                            <td className="py-3 px-6 flex justify-center font-inika font-medium text-lg tracking-wider leading-10">
                                <Icon icon="eos-icons:three-dots-loading" width="50" />
                            </td>
                            <td className='py-3 px-6'></td>
                            <td className='py-3 px-6'></td>
                            <td className='py-3 px-6'></td>
                            <td className='py-3 px-6'></td>
                        </tr> */}
                    {/* } */}
                </tbody>
            </table>
        </div>
    );
}

export default TeacherTestTable;