import React, { useState } from 'react';

// Demo uchun ba'zi ma'lumotlar
const initialData = [
  { id: 1, name: 'Front-End', description: 'Tashqi qism', Coin: '503', active: true },
  { id: 2, name: 'Back-End', description: 'Orqa qism', Coin: '101', active: false },
 
  // ... Qo'shimcha ma'lumotlar bu yerga qo'shiladi
];

// Filterlar uchun kategoriyalar va guruhlar
const categories = ['All', 'F-1', 'found-2', 'G-1', 'G-4', 'g_6'];
const groups = ['All', 'Front-End', 'Back-End', 'Foundation', '3D-max'];

const TableWithFilters = () => {
  const [data, setData] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGroup, setSelectedGroup] = useState('All');

  // Checkbox holatini o'zgartirish uchun handler
  const toggleActive = (id) => {
    setData(data.map(item => item.id === id ? { ...item, active: !item.active } : item));
  };

  // Kategoriyalar va guruhlar bo'yicha filtrlash funksiyalari
  const handleFilter = (category, group) => {
    setSelectedCategory(category);
    setSelectedGroup(group);
    // Filtrlash logikasi
    const filtered = initialData.filter((item) => {
      const categoryMatch = category === 'All' || item.name === category;
      const groupMatch = group === 'All' || item.description === group;
      return categoryMatch && groupMatch;
    });
    setData(filtered);
  };

  return (
    <div className=" p-8 ml-64 w-full">
      <div className=" mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Hi Admin(a)</h1>
        <span className="text-sm text-gray-600">Welcome back to Coin system dashboard</span>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">students</h2>
      </div>
      <div className=" mb-4 flex justify-between">
        <button className="btm">+ Add</button>
        <input
          className="border border-blue-600 rounded  text-gray-700 mr-3 py-1 px-2  focus:outline-blue-700"
          type="text"
          placeholder="Search..."
          aria-label="Search input" />
      </div>

      <div>
        {/* Filterlar */}
        <div className="mb-4">
          {/* Kategoriyalar uchun filterlar */}
          <div className='flex mb-2 flex-wrap'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category, selectedGroup)}
                className={`px-4 mr-5 w-40 my-2 py-2 rounded-full ${selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-purple-300 text-black'
                  } hover:bg-purple-400 focus:outline-none transition-colors duration-150`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Guruhlar uchun filterlar */}
          <div className='flex flex-wrap'>
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => handleFilter(selectedCategory, group)}
                className={`px-4 w-40 mr-5 my-2 py-2 rounded-full ${selectedGroup === group ? 'bg-purple-600 text-white' : 'bg-purple-300 text-black'
                  } hover:bg-purple-400 focus:outline-none transition-colors duration-150`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>
        {/* Jadval */}
        <table className="w-full rounded-3xl rounded-t-3xl shadow-md .table-top">
          <thead className="bg-gray-800 text-white rounded-t-2xl uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Cion</th>
              <th className="py-3 px-6 text-center">Active</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-light">
            {data.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.description}</td>
                <td className="py-3 px-6 text-left">{item.Coin}</td>
                <td className="py-3 px-6 text-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded"
                    checked={item.active}
                    onChange={() => toggleActive(item.id)}

                  />
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">Edit</button>
                    <button className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline ml-3">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithFilters;
