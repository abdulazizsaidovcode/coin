import axios from "axios";
import React, { useEffect, useState } from "react";
import { byId, config, getFile, setConfig, url } from "../api/api";
import avatar from "../../assits/opacha.jpg";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import Loader from "../../assits/loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CategoryTable = ({ categoriesF, getCategory1, setCategoriesF }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to toggle the active state
  const toggleActive = (id) => {
    axios
      .post(url + "category/reset/" + id, config)
      .then(() => {
        getCategory1();
        toast.success("Reset category");
      })
      .catch((err) => {
        toast.error("Somesing is error");
        // console.log(err);
      });
  };

  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalEdit = () => setIsModalOpenEdit(true);
  const closeModalEdit = () => setIsModalOpenEdit(false);

  useEffect(() => {
    setConfig();
    getCategory1();
  }, []);

  // edit category
  const editCategory = async () => {
    setLoading(true);
    const img = new FormData();
    img.append("file", byId("attachmentId").files[0]);
    const editData = {
      attachmentId: 0,
      name: byId("category-name").value,
      categoryId: 0,
      programmingLanguage: null,
    };

    if (img.get("file") !== "undefined")
      await axios
        .post(url + "attachment/upload", img, config)
        .then((res) => (editData.attachmentId = res.data.body))
        .catch(() => console.log("img ketmadi"));

    await axios
      .put(url + "category/update/" + categoryInfo.id, editData, config)
      .then(() => {
        closeModalEdit();
        getCategory1();
        toast.success("Category saccessfulliy edited!");
        setLoading(false);
      })
      .catch(() => {
        toast.error("Xatolik yuz berdi!!!");
        setLoading(false);
        // console.log(editData);
      });
    setLoading(false);
  };

  // deleteCategory
  const deleteCategory = () => {
    axios
      .delete(url + "category/active/" + categoryInfo.id, config)
      .then(() => {
        closeModal();
        getCategory1();
        toast.success("Succes!");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Something is error!");
        setLoading(false);
        // console.log(err);
      });
  };

  // category search
  const categorySearch = () => {
    let searchVal = byId("searchCategory").value;
    if (!!searchVal)
      axios
        .get(url + "category/search?text=" + searchVal, config)
        .then((res) => setCategoriesF(res.data.body))
        .catch((err) => console.log(err, searchVal));
    else getCategory1();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-96">
            <div className="flex justify-between items-center border-b pb-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Delete Category
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <div className="mt-6 pb-6 border-b font-medium text-lg">
              Are you sure about that?
            </div>
            <div className="flex justify-between mt-5">
              <button onClick={closeModal} className="btm-close">
                No
              </button>
              <button
                onClick={() => {
                  setLoading(true);
                  deleteCategory();
                }}
                className="btm"
              >
                {loading ? <Loader /> : "Yes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpenEdit && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/2">
            <div className="flex justify-between items-center border-b pb-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Edit Category
              </h2>
              <button
                onClick={closeModalEdit}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <div className="mt-6 pb-6 border-b font-medium text-lg">
              <label
                htmlFor="attachmentId"
                className="block text-sm font-medium text-gray-700"
              >
                Choose file
              </label>
              <input
                id="attachmentId"
                type="file"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                                file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50
                                file:text-gray-700 hover:file:bg-gray-100"
              />

              <label
                htmlFor="category-name"
                className="block mt-7 text-sm font-medium text-gray-700"
              >
                Category name
              </label>
              <input
                id="category-name"
                defaultValue={categoryInfo && categoryInfo.name}
                placeholder="Enter category name"
                className="mt-1 w-full rounded-md py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300"
              />

              {/* <label for="programmingLanguage" className="block text-sm font-medium text-gray-700 mt-7">
                                Category programming language
                            </label>
                            <select id="programmingLanguage" className='mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full'>
                                <option selected disabled>
                                    {categoryInfo.programmingLanguage !== null
                                        ? categoryInfo.programmingLanguage
                                        : "No programming language"}
                                </option>
                                <option value="JAVA_SCRIPT">JavaScript</option>
                                <option value="PYTHON">Python</option>
                                <option value="JAVA">Java</option>
                                <option value="C++">C++</option>
                            </select> */}
            </div>
            <div className="flex justify-end gap-10 mt-5">
              <button onClick={closeModalEdit} className="btm-close">
                Close
              </button>
              <button onClick={editCategory} className="btm">
                {loading ? <Loader /> : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className=" mb-2 flex justify-between items-center flex-wrap">
        <button id="openMenuButton" className="btm">
          + Add
        </button>
        {/* <input
                    onChange={categorySearch}
                    id="searchCategory"
                    type='search'
                    className="block w-80 p-3 ps-3 text-sm border border-gray-300 rounded-lg 
                    bg-gray-50 focus:outline-0 duration-300 focus:border-blue-500  
                    dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 
                    dark:focus:border-blue-500"
                    placeholder="🔍  Search" /> */}
      </div>
      <div className="w-full bg-gray-100 py-8">
        <div className="w-full mx-auto">
          <div className="bg-white shadow-md rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr className="text-center">
                    {/* Table Headers */}
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      No
                    </th>
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Photo
                    </th>
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Name
                    </th>
                    {/* <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Description</th> */}
                    {/* <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">Active</th> */}
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {categoriesF.length !== 0 ? (
                    categoriesF.map((category, i) => (
                      <tr
                        key={category.id}
                        className="even:bg-slate-200 hover:bg-slate-300 duration-200 text-center"
                      >
                        <td className="py-3 px-6 border-b border-gray-200">
                          {i + 1}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200 flex justify-center items-center">
                         
                          <LazyLoadImage
                            src={
                              category.attachmentId === null
                                ? avatar
                                : getFile + category.attachmentId
                            }
                            alt="nofound"
                            effect="blur"
                            className="rounded-full w-14 h-14"
                          />
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200">
                          {category.name === null ? "Yo'q" : category.name}
                        </td>

                        <td className=" border-b border-gray-200">
                          <div className="flex gap-7 justify-center">
                            <button
                              onClick={() => {
                                openModalEdit();
                                setCategoryInfo(category);
                              }}
                              className="text-sm bg-yellow-500 hover:bg-yellow-600 duration-200 text-white 
                                                    py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => {
                                openModal();
                                setCategoryInfo(category);
                              }}
                              className="text-sm bg-red-500 hover:bg-red-600 duration-200 text-white 
                                                    py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="even:bg-slate-200 hover:bg-slate-300 duration-200">
                      <td className="py-3 px-6"></td>
                      <td className="py-3 px-6"></td>
                      <td className="py-3 px-6 font-inika font-medium text-lg tracking-wider leading-10">
                        <Icon icon="eos-icons:three-dots-loading" width="50" />
                      </td>
                      {/* <td className='py-3 px-6'></td> */}
                      <td className="py-3 px-6"></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryTable;
