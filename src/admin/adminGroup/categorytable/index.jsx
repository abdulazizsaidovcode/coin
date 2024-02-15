import axios from "axios";
import React, { useEffect, useState } from "react";
import { byId, config, setConfig, url } from "../../../components/api/api";
import avatar from "../../../assits/itca.jpg";
import { toast } from "react-toastify";
import NotFound from "../../../NotFound";
import Loader from "../../../assits/loader";

const GroupsTable = ({ subcategory, teacher, category, groups, setGroups, getGroup }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [gropuId, setGroupId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);

  const toggleActive = (id) => {
    setGroups(
      groups.map((groupAk) => {
        if (groupAk.id === id) {
          return { ...groupAk, active: !groupAk.active };
        }
        return groupAk;
      })
    );
  };

  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalDelete = () => setIsModalDelete(true);
  const closeModalDelete = () => setIsModalDelete(false);

  useEffect(() => {
    setConfig();
  }, []);

  const editGroup = () => {
    setConfig();
    axios
      .put(
        url + "group/update/" + gropuId.id,
        {
          name: byId("name").value,
          categoryId: byId("category").value,
          teacherId: byId("teacher").value,
        },
        config
      )
      .then((response) => {
        toast.success("Group succesfully edit!");
        closeModal();
        getGroup();
        setLoading(false);
      })
      .catch((error) => {
        console.error("Something is error 😭", error);
        toast.error("Something is error 😭");
        setLoading(false);
      });
  };

  const deleteGroup = () => {
    axios
      .delete(url + "group/isactive/" + gropuId.id, config)
      .then(() => {
        closeModalDelete();
        getGroup();
        toast.success("delete group");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("xatolik yuz berdi");
        setLoading(false);
        // console.log(err);
      });
  };

  const select = () => {
    (byId("select") === "0") ? setHidden(true) : setHidden(false)
  }

  return (
    <>
      {/* //  px-4 sm:px-6 lg:px-8 */}
      <div className="w-full bg-gray-100 py-8">
        <div className="w-full mx-auto">
          <div className="bg-white shadow-md rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
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
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Coin
                    </th>
                    {/* <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Active
                    </th> */}
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {groups.length !== 0 ? (
                    groups.map((group, i) => (
                      <tr
                        key={i}
                        className="even:bg-slate-100 hover:bg-slate-200 duration-200 text-center"
                      >
                        <td className="py-3 px-6 border-b border-gray-200">
                          {i + 1}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200 flex justify-center items-center">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="h-16 w-16 rounded-full"
                          />
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200">
                          {group.name === null ? "Yo'q" : group.name}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200">
                          {group.coin === null ? "Yo'q" : group.coin}
                        </td>
                        {/* <td className="py-3 pl-6 border-b border-gray-200">
                          <input
                            type="checkbox"
                            checked={category.active}
                            onChange={() => toggleActive(category.id)}
                            className="form-checkbox h-5 w-5 ml-14 text-blue-600 rounded focus:ring-0"
                          />
                        </td> */}
                        <td className="py-3 px-6 border-b border-gray-200">
                          <div className="flex gap-7 justify-center">
                            <button
                              className="text-sm bg-yellow-500 hover:bg-yellow-600 duration-200 text-white 
                            py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                              onClick={() => {
                                setGroupId(group);
                                openModal();
                              }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => {
                                setGroupId(group);
                                openModalDelete();
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
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="flex justify-center">
                        {" "}
                        <NotFound />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Edit Group
            </h2>
            <div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  defaultValue={gropuId.name}
                  id="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="categoryId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected disabled>
                    Select category
                  </option>
                  {category &&
                    category.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className={`mt-5 ${hidden ? "hidden" : ""}`}>
                <label
                  htmlFor="categoryId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Child category
                </label>
                <select
                  id="subCategory"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected disabled value={0}>
                    Select child category
                  </option>
                  {subcategory &&
                    subcategory.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div> 
              <div className="mt-5">
                <label
                  htmlFor="teacherId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teacher
                </label>
                <select
                  id="teacher"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected disabled>
                    Select teacher
                  </option>
                  {teacher.length &&
                    teacher.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.fullName}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex justify-between mt-7">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btm-close"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setLoading(true);
                    editGroup();
                  }}
                  className="btm"
                >
                  {loading ? <Loader /> : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-96">
            <div className="flex justify-between items-center border-b pb-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Delete Category
              </h2>
              <button
                onClick={closeModalDelete}
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
              Do you want to delete this group?
            </div>
            <div className="flex justify-between mt-5">
              <button onClick={closeModalDelete} className="btm-close">
                No
              </button>
              <button
                onClick={() => {
                  setLoading(true);
                  deleteGroup();
                }}
                className="btm"
              >
                {loading ? <Loader /> : "Yes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupsTable;
