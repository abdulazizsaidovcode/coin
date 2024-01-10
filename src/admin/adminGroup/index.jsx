import React, {useEffect, useState} from 'react';
import '../../globalcss/style.css';
import {addGroup, byId, editGroup, getCategory, getGroup, getTeacher, setConfig} from '../../components/api/api';
import AdminGroupTable from "./categorytable";

const AdminGroup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [gObj, setGObj] = useState(null);
    const [teachers, setTeacher] = useState(null);
    const [categories, setCategory] = useState(null);
    const [group, setGroup] = useState(null);

    useEffect(() => {
        setConfig();
        getTeacher(setTeacher);
        getCategory(setCategory);
        getGroup(setGroup);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
        setGObj(null);
    }
    const closeModal = () => setIsModalOpen(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: byId('name').value,
            categoryId: byId('category').value,
            teacherId: byId('teacher').value
        }
        if (gObj) editGroup(closeModal, data, gObj.id, setGroup);
        else addGroup(closeModal, data);
    };

    function editModal(item) {
        setGObj(item);
        setIsModalOpen(true);
    }

    return (
        <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <button id="openMenuButton" className="btm" onClick={openModal}>+ Add</button>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                     onClick={closeModal}>
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
                         onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">{gObj ? "Edit Group" : "Add New Group"}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input id="name" required placeholder='Name' defaultValue={gObj ? gObj.name : ''}
                                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                            </div>
                            <div>
                                <label htmlFor="category"
                                       className="block text-sm font-medium text-gray-700">Category</label>
                                <select id='category' className="border text-sm rounded-lg w-full p-2.5">
                                    <option value='0' selected disabled>Select Category</option>
                                    {categories && categories.map((item, i) =>
                                        <option key={i} value={item.id}>{item.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="teacher"
                                       className="block text-sm font-medium text-gray-700">Teacher</label>
                                <select id='teacher' className="border text-sm rounded-lg w-full p-2.5">
                                    <option value='0' selected disabled>Select Category</option>
                                    {teachers && teachers.map((item, i) =>
                                        <option key={i} value={item.id}>{item.fullName}</option>)}
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <button type="button" onClick={closeModal} className="btm">Close</button>
                                <button type="submit" className="btm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {group && <AdminGroupTable editModal={editModal} group={group}/>}
        </div>
    );
};

export default AdminGroup;