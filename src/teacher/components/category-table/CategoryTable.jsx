import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { byId, config, getFile, setConfig, url } from '../../../components/api/api';
import avatar from "../../../assits/opacha.jpg";
import { toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoadingBtn from '../loadingBtn/LoadingBtn';

const CategoryTable = ({ categories, setCategories, getCategoryChild, categorysub, filterCategory }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const [isLoadingEdit, setIsLoadingEdit] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [categoryInfo, setCategoryInfo] = useState([]);

    // Modalni ochish va yopish uchun funksiyalar
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    const openModalEdit = () => setIsModalOpenEdit(true)
    const closeModalEdit = () => setIsModalOpenEdit(false)

    useEffect(() => {
        setConfig();
        getCategoryChild();
    }, []);

    // edit category
    const editCategory = async () => {
        setIsLoadingEdit(true);
        const img = new FormData();
        img.append('file', byId('attachmentId').files[0]);
        const editData = {
            attachmentId: 0,
            name: byId("category-name").value,
            categoryId: byId("categorySelect").value,
            programmingLanguage: byId("programmingLanguage").value
        }

        if (img.get('file') !== 'undefined')
            await axios.post(url + "attachment/upload", img, config)
                .then(res => editData.attachmentId = res.data.body)
                .catch(() => console.log("img id ketmadi"))

        await axios.put(url + "category/update/" + categoryInfo.id, editData, config)
            .then(() => {
                closeModalEdit();
                getCategoryChild();
                toast.success("Category saccessfulliy edited!");
                setIsLoadingEdit(false);
            })
            .catch(() => {
                toast.error("Category error editing!");
                setIsLoadingEdit(false);
            });
    }

    // deleteCategory
    const deleteCategory = () => {
        setIsLoadingDelete(true);
        axios.delete(url + "category/active/" + categoryInfo.id, config)
            .then(() => {
                closeModal();
                getCategoryChild();
                toast.success("Category deleted successfully!");
                setIsLoadingDelete(false);
            })
            .catch(() => {
                toast.error("Something is error!");
                setIsLoadingDelete(false);
            });
    }

    return (
        <>
            {isModalOpen && (
                <div className={`${isModalOpen ? 'zoom-modal' : ''} fixed inset-0 flex items-center justify-center z-50`}>
                    <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-lg shadow-gray-600 px-8 py-3 w-96">
                        <div className='flex justify-between items-center border-b pb-1'>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Disable active to false</h2>
                            <button onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="mt-6 pb-6 border-b font-medium text-lg">
                            Are you sure about that?
                        </div>
                        <div className='flex justify-end items-center mt-5'>
                            <button onClick={closeModal} className="font-semibold bg-slate-700 py-2 px-6 mr-3 text-white rounded-lg active:scale-90 duration-300">
                                Close
                            </button>
                            <button
                                onClick={deleteCategory}
                                className={`font-semibold bg-red-500 py-2 px-6 text-white rounded-lg active:scale-90
                                duration-300 ${isLoadingDelete ? 'cursor-not-allowed opacity-70' : ''}`}
                            >
                                {isLoadingDelete ? <div className='py-[.35rem]'><LoadingBtn /></div> : 'Yes'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isModalOpenEdit && (
                <div className={`${isModalOpenEdit ? 'zoom-modal' : ''} fixed inset-0 flex items-center justify-center z-50`}>
                    <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 mt-5 w-full md:w-[80%] lg:w-[70%] xl:w-1/2">
                        <div className='flex justify-between items-center border-b pb-1'>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Edit Category</h2>
                            <button onClick={closeModalEdit} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="mt-6 pb-6 border-b font-medium text-lg">
                            <label htmlFor='attachmentId' className="block text-sm font-medium text-gray-700">Choose file</label>
                            <input
                                id='attachmentId'
                                type="file"
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                                file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50
                                file:text-gray-700 hover:file:bg-gray-100" />

                            <label htmlFor="category-name" className="block mt-7 text-sm font-medium text-gray-700">
                                Category name
                            </label>
                            <input
                                id="category-name"
                                defaultValue={categoryInfo && categoryInfo.name}
                                placeholder="Enter category name"
                                className="mt-1 w-full rounded-md py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />

                            <label for="categorySelect" className="block text-sm font-medium text-gray-700 mt-7">
                                Category select
                            </label>
                            <select id="categorySelect" className='mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full'>
                                <option selected disabled>
                                    Category select
                                </option>
                                {categories.map((item) =>
                                    <option value={item.id}>{item.name}</option>
                                )}
                            </select>

                            <label for="programmingLanguage" className="block text-sm font-medium text-gray-700 mt-7">
                                Category programming language
                            </label>
                            <select id="programmingLanguage" className='mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full'>
                                <option selected disabled>
                                    {categoryInfo.programmingLanguage !== null
                                        ? categoryInfo.programmingLanguage
                                        : "No programming language"}
                                </option>
                                <option value="JAVA_SCRIPT">JavaScript</option>
                                <option value="PYTHON">Python</option>
                                <option value="JAVA">Java</option>
                                <option value="C++">C++</option>
                            </select>
                        </div>
                        <div className='flex justify-end items-center mt-5'>
                            <button onClick={closeModalEdit} className="font-semibold bg-slate-700 py-2 px-6 mr-3 text-white rounded-lg active:scale-90 duration-300">
                                Close
                            </button>
                            <button
                                onClick={editCategory}
                                className={`font-semibold bg-yellow-500 py-2 px-6 text-white rounded-lg 
                                active:scale-90 duration-300 ${isLoadingEdit ? 'cursor-not-allowed opacity-70' : ''}`}
                                disabled={isLoadingEdit}
                            >
                                {isLoadingEdit ? <div className='py-[.35rem]'><LoadingBtn /></div> : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="mb-4 flex justify-between items-center flex-wrap">
                <button
                    id="openMenuButton"
                    className="btm">
                    + Add
                </button>
                {/* <input
                    onChange={categorySearch}
                    id="searchCategory"
                    type='search'
                    className="block w-80 p-3 ps-3 text-sm border border-gray-300 rounded-lg 
                    bg-gray-50 focus:outline-0 duration-300 focus:border-blue-500  
                    dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 
                    dark:focus:border-blue-500"
                    placeholder="🔍  Search" /> */}
            </div>
            <button
                onClick={getCategoryChild}
                className="px-10 py-2.5 mr-5 my-2 rounded-3xl shadow-lg font-inika font-semibold tracking-wide text-xl
                    bg-purple-500 text-white hover:bg-purple-700 active:scale-95 focus:outline-none focus:bg-purple-700 duration-300">
                All Category
            </button>
            {categories && categories.map(item => (
                <button
                    onClick={async () => {
                        await filterCategory(item.id);
                    }}
                    key={item.id}
                    className="px-10 py-2.5 mr-5 my-2 rounded-3xl shadow-lg font-inika font-semibold tracking-wide text-xl
                    bg-purple-500 text-white hover:bg-purple-700 active:scale-95 focus:outline-none focus:bg-purple-700 duration-300">
                    {item.name}
                </button>
            ))}
            <div className="w-full bg-gray-100 py-8">
                <div className="w-full mx-auto">
                    <div className="bg-white shadow-md shadow-slate-400 rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white">
                                    <tr className='text-center'>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">No</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Photo</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Name</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">P.L</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Active</th>
                                        <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {categorysub ?
                                        categorysub.map((category, i) => (
                                            <tr key={category.id} className='even:bg-slate-200 hover:bg-slate-300 duration-200 text-center'>
                                                <td className="py-5 px-6 border-b border-gray-200">{i + 1}</td>
                                                <td className="py-5 px-6 border-b border-gray-200 flex justify-center items-center">
                                                    <LazyLoadImage
                                                        src={category.attachmentId === null ? avatar : getFile + category.attachmentId}
                                                        alt="avatar"
                                                        effect="blur"
                                                        className="h-10 w-10 scale-150 rounded-full object-cover"
                                                    />
                                                </td>
                                                <td className="py-5 px-6 border-b border-gray-200">
                                                    {category.name === null ? "Yo'q" : category.name}
                                                </td>
                                                <td className="py-5 px-6 border-b border-gray-200">
                                                    {category.programmingLanguage === null ? "Yo'q" : category.programmingLanguage}
                                                </td>
                                                <td className="py-5 px-6 border-b border-gray-200">
                                                    <input
                                                        type="checkbox"
                                                        checked={category.active}
                                                        onClick={() => {
                                                            openModal();
                                                            setCategoryInfo(category)
                                                        }}
                                                        className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-0"
                                                    />
                                                </td>
                                                <td className="py-5 px-6 border-b border-gray-200">
                                                    <button
                                                        onClick={() => {
                                                            openModalEdit();
                                                            setCategoryInfo(category);
                                                        }}
                                                        className="text-sm bg-yellow-500 hover:bg-yellow-600 duration-200 text-white 
                                                    py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow-md shadow-yellow-700">Edit</button>

                                                </td>
                                            </tr>
                                        )) :
                                        <tr className='even:bg-slate-200 hover:bg-slate-300 duration-200'>
                                            <td className="py-5 px-6 font-inika font-medium text-lg tracking-wider leading-10 text-center" colSpan='6'>
                                                Category not found 😊
                                            </td>
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

export default CategoryTable;
