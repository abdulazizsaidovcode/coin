import React, { useEffect, useState } from "react";
import "../../globalcss/style.css";
import { byId, config, setConfig, url } from "../../components/api/api";
import axios from "axios";
import { toast } from "react-toastify";
import GroupsTable from "./categorytable";
import Loader from "../../assits/loader";
import NotFound from "../../NotFound";

const AdminGroup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teacher, setTeacher] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [subcategory, setSubCategory] = useState(null);
  const [groups, setGroups] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(0);
  const [input, setInput] = useState(true);
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
        setPage(res.data.body.totalPage);
      })
      .catch((err) => { });
  };

  const addGroup = () => {
    setConfig();
    axios
      .post(
        url + "group/save",
        {
          name: byId("name").value,
          categoryId: byId("subCategory").value,
          teacherId: byId("teacher").value,
        },
        config
      )
      .then((response) => {
        toast.success("Group succesfully add!");
        getCategory();
        closeModal();
        setLoading(false)
      })
      .catch((error) => {
        console.error("Something is error 😭", error);
        toast.error("Something is error 😭");
        setLoading(false);
      });
  };

  const inputDes = () => {
    if (byId("name").value !== "" && byId("subCategory").value !== "0" && byId("teacher").value !== "0") {
      setInput(false);
    } else {
      setInput(true);
    }
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
        .get(`${url}group/search/for/admin/${data}`, config)
        .then((res) => {
          setGroups(res.data.body)
          console.log(res.data.body);
        })
        .catch(() => console.log("kelmadi"));
  };

  const getCategoryId = () => {
    axios
      .get(url + "category/father", config)
      .then((res) => {
        setCategory(res.data.body);
      })
      .catch(() => console.log("kategory kelmadi"));
  };

  const getSubCategoryId = (value) => {
    axios
      .get(`${url}category/child/list/${value}`, config)
      .then((res) => {
        setSubCategory(res.data.body);
      })
      .catch(() => console.log("kategoryjsjjs kelmadi"));
  };

  const select = async () => {
    await (byId("select") === "0") ? setHidden(true) : setHidden(false)
  }

  const handelPageClick = (event) => {
    const pageNumber = event.selected;
    setCurrentPage(pageNumber)
    axios.get(`${url}group?page=${pageNumber}&size=10`, config)
      .then(res => setGroups(res.data.body.object))
      .catch(err => console.log('error page: ', err));
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 pt-10 px-4 sm:px-6 lg:px-8">
      <div className=" mb-2 flex justify-between items-center gap-5 flex-wrap font-inika">
        <button id="openMenuButton" className="btm" onClick={() => {
          openModal()
          setHidden(true)
        }}>
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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 overflow-y-auto h-full w-full">
          <div className="zoom-modal relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
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
                  onChange={inputDes}
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
                  onChange={(e) => {
                    select()
                    inputDes()
                    getSubCategoryId(e.target.value)
                  }}
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected disabled value="0">
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
                onChange={inputDes}
                  id="subCategory"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected disabled value='0' >
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
                onChange={inputDes}
                  id="teacher"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected disabled  value="0" >
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
                <button disabled={input} onClick={() => {
                  setLoading(true)
                  addGroup()
                }} className={`btm ${input ? "opacity-50 cursor-not-allowed" : ""}`}>
                  {loading ? <Loader /> : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {groups ?
        <GroupsTable
          teacher={teacher}
          category={category}
          subcategory={subcategory}
          groups={groups}
          getSubCategoryId={getSubCategoryId}
          setGroups={setGroups}
          getGroup={getCategory}
          currentPage={currentPage}
          handelPageClick={handelPageClick}
          page={page}
        /> : 
        <NotFound/>}
    </div>
  );
};

export default AdminGroup;
