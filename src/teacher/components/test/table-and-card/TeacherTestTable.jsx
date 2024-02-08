import { Icon } from "@iconify/react";
import EditModal from "../modals/EditModal";
import { useState } from "react";

function TeacherTestTable({ getTestTable, testCategorySub, allTestTable, tableHeddin }) {
    const [isEditMenuOpen, setEditIsMenuOpen] = useState(false);
    const [isHoveredId, setIsHoveredId] = useState([]);

    const toggleEditMenu = () => setEditIsMenuOpen(!isEditMenuOpen);

    return (
        <div className={`w-full ${tableHeddin ? 'visible mt-8 shadow-md rounded-3xl overflow-hidden' : 'hidden'}`}>
            <table className={`w-full`}>
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
                    {allTestTable.length !== 0 ?
                        allTestTable.map((item, i) => (
                            <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                                <td className="py-3 px-6">{i + 1}</td>
                                <td className="py-3 px-6">{item.question}</td>
                                <td className="py-3 px-6">{item.time}</td>
                                <td className="py-3 px-6">{item.coin}</td>
                                <td className="py-3 px-6">{item.categoryName}</td>
                                <td className="py-3 px-6">{` ${item.attribute} `}</td>
                                <td className="py-3 px-6 relative">{`${item.answer}`}</td>
                                <td className="py-3 px-6">
                                    <button
                                        className="bg-yellow-500 rounded-lg px-5 py-1.5 font-semibold text-black shadow-xl hover:bg-yellow-600 active:scale-95 duration-300"
                                        onClick={() => {
                                            toggleEditMenu();
                                            setIsHoveredId(item);
                                        }}
                                    >Edit</button>
                                </td>
                                <td className="py-3 px-6">
                                    <button
                                        onClick={() => {
                                            setIsHoveredId(item);
                                        }}
                                        className="bg-red-500 rounded-lg px-5 py-1.5 font-semibold text-black shadow-xl hover:bg-red-600 active:scale-95 duration-300"
                                    >Delete</button>
                                </td>
                            </tr>
                        )) :
                        <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                            <td colSpan='9' className="py-3 px-6 font-inika font-medium text-lg tracking-wider leading-10">
                                Test not found 😊
                            </td>
                        </tr>
                    }
                </tbody>
            </table>

            {/* edit modal */}
            <EditModal
                toggleEditMenu={toggleEditMenu}
                isEditMenuOpen={isEditMenuOpen}
                testCategorySub={testCategorySub}
                isHoveredId={isHoveredId}
            />
        </div>
    );
}

export default TeacherTestTable;
