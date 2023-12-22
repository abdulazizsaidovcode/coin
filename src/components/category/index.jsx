import React, { useState } from 'react';

// Initial categories data
const initialCategories = [
  { id: 1, name: 'Front-Ent', description: 'Tashqi qism', programmingLanguage: 'React', active: true },
  { id: 2, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: false },
  { id: 3, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: false },
  { id: 4, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: false },
  { id: 5, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: false },
  { id: 6, name: 'Back-End', description: 'Orqa qism', programmingLanguage: 'Java', active: false },
  // ... more categories
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Category</h2>
        </div>
        <div className="bg-white shadow-md rounded-3xl overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-800 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                  No
                </th>
                <th className="py-3 px-6 bg-gray-800 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                  Photo
                </th>
                <th className="py-3 px-6 bg-gray-800 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-3 px-6 bg-gray-800 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                  Description
                </th>
                <th className="py-3 px-6 bg-gray-800 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                  P.L
                </th>
                <th className="py-3 px-6 bg-gray-800 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                  Active
                </th>
                <th className="py-3 px-6 bg-gray-800 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {categories.map((category, index) => (
                <tr key={category.id}>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <img src="/path-to-your-image.png" alt="avatar" className="h-10 w-10 rounded-full" />
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {category.name}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {category.description}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {category.programmingLanguage}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <input 
                      type="checkbox" 
                      checked={category.active} 
                      onChange={() => toggleActive(category.id)} 
                      className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-0" 
                    />
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">
                      Edit
                    </button>
                    <button className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline ml-3">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;