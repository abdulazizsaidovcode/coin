import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { config, url } from '../api/api';
import { toast } from 'react-toastify';




const CategoryTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory();
  }, [])
  // Function to toggle the active state
  const getCategory = () => {
    axios.get(url + "category/list", config)
      .then((res) => {
        setCategories(res.data.body)
        console.log(res.data.body);
      })
      .catch((err) => {
        toast.dismiss("Category not found!")
      })
  };

  const categoryActive = (id) => {
    axios.put(url + "category/reset/" + id, config)
      .then((res) => {
        toast.success("good")
      })
      .catch((err) => {
        toast.error("false");
      })
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto space-y-8">
        <div className="bg-white shadow-md rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  {/* Table Headers */}
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">N/1</th>
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Photo</th>
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">P.L</th>
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Active</th>
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {categories.map((category, index) => (
                  <tr key={category.id}>
                    <td className="py-4 px-6 border-b border-gray-200">{index + 1}</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <img src={category.avatarUrl} alt="avatar" className="h-10 w-10 rounded-full" />
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">{category.name}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{category.programmingLanguage}</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <input
                        type="checkbox"
                        checked={category.active}
                        onChange={() => categoryActive(category.id)}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-0"
                      />
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">Edit</button>
                      <button className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline ml-3">Delete</button>
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
