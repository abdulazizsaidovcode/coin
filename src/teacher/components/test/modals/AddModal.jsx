import { useEffect, useState } from "react";
import { byId, config, url } from "../../../../components/api/api";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingBtn from "../../loadingBtn/LoadingBtn";

const AddModal = (props) => {
    const {
        toggleMenu,
        isMenuOpen,
        categoryFather,
        testCategorySub,
        getTestTable,
        getAllTestCard,
        getTestCategoryChild
    } = props;

    const testCategoryId = sessionStorage.getItem('testCategoryId');
    const [divCount, setDivCount] = useState(1);
    const [answers, setAnswers] = useState([{ answer: '', values: [] }]);
    const [parameters, setParameters] = useState(['']);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (index, field, value) => {
        const updatedAnswers = [...answers];
        if (field === 'answer') {
            updatedAnswers[index].answer = value;
        } else {
            updatedAnswers[index].values = value.split(',').map(val => val.trim());
        }
        setAnswers(updatedAnswers);
    };

    const handleAddDiv = () => {
        setDivCount(prevCount => prevCount + 1);
        setAnswers(prevAnswers => [...prevAnswers, { answer: '', values: [] }]);
    };

    const handleRemoveDiv = () => {
        if (divCount > 1) {
            setDivCount(prevCount => prevCount - 1);
            setAnswers(prevAnswers => prevAnswers.slice(0, -1));
        }
    };

    const handleInputChangeP = (index, value) => {
        const updatedParameters = [...parameters];
        updatedParameters[index] = value;
        setParameters(updatedParameters);
    };

    const handleAddParameter = () => {
        setParameters(prevParameters => [...prevParameters, '']);
    };

    const handleRemoveParameter = (index) => {
        setParameters(prevParameters => prevParameters.filter((_, i) => i !== index));
    };

    // add test
    const addTest = () => {
        setIsLoading(true);
        let addData = {
            id: 0,
            question: byId('question').value,
            categoryId: byId('categorySelectChild').value,
            processMinute: byId('teacherTime').value,
            parameters: parameters,
            answer: answers,
            grade: byId('teacherCoin').value,
            advice: byId('advice').value,
            active: true
        }
        axios.post(`${url}test`, addData, config)
            .then(() => {
                toast.success('Successfully saved the test✔');
                toggleMenu();
                getTestTable(testCategoryId);
                setIsLoading(false);
                getAllTestCard();
            })
            .catch(err => {
                setIsLoading(false);
                toast.error('Someting is error❌');
            });
    }

    return (
        <div>
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className={`${isMenuOpen ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-40`}>
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={toggleMenu}></div>
                                <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
                                    <div className="relative w-screen max-w-md">
                                        <div className="h-full flex flex-col bg-white overflow-y-auto">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-between pt-5 pb-2 border-b">
                                                    <h2 className="text-lg font-semibold font-inika text-gray-900" id="slide-over-heading">
                                                        Add Test
                                                    </h2>
                                                    <div className="ml-3 h-7 flex items-center">
                                                        <button onClick={toggleMenu} className="bg-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
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

                                                <label htmlFor="categorySelectFather" className="block text-sm font-medium text-gray-700 mt-4">
                                                    Select father category
                                                </label>
                                                <select
                                                    id="categorySelectFather"
                                                    onChange={(e) => {
                                                        getTestCategoryChild(e.target.value);
                                                    }} className='mt-1 p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full'>
                                                    <option selected disabled>Select father category</option>
                                                    {categoryFather && categoryFather.map((item) =>
                                                        <option value={item.id}>{item.name}</option>
                                                    )}
                                                </select>

                                                <label htmlFor="categorySelectChild" className="block text-sm font-medium text-gray-700 mt-4">
                                                    Select child category
                                                </label>
                                                <select
                                                    disabled={testCategorySub.length !== 0 ? false : true}
                                                    id="categorySelectChild"
                                                    className='mt-1 p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full'>
                                                    <option selected disabled>Select child category</option>
                                                    {testCategorySub && testCategorySub.map((item) =>
                                                        <option value={item.id}>{item.name}</option>
                                                    )}
                                                </select>

                                                <div className="flex justify-between items-center my-4">
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

                                                {parameters.map((param, index) => (
                                                    <div key={index} className="w-full flex justify-between items-center gap-5">
                                                        <div className="w-[90%]">
                                                            <label htmlFor={`teacherParam${index}`} className="text-sm font-medium text-gray-700">
                                                                Parameters
                                                            </label>
                                                            <input
                                                                id={`teacherParam${index}`}
                                                                placeholder="Enter parameter"
                                                                className="mt-1 w-full rounded-md p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300"
                                                                value={param}
                                                                onChange={e => handleInputChangeP(index, e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="w-[10%] flex justify-end flex-wrap text-[1.5rem] leading-7 mt-5 font-bold">
                                                            <span className="w-full text-center hover:cursor-pointer hover:text-slate-400 duration-300" onClick={handleAddParameter}>+</span>
                                                            {parameters.length > 1 && (
                                                                <span className="w-full text-center hover:cursor-pointer hover:text-slate-400 duration-300" onClick={() => handleRemoveParameter(index)}>-</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}

                                                {/* plus inputs */}
                                                <div className="flex justify-between items-center flex-wrap">
                                                    {[...Array(divCount)].map((_, index) => (
                                                        <div key={index} className="flex justify-start w-[90%] mt-4">
                                                            <div className="mr-1">
                                                                <label htmlFor={`teacherAnswer${index}`} className="text-sm font-medium text-gray-700">
                                                                    Answer
                                                                </label>
                                                                <input
                                                                    id={`teacherAnswer${index}`}
                                                                    placeholder="Enter answer"
                                                                    className="mt-1 w-full rounded-md p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300"
                                                                    value={answers[index].answer}
                                                                    onChange={e => handleInputChange(index, 'answer', e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="mr-2">
                                                                <label htmlFor={`teacherValue${index}`} className="text-sm font-medium text-gray-700">
                                                                    Enter value
                                                                </label>
                                                                <input
                                                                    id={`teacherValue${index}`}
                                                                    placeholder="Enter value"
                                                                    className="mt-1 w-full rounded-md p-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300"
                                                                    value={answers[index].values.join(',  ')}
                                                                    onChange={e => handleInputChange(index, 'values', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="w-[10%] leading-6">
                                                        <button
                                                            className="font-bold text-black text-[1.5rem] mt-10 w-full
                                                            hover:text-slate-400 duration-300"
                                                            onClick={handleAddDiv}
                                                        >+</button>
                                                        <button
                                                            className="font-bold text-black text-[1.8rem] w-full
                                                            hover:text-slate-400 duration-300"
                                                            onClick={handleRemoveDiv}
                                                        >-</button>
                                                    </div>
                                                </div>

                                                {/* buttons */}
                                                <div className="flex justify-end mt-10">
                                                    <button
                                                        onClick={toggleMenu}
                                                        className="mr-3 bg-slate-600 py-2.5 px-5 font-bold rounded-lg text-white active:scale-90 duration-300">Close</button>
                                                    <button
                                                        className={`btm ${isLoading ? 'cursor-not-allowed opacity-70' : ''}`}
                                                        onClick={addTest}
                                                        disabled={isLoading}
                                                    >
                                                        {isLoading ? <LoadingBtn /> : 'Save'}
                                                    </button>
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

export default AddModal;