import axios from 'axios';
import React, { useState } from 'react';
import { config, url } from '../api/api';
import { toast } from 'react-toastify';




const CategoryTable = (categories) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  console.log("salom hammaga" + categories);
  // Function to toggle the active state
  

  const categoryActive = (id) => {
    axios.post(url + "category/reset/" + id, config)
      .then(() => {
        toast.success("good")
      })
      .catch(() => {
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
                {categories.length && categories.map((category, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6 border-b border-gray-200">{index + 1}</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <img src={category.attachmentId} alt="avatar" className="h-10 w-10 rounded-full" />
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
                      <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline" onClick={openModal}>Edit</button>
                      <button className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline ml-3">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Create New Product
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 m-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
              <button className="btm-close me-2 bg-red-900">
                Close
              </button>
              <button type="submit" className="btm">
                Save
              </button>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default CategoryTable;
