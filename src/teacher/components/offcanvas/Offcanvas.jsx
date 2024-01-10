import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { byId, config, setConfig, url } from '../../../components/api/api';
import { toast } from 'react-toastify';

function Offcanvas() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categoriesFafer, setCategoriesFather] = useState([]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setConfig();
        getCategoryFather();

        const button = document.getElementById('openMenuButton');
        button.addEventListener('click', toggleMenu);

        return () => {
            button.removeEventListener('click', toggleMenu);
        };
    }, []);

    const getCategoryFather = () => {
        axios.get(url + "category/teacher/category/list", config)
            .then(res => setCategoriesFather(res.data.body))
            .catch(() => console.log("kelmadi"))
    }

    // add category
    const addCategory = async () => {
        const img = new FormData();
        img.append('file', byId('attachmentId').files[0]);
        const addData = {
            attachmentId: 0,
            name: byId("category-name").value,
            categoryId: byId("categorySelect").value,
            programmingLanguage: byId("programmingLanguage").value
        }

        if (img.get('file') !== 'undefined')
            await axios.post(url + "attachment/upload", img, config)
                .then(res => addData.attachmentId = res.data.body)
                .catch(() => console.log("img ketmadi"))

        await axios.post(url + "category/save", addData, config)
            .then(() => {
                toggleMenu();
                toast.success("Category saccessfulliy saved!")
            })
            .catch(() => {
                toast.error("Xatolik yuz berdi!!!")
                // console.log(addData);
            })
    }

    return (
        <div>
            <button id="openMenuButton"></button>
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
                                                        Add Category
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
                                            <div className="bg-white p-6 mt-10 rounded-lg font-inika">
                                                <label className="block text-sm font-medium text-gray-700">Choose file</label>
                                                <input
                                                    id='attachmentId'
                                                    type="file"
                                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                                                    file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50
                                                    file:text-gray-700 hover:file:bg-gray-100" />

                                                <label for="category-name" className="block mt-7 text-sm font-medium text-gray-700">
                                                    Category name
                                                </label>
                                                <input id="category-name" placeholder="Enter category name"
                                                    className="mt-1 w-full rounded-md py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />

                                                <label for="categorySelect" className="block text-sm font-medium text-gray-700 mt-7">
                                                    Category select
                                                </label>
                                                <select id="categorySelect" className='mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full'>
                                                    <option selected disabled>Category select</option>
                                                    {categoriesFafer.map((item) =>
                                                        <option value={item.id}>{item.name}</option>
                                                    )}
                                                </select>
                                                <label for="programmingLanguage" className="block text-sm font-medium text-gray-700 mt-7">
                                                    Category programming language
                                                </label>
                                                <select id="programmingLanguage" className='mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full'>
                                                    <option selected disabled>Category programming language</option>
                                                    <option value="JAVA_SCRIPT">JavaScript</option>
                                                    <option value="PYTHON">Python</option>
                                                    <option value="JAVA">Java</option>
                                                    <option value="C++">C++</option>
                                                </select>

                                                <div className="flex items-center mt-7">
                                                    <input id="active" type="checkbox"
                                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                                    <label for="active" className="ml-2 text-md text-gray-900 font-medium">Active</label>
                                                </div>

                                                <div className="flex justify-end mt-10">
                                                    <button
                                                        onClick={toggleMenu}
                                                        className="mr-3 bg-red-600 py-2.5 px-5 font-bold rounded-lg text-white active:scale-90 duration-300">Close</button>
                                                    <button className="btm" onClick={addCategory}>Save</button>
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
    );
}

export default Offcanvas;
