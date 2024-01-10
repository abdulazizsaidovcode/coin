// import React from "react";
import CategoryTable from "../categorytable";
import "../../globalcss/style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { byId, url } from "../api/api";
import { config } from "@fortawesome/fontawesome-svg-core";
import { toast } from "react-toastify";

function Category() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni ochish va yopish uchun holat
  const [categories, setCategories] = useState(null);

  const categoryObj = {}

  useEffect(() => {
    getCategory();
  }, []);

  function getCategory() {
    axios
      .get(url + "category/father/category", config)
      .then((res) => {
        setCategories(res.data.body);
        console.log(res.data.body);
      })
      .catch(() => {
        toast.dismiss("Category not found!");
      });
  }



  console.log("malumotcha  " + categories);

  const addCategoty = () => {
    axios.post(
      (url = "category/save"),
      {
        name: byId("name").value,
        attachmentId: 1,
        categoryId: "",
        programmingLanguage: byId("language").value,
      },
      config
    )
    .then(() => {
        toast.success("category succesfully add!")
    })
    .catch((err) => {
        toast.error("something is error?")
        })
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-gray-100 min-h-screen p-8 w-full">
      <div className="mt-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Category</h2>
      </div>
      <div className=" mb-2 flex justify-between">
        <button id="openMenuButton" onClick={openModal} className="btm">
          + Add
        </button>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </div>
      <CategoryTable categories={categories} />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Add category
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
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    addCategoty();
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

export default Category;
