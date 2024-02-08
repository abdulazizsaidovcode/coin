import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import avatar from "../../assits/opacha.jpg";
import { byId, config, getFile, setConfig, url } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const AdminStudent = () => {
  const [modal, setIsModalOpen] = useState(false);
  const [editModal, setIsModalOpenEdit] = useState(false);
  const [userId, setUserId] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGroup, setSelectedGroup] = useState("All");
  const getStudentInfo = sessionStorage.getItem("studentInfoId");
  const [groupId, setGroupId] = useState("");
  const [group, setGroup] = useState([]);
  const [student, setStudent] = useState([]);
  const [originalStudent, setOriginalStudent] = useState([]);


  useEffect(() => {
    setConfig();
    getGroup();
    getStudent();
  }, []);
  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalEdit = () => setIsModalOpenEdit(true);
  const closeModalEdit = () => setIsModalOpenEdit(false);

  const getGroup = () => {
    axios
      .get(url + "group", config)
      .then((res) => setGroup(res.data.body.object))
      .catch(() => console.log("gr kelmadi"));
  };

  const addUsers = () => {
    let addData = {
      firstName: byId("firstName").value,
      lastName: byId("lastName").value,
      email: byId("email").value,
      password: byId("password").value,
      phoneNumber: byId("phoneNumber").value,
      groupId: byId("groupId").value,
      gender: byId("gender").value,
      friendPhoneNumber: "",
    };
    axios
      .post(url + "auth/register?ROLE=ROLE_USER", addData, config)
      .then(() => {
        closeModal();
        getStudent();
        toast.success("User successfully added✔");
      })
      .catch(() => {
        toast.error("Something went wrong❓");
      });
  };

  console.log(userId);

  const editUser = () => {
    let editData = {
      firstName: byId("firstName").value,
      lastName: byId("lastName").value,
      email: byId("email").value,
      password: byId("password").value,
      phoneNumber: byId("phoneNumber").value,
      groupId: byId("groupId").value,
      gender: byId("gender").value,
      friendPhoneNumber: "",
    };
    axios
      .put(url + "user/update/", editData, config)
      .then(() => {
        // openEditModal();
        // getUsers();
        toast.success("User information has been changed✔");
      })
      .catch(() => {
        toast.error("Something went wrong❓");
      });
  };

  const getGroupS = () => {
    axios
      .get(url + "group/students/" + groupId, config)
      .then((res) => {
        console.log(res.data.message);
        console.log("res.data.messag");
        // if (res.data.message === 404) {
        //   alert("Bu grupta hech qanday student kiritilmagan!");
        // }
        setGroup(res.data.body);
      })
      .catch(() => console.log("group kelmadi"));
  };

  const getStudent = () => {
    axios
      .get(url + "user", config)
      .then((res) => {
        setStudent(res.data.body.object);
        setOriginalStudent(res.data.body.object); // Bu qatordan foydalaning
      })
      .catch(() => console.log("kelmadi"));
  };
  const filterStudents = (search) => {
    const searchText = search.target.value.toLowerCase();
    const filteredStudents = originalStudent.filter((item) =>
      item.fullName.toLowerCase().includes(searchText)
    );
    setStudent(filteredStudents);
  }

  return (
    <div className=" p-8 pb-28 w-full bg-gray-100">
      <div className="mt-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Student</h2>
      </div>
      <div className=" mb-4 flex justify-between">
        <button className="btm" onClick={openModal}>
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
            className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            onChange={filterStudents}
          />

        </div>
      </div>

      <div>
        <div className="mb-4">
          <div className="flex mb-2 flex-wrap justify-between">
            {group.map((item) => (
              <button
                onClick={async () => {
                  await setGroupId(item.id);
                  getGroupS();
                }}
                key={item.id}
                className="px-10 py-2.5 mr-5 my-2 rounded-3xl shadow-lg font-inika font-semibold tracking-wide text-xl
                              bg-purple-500 text-white hover:bg-purple-700 active:scale-90 focus:outline-none focus:bg-purple-600 duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full mt-8 shadow-md rounded-3xl overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 text-white rounded-t-2xl uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Full Name</th>
                <th className="py-3 px-6">Group</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">Coin</th>
                <th className="py-3 px-6">Task</th>
                <th className="py-3 px-6">Exchange</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-light">
              {student.length === 0 ? (
                <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                  <td colSpan="8" className="py-3 px-6">
                    No result
                  </td>
                </tr>
              ) : (
                student.map((item, i) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200"
                  >
                    <td className="py-3 px-6">{i + 1}</td>
                    <td className="py-3 px-6">{item.fullName}</td>
                    <td className="py-3 px-6">{item.groupName}</td>
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
                          openModal();
                          setUserId(item);
                        }}
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline ml-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
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
                    htmlFor="groupId"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select group
                  </label>
                  <select
                    id="groupId"
                    className="mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full"
                  >
                    <option selected disabled>
                      Choose one...
                    </option>
                    {group.length &&
                      group.map((item, i) => (
                        <option key={i} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
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
                <div className="col-span-2">
                  <label
                    htmlFor="fNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Friend's phone number
                  </label>
                  <input
                    type="number"
                    name="name"
                    id="fNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
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
                    defaultValue={userId.name}
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
                    htmlFor="groupId"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select group
                  </label>
                  <select
                    id="groupId"
                    className="mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full"
                  >
                    <option selected disabled>
                      Choose one...
                    </option>
                    {group.length &&
                      group.map((item, i) => (
                        <option key={i} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
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
                <div className="col-span-2">
                  <label
                    htmlFor="fNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Friend's phone number
                  </label>
                  <input
                    type="number"
                    name="name"
                    id="fNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={closeModalEdit} className="btm-close me-2 bg-red-900">Close</button>
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
    </div>
  );
};

export default AdminStudent;
