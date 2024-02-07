import { byId } from "../../../../components/api/api";

const AddModal = (props) => {
    const { toggleMenu, isMenuOpen, testCategorySub } = props;

    // add test
    const addTest = () => {
        let addData = {
            id: 0,
            question: byId('question').value,
            categoryId: byId('categorySelect').value,
            processMinute: byId('teacherTime').value,
            "parameters": ["string"],
            "answer": [
                {
                    "values": ["string"],
                    "answer": "string"
                }
            ],
            grade: byId('teacherCoin').value,
            advice: byId('advice').value,
            active: true
        }
    }
    return (
        <div>
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className={`${isMenuOpen ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-40`}>
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => { toggleMenu() }}></div>
                                <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
                                    <div className="relative w-screen max-w-md">
                                        <div className="h-full flex flex-col bg-white overflow-y-auto">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-between pt-5 pb-2 border-b">
                                                    <h2 className="text-lg font-semibold font-inika text-gray-900" id="slide-over-heading">
                                                        Add Test
                                                    </h2>
                                                    <div className="ml-3 h-7 flex items-center">
                                                        <button onClick={() => { toggleMenu() }} className="bg-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
                                                            <span className="sr-only">Close panel</span>
                                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* form inputs */}
                                            <div className="bg-white p-6 rounded-lg font-inika">
                                                <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
                                                <textarea
                                                    id="question"
                                                    placeholder="Enter Question..."
                                                    rows="4" className="w-full p-2 mt-1 border rounded-md bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300"></textarea>

                                                <label htmlFor="advice" className="block text-sm font-medium mt-4 text-gray-700">Advice</label>
                                                <textarea
                                                    id="advice"
                                                    placeholder="Enter Advice..."
                                                    rows="3" className="w-full p-2 mt-1 border rounded-md bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300"></textarea>

                                                <label htmlFor="categorySelect" className="block text-sm font-medium text-gray-700 mt-4">
                                                    Select category
                                                </label>
                                                <select id="categorySelect" className='mt-1 p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full'>
                                                    <option selected disabled>Select category</option>
                                                    {testCategorySub && testCategorySub.map((item) =>
                                                        <option value={item.id}>{item.name}</option>
                                                    )}
                                                </select>

                                                <div className="flex justify-between items-center mt-4">
                                                    <div className="mr-1">
                                                        <label htmlFor="teacherTime" className="text-sm font-medium text-gray-700">
                                                            Time
                                                        </label>
                                                        <input id="teacherTime" placeholder="Enter time"
                                                            className="mt-1 w-full rounded-md p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />
                                                    </div>
                                                    <div className="ml-1">
                                                        <label htmlFor="teacherCoin" className="text-sm font-medium text-gray-700">
                                                            Coin
                                                        </label>
                                                        <input id="teacherCoin" placeholder="Enter coin"
                                                            className="mt-1 w-full rounded-md p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />
                                                    </div>
                                                </div>

                                                {/* plus inputs */}
                                                <div className="flex justify-between items-center my-3">
                                                    <div className="mr-1">
                                                        <label htmlFor="teacherParam" className="text-sm font-medium text-gray-700">
                                                            Parametr
                                                        </label>
                                                        <input id="teacherParam" placeholder="Enter parametr"
                                                            className="mt-1 w-full rounded-md p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />
                                                    </div>
                                                    <div className="ml-1 flex justify-between items-center">
                                                        <div className="mr-2">
                                                            <label htmlFor="teacherValue" className="text-sm font-medium text-gray-700">
                                                                Enter value
                                                            </label>
                                                            <input id="teacherValue" placeholder="Enter value"
                                                                className="mt-1 w-full rounded-md p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />
                                                        </div>
                                                        <span
                                                            className="font-bold text-black text-[1.5rem] mt-3 hover:cursor-pointer hover:text-slate-700 duration-300"
                                                        >+</span>
                                                    </div>
                                                </div>

                                                <label htmlFor="teacherAnswer" className="text-sm font-medium text-gray-700">
                                                    Answer
                                                </label>
                                                <input id="teacherAnswer" placeholder="Enter answer"
                                                    className="mt-1 w-full rounded-md p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />

                                                {/* buttons */}
                                                <div className="flex justify-end mt-10">
                                                    <button
                                                        onClick={() => { toggleMenu() }}
                                                        className="mr-3 bg-red-600 py-2.5 px-5 font-bold rounded-lg text-white active:scale-90 duration-300">Close</button>
                                                    <button className="btm">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddModal