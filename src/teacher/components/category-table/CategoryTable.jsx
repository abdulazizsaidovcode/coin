import React, { useState } from 'react';

const initialCategories = [
    { id: 1, name: 'Front-End', description: 'Tashqi qism', programmingLanguage: 'React', active: true },
    { id: 2, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: false },
    { id: 3, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: true },
    { id: 4, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: false },
    { id: 5, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: true },
    { id: 6, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: false },
];

const CategoryTable = () => {
    const [categories, setCategories] = useState(initialCategories);

    // Function to toggle the active state
    const toggleActive = (id) => {
        setCategories(categories.map(category => {
            if (category.id === id) {
                return { ...category, active: !category.active };
            }
            return category;
        }));
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto space-y-8">
                <div className="bg-white shadow-md rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    {/* Table Headers */}
                                    <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">No</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Photo</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">P.L</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Active</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {categories.map((category, i) => (
                                    <tr key={category.id} className='even:bg-slate-100 hover:bg-slate-200 duration-150'>
                                        <td className="py-4 px-6 border-b border-gray-200">{i + 1}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">
                                            <img src={category.avatarUrl} alt="avatar" className="h-10 w-10 rounded-full" />
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200">{category.name}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{category.description}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{category.programmingLanguage}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">
                                            <input
                                                type="checkbox"
                                                checked={category.active}
                                                onChange={() => toggleActive(category.id)}
                                                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-0"
                                            />
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200">
                                            <button className="text-sm bg-yellow-500 hover:bg-yellow-600 duration-200 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">Edit</button>
                                            <button className="text-sm bg-red-500 hover:bg-red-700 duration-200 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline ml-3">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryTable;