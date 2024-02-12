import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { byId, config, getFile, setConfig, url } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../assits/loader"

const AdminTeacher = () => {
  const [modal, setIsModalOpen] = useState(false);
  const [editModal, setIsModalOpenEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userId, setUserId] = useState([]);
  const [groupId, setGroupId] = useState("");
  const [group, setGroup] = useState([]);
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setConfig();
    getStudent();
  }, []);
  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalEdit = () => setIsModalOpenEdit(true);
  const closeModalEdit = () => setIsModalOpenEdit(false);
  const openModaldelete = () => setDeleteModal(true);
  const closeModaldelete = () => setDeleteModal(false);

  const addUsers = () => {
    let addData = {
      firstName: byId("firstName").value,
      lastName: byId("lastName").value,
      email: byId("email").value,
      password: byId("password").value,
      phoneNumber: byId("phoneNumber").value,
      groupId: 0,
      gender: byId("gender").value,
      friendPhoneNumber: "",
    };
    axios
      .post(url + "auth/register?ROLE=ROLE_TEACHER", addData, config)
      .then(() => {
        closeModal();
        getStudent();
        toast.success("User successfully added✔");
      })
      .catch(() => {
        toast.error("Something went wrong❓");
      });
  };


  const editUser = () => {
    let editData = {
      firstName: byId("firstName").value,
      lastName: byId("lastName").value,
      email: byId("email").value,
      password: byId("password").value,
      phoneNumber: byId("phoneNumber").value,
      groupId: 0,
      gender: byId("gender").value,
      friendPhoneNumber: "",
    };
    axios
      .put(`${url}user/update${userId}`, editData, config)
      .then(() => {
        closeModalEdit()
        // getUsers();
        toast.success("User information has been changed✔");
      })
      .catch(() => {
        toast.error("Something went wrong❓");
      });
  };

  

  const getStudent = () => {
    axios
      .get(url + "user/teacher", config)
      .then((res) => {
        setStudent(res.data.body);
      })
      .catch(() => console.log("kelmadi"));
  };

  const deleteUser = () => {
    axios
      .delete(`${url}user/
      ${userId.id}`, config)
      .then((res) => {
        toast.success("Succesfully delete teacher!")
        closeModaldelete()
        getStudent()
      })
      .catch(() => toast.error("Failed to delete"))
  };

  return (
    <div className=" p-8 pb-28 w-full h-screen bg-gray-100">
      <div className="mt-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Teacher</h2>
      </div>
      <div className=" mb-4 flex justify-between">
        <button className="btm" onClick={openModal}>
          + Add
        </button>
       
      </div>

      <div>
        
        <div className="w-full mt-8 shadow-md rounded-3xl overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 text-white rounded-t-2xl uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Full Name</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">Coin</th>
                <th className="py-3 px-6">Task</th>
                <th className="py-3 px-6">Exchange</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-light">
              {student ? (
                 student.map((item, i) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200"
                  >
                    <td className="py-3 px-6">{i + 1}</td>
                    <td className="py-3 px-6">{item.fullName}</td>
                    <td className="py-3 px-6">{item.phoneNumber}</td>
                    <td className="py-3 px-6">{item.coin}</td>
                    <td className="py-3 px-6">{item.task}</td>
                    <td className="py-3 px-6">{item.numberOfExchange}</td>
                    <td className="py-3 px-6 border-b border-gray-200 flex justify-center">
                      <button
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => {
                          openModalEdit();
                          setUserId(item);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          openModaldelete();
                          setUserId(item);
                        }}
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline ml-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                  <td
                    colSpan="7"
                    className="py-3 px-6 font-inika font-medium text-lg tracking-wider leading-10 text-center"
                  >
                    Student not found 😊
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Add student
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
              <div className="grid md:gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    FirstName
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="FirstName"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    LastName
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="LastName"
                    required=""
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="100"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>
            
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select gender
                  </label>
                  <select
                    id="gender"
                    className="mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full"
                  >
                    <option selected disabled>
                      Choose one...
                    </option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                </div>
               
              </div>
              <div className="flex justify-end">
                <button className="btm-close me-2 bg-red-900">Close</button>
                <button
                  onClick={() => {
                    addUsers();
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

      {/* EDIT MODAL */}

      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Edit student
              </h2>
              <button
                onClick={closeModalEdit}
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
              <div className="grid md:gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    FirstName
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="FirstName"
                    defaultValue={userId.fullName}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    LastName
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="LastName"
                    required=""
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    defaultValue={userId.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="100"
                    required=""
                    defaultValue={userId.phoneNumber}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    defaultValue={userId.password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>
                
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select gender
                  </label>
                  <select
                    id="gender"
                    className="mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full"
                  >
                    <option selected disabled>
                      Choose one...
                    </option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                </div>
               
              </div>
              <div className="flex justify-end">
                <button
                  onClick={closeModalEdit}
                  className="btm-close me-2 bg-red-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    editUser();
                  }}
                  className="btm"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


{deleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Delete student
              </h2>
              <button
                onClick={closeModaldelete}
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
              
              qwertyuiobhy yuhjnm 
              <div className="flex justify-end">
                <button
                  onClick={closeModaldelete}
                  className="btm-close me-2 bg-red-900"
                >
                  No
                </button>
                <button
                  onClick={() => {
                    deleteUser();
                  }}
                  className="btm"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTeacher;
