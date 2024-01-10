import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { byId, config, setConfig, url } from '../api/api';
import { toast } from 'react-toastify';

function Offcanvas( {getCategory}) {
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
        axios.get(url + "category/teacher/category", config)
            .then(res => setCategoriesFather(res.data.body))
            .catch(() => console.log("kelmadi"))
    }

    // add category
    const addCategory = async () => {
        const img = new FormData();
        img.append('file', byId('image').files[0]);
        const addData = {
            attachmentId: 0,
            name: byId("category").value,
            categoryId: 0,
            programmingLanguage: byId("language").value
        }

        if (img.get('file') !== 'undefined')
            await axios.post(url + "attachment/upload", img, config)
                .then(res => addData.attachmentId = res.data.body)
                .catch(() => console.log("img ketmadi"))

        await axios.post(url + "category/save", addData, config)
            .then(() => {
                toggleMenu();
                getCategory()
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
             {/* Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Add category
              </h2>
              <button
                onClick={toggleMenu}
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
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Programming language    
                  </label>
                  <select name="" id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected disabled>Select language</option>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Java_script">Java_script</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Image
                  </label>
                  <input
                    id="image"
                    type="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="btm-close me-2 bg-red-900"
                  onClick={toggleMenu}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    addCategory();
                  }}
                  className="btm"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
    );
}

export default Offcanvas;
