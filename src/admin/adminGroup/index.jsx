import React, { useEffect, useState } from "react";
import "../../globalcss/style.css";
import { byId, config, setConfig, url } from "../../components/api/api";
import axios from "axios";
import { toast } from "react-toastify";
import GroupsTable from "./categorytable";

const AdminGroup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teacher, setTeacher] = useState(null);
  const [category, setCategory] = useState(null);
  const [groups, setGroups] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    getCategoryId();
    getTeacher();
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get(url + "group", config)
      .then((res) => {
        setGroups(res.data.body.object);
        console.log(res.data.body.object);
      })
      .catch((err) => {});
  };

  const addGroup = () => {
    setConfig();
    axios
      .post(
        url + "group/save",
        {
          name: byId("name").value,
          categoryId: byId("category").value,
          teacherId: byId("teacher").value,
        },
        config
      )
      .then((response) => {
        toast.success("Group succesfully add!");
        getCategory();
        closeModal();
      })
      .catch((error) => {
        console.error("Something is error 😭", error);
        toast.error("Something is error 😭");
      });
  };

  const getTeacher = () => {
    axios
      .get(url + "user/teacher", config)
      .then((res) => {
        setTeacher(res.data.body);
      })
      .catch(() => console.log("kelmadi"));
  };

  const groupSearchHandler = (e) => {
    let data = e.target.value;
    !data
      ? getCategory()
      : axios
          .get(`${url}group/search/${data}`, config)
          .then((res) => setGroups(res.data.body))
          .catch(() => console.log("kelmadi"));
  };

  const getCategoryId = () => {
    axios
      .get(url + "category/father", config)
      .then((res) => {
         setCategory(res.data.body);
         console.log(res.data.body);
      })
      .catch(() => console.log("kategory kelmadi"));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mb-2 flex justify-between items-center flex-wrap font-inika">
        <button id="openMenuButton" className="btm" onClick={openModal}>
          + Add
        </button>
        <input
          type="search"
          id="search"
          onChange={groupSearchHandler}
          className="block w-80 p-3 ps-3 text-sm border border-gray-300 rounded-lg 
                        bg-gray-50 focus:outline-0 duration-300 focus:border-blue-500  
                        dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 
                        dark:focus:border-blue-500"
          placeholder="🔍  Search"
        />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Add New Group
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
                  name="name"
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
                  {teacher &&
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
                <button onClick={addGroup} className="btm">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {groups ? (
        <GroupsTable
          teacher={teacher}
          category={category}
          groups={groups}
          setGroups={setGroups}
          getGroup={getCategory}
        />
      ) : (
        "FFFFFfff"
      )}
    </div>
  );
};

export default AdminGroup;







