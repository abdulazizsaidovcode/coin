import React, { useState } from 'react';
import '../../globalcss/style.css';
import { config, setConfig, url } from '../../components/api/api';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminGroupTable from './categorytable';

const AdminGroup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        categoryId: 0,
        teacherId: 0
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfig();
        axios.post("http://137.184.13.215/group/save", formData, config)
            .then(response => {
                toast.success("Guruh muvoffaqiyatli qo'shildi!");
                closeModal();
            })
            .catch(error => {
                console.error("Guruh qo'shilmadi 😭", error);
                toast.error("Ma'lumotlarni yuborishda xatolik!");
            });
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <button id="openMenuButton" className="btm" onClick={openModal}>
                + Add
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={closeModal}>
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Add New Group</h2>
                        <form onSubmit={handleSubmit} className="space-y-6
">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">Category ID</label>
                                <input
                                    type="number"
                                    name="categoryId"
                                    id="categoryId"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={formData.categoryId}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700">Teacher ID</label>
                                <input
                                    type="number"
                                    name="teacherId"
                                    id="teacherId"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={formData.teacherId}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-between">
                                <button type="button" onClick={closeModal} className="btm">
                                    Close
                                </button>
                                <button type="submit" className="btm">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <AdminGroupTable />
        </div>
    );
};

export default AdminGroup;