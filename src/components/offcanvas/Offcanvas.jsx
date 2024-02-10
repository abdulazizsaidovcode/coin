import axios from "axios";
import React, { useState, useEffect } from "react";
import { byId, config, setConfig, url } from "../api/api";
import { toast } from "react-toastify";
import Loader from "../../assits/loader";

function Offcanvas({ getCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categoriesFafer, setCategoriesFather] = useState([]);
  const [loading, setLoading] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setConfig();
    getCategoryFather();

    const button = document.getElementById("openMenuButton");
    button.addEventListener("click", toggleMenu);

    return () => {
      button.removeEventListener("click", toggleMenu);
    };
  }, []);

  const getCategoryFather = () => {
    axios
      .get(url + "category/teacher/category", config)
      .then((res) => setCategoriesFather(res.data.body))
      .catch(() => console.log("kelmadi"));
  };

  // add category
  const addCategory = async () => {
    const img = new FormData();
    img.append("file", byId("image").files[0]);
    const addData = {
      attachmentId: 0,
      name: byId("category").value,
      categoryId: 0,
      programmingLanguage: null,
    };

    if (img.get("file") !== "undefined")
      await axios
        .post(url + "attachment/upload", img, config)
        .then((res) => (addData.attachmentId = res.data.body))
        .catch(() => console.log("img ketmadi"));

    await axios
      .post(url + "category/save", addData, config)
      .then(() => {
        toggleMenu();
        getCategory();
        toast.success("Category saccessfulliy saved!");
        setLoading(false)
      })
      .catch(() => {
        toast.error("Something is error?");
        setLoading(false)
        // console.log(addData);
      });
  };

  return (
    <div>
      <button id="openMenuButton"></button>
      {/* Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/2">
            <div className='flex justify-between items-center border-b pb-1'>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Add Category</h2>
                <button onClick={toggleMenu} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="mt-6 pb-6 border-b font-medium text-lg">
                <label htmlFor='attachmentId' className="block text-sm font-medium text-gray-700">Choose file</label>
                <input
                    id='image'
                    type="file"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                    file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50
                    file:text-gray-700 hover:file:bg-gray-100" />

                <label htmlFor="category-name" className="block mt-7 text-sm font-medium text-gray-700">
                    Category name
                </label>
                <input
                    id="category"
                    placeholder="Enter gruop name"
                    className="mt-1 w-full rounded-md py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />

                

              
            </div>
            <div className='flex justify-end gap-10 mt-5'>
                <button onClick={toggleMenu} className="btm-close">
                    Close
                </button>
                <button onClick={() => {
                  setLoading(true)
                  addCategory()
                }} className="btm">
                    {loading ? <Loader/> : "Save"}
                </button>
            </div>
        </div>
    </div>
      )}
    </div>
  );
}

export default Offcanvas;
