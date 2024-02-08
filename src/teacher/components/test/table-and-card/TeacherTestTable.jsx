import EditModal from "../modals/EditModal";
import { useState } from "react";

function TeacherTestTable({ getTestTable, allTestTable }) {
    const [isEditMenuOpen, setEditIsMenuOpen] = useState(false);
    const [isHoveredAtribute, setIsHoveredAtribute] = useState(false);
    const [isHoveredAnswer, setIsHoveredAnswer] = useState(false);
    const answerList = [];

    const toggleEditMenu = () => setEditIsMenuOpen(!isEditMenuOpen);
    for (let i = 0; i < allTestTable.length; i++) {
        answerList.push(allTestTable[i].answer)
    }

    // console.log(answerList);
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
                    {allTestTable ?
                        allTestTable.map((item, i) => (
                            <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                                <td className="py-3 px-6">{i + 1}</td>
                                <td className="py-3 px-6">{item.question}</td>
                                <td className="py-3 px-6">{item.time}</td>
                                <td className="py-3 px-6">{item.coin}</td>
                                <td className="py-3 px-6">{item.categoryName}</td>
                                <td
                                    className="py-3 px-6 hover:cursor-default relative"
                                    onMouseEnter={() => setIsHoveredAtribute(true)}
                                    onMouseLeave={() => setIsHoveredAtribute(false)}
                                >
                                    Atribute
                                    {isHoveredAtribute && (
                                        answerList.map((item) => (
                                            <div className="absolute bottom-10 -left-24 shadow-lg border border-slate-500 bg-slate-50 rounded-2xl font-semibold tracking-wider px-5 py-2">
                                                {item}
                                            </div>
                                        ))
                                    )}
                                </td>
                                <td
                                    className="py-3 px-6 hover:cursor-default relative"
                                    onMouseEnter={() => setIsHoveredAnswer(true)}
                                    onMouseLeave={() => setIsHoveredAnswer(false)}
                                >
                                    Answer
                                    {isHoveredAnswer && (
                                        <div className="absolute bottom-10 -left-24 shadow-lg border border-slate-500 bg-slate-50 rounded-2xl font-semibold tracking-wider px-5 py-2">
                                            Inline Answer
                                        </div>
                                    )}
                                </td>
                                <td className="py-3 px-6">
                                    <button
                                        className="bg-yellow-500 rounded-lg px-5 py-1.5 font-semibold text-black shadow-xl hover:bg-yellow-600 active:scale-95 duration-300"
                                        onClick={() => {
                                            toggleEditMenu();
                                        }}
                                    >Edit</button>
                                </td>
                                <td className="py-3 px-6">
                                    <button
                                        className="bg-red-500 rounded-lg px-5 py-1.5 font-semibold text-black shadow-xl hover:bg-red-600 active:scale-95 duration-300"
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                        : ''
                    }
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
                </tbody>
            </table>

            {/* edit modal */}
            <EditModal isEditMenuOpen={isEditMenuOpen} toggleEditMenu={toggleEditMenu} />
        </div>
    );
}

export default TeacherTestTable;
