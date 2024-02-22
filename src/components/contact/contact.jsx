import axios from "axios";
import React, { useState, useEffect } from "react";
import { byId, config, url } from "../api/api";
import { toast } from "react-toastify";
import img from "../../assits/not-found.png";
import ReactPaginate from "react-paginate";
import Loader from "../../assits/loader";

// Dastlabki ma'lumotlar ro'yxati

function Contact() {
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [deletee, setdeletee] = useState(false)
  const [mesId, setMesId] = useState('')


  const openMore = () => setIsMoreOpen(!isMoreOpen);
  const openDelete = () => setdeletee(!deletee);

  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get(url + "contact", config)
      .then((res) => {
        setMessages(res.data.body.reverse());
      })
      .catch((err) => console.log(err));
  };

  const getCategory2 = () => {
    axios
      .get(url + "contact", config)
      .then((res) => {
        setMessages(res.data.body);
      })
      .catch((err) => console.log(err));
  };

  const deleteCategory = () => {
    setLoading(true)
    axios
      .delete(`${url}contact?id=${mesId}`, config)
      .then(() => {
        toast.success("Successfully delete data!")
        setLoading(false)
        openDelete()
        getCategory()
      })
      .catch(() => {
        toast.error("Something is error")
        setLoading(false)
      });
  };

  // Tartiblash turini va yo'nalishini o'zgartirish

  function cutDescription(description) {
    const dotIndex = description.indexOf(".");

    if (dotIndex !== -1) {
      return description.slice(0, dotIndex + 1);
    } else {
      return description.slice(0, 50);
    }
  }

 

  return (
    <div className=" p-8 bg-gray-100 h-full sm:h-screen w-full ">
      {/* Tartiblash tugmalari */}

      <div className="mt-3">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Contact</h2>
      </div>
      <div className="flex justify-start w-full items-start mb-4 flex-col gap-5 sm:flex-row md:gap-0">
        {/* Tartiblash tugmalari */}
       
        <div className="flex gap-5 w-full flex-col sm:flex-row justify-start items-end">
          <button
            onClick={getCategory}
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New posts first
            {/* {sortType === 'date' && (isAscending ? '⬆️' : '⬇️')} */}
          </button>
          <button
            onClick={getCategory2}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Old posts first
            {/* {sortType === 'time' && (isAscending ? '
             : '⬇️')} */}
          </button>
        </div>
      </div>

      {/* Xabarlar ro'yxatini ko'rsatish */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-16 md:mb-0">
        {messages ? (
          messages.map((item, i) => (
            <div
              key={i}
              className="border rounded shadow hover:shadow-lg duration-300 hover:scale-[102%] p-3 relative"
            >
              <div className="flex justify-between">
              <h2 className="font-bold text-lg mb-3">{item.fullName}</h2>
              <i class="fa-regular fa-trash-can cursor-pointer" onClick={() => {
                setMesId(item.id)
                openDelete()
                
              }} style={{color: "#ee1717"}}></i>
              </div>
              <p className="text-gray-700 text-base mb-6">
                {cutDescription(item.message) + "."}
                <span
                  className="font-bold tracking-wide ms-3 hover:cursor-pointer hover:text-black duration-200"
                  onClick={() => {
                    openMore();
                    setGroupId(item);
                  }}
                >
                  {isMoreOpen ? "" : "more..."}
                </span>
              </p>
              <div className="absolute bottom-2 right-3">
                <span className="text-sm font-semibold">{item.email}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="md:translate-x-[55%] lg:translate-x-[120%] mt-10 text-[2rem] flex justify-center items-center flex-col">
            Data not found 😊
            <img src={img} alt="img" className="w-64" />
          </div>
        )}
      </div>

      <div className={`${isMoreOpen ? `fixed bg-gray-600 bg-opacity-50 inset-0 flex items-center justify-center z-50 ` : "hidden"}`}>
        <div
          className={`animation-modal w-96 px-10 py-6 rounded-lg shadow-lg shadow-slate-500 bg-slate-100`}
        >
          <div className="flex justify-between pb-2 border-b border-b-slate-700">
            <p className="font-bold text-xl tracking-wide">
              {isMoreOpen ? groupId.fullName : ""}
            </p>
            <p onClick={openMore} className="hover:cursor-pointer">
              <i className="fa-solid fa-xmark fa-xl hover:text-slate-600 duration-200"></i>
            </p>
          </div>
          <p className="my-4">{isMoreOpen ? groupId.message : ""}</p>
          <p className="text-end">
            <span className="font-semibold border-b pb-1 px-1 border-b-slate-400">
              {isMoreOpen ? groupId.email : ""}
            </span>
          </p>
        </div>
      </div>
      {deletee && (
        <div className="fixed bg-gray-600 bg-opacity-50 inset-0 flex items-center justify-center z-50 ">
          <div className="modal zoom-modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Delete data
              </h2>
              <button
                onClick={openDelete}
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
            <div className="p-4 md:p-5">
              <div className="flex items-center justify-center flex-row pb-5">
                <h1 className="text-center font-semibold text-xl">Are you sure about that?</h1>
              </div>
              <div className="flex justify-end">
                <button onClick={openDelete} className="btm-close me-2 bg-red-900">No</button>
                <button
                  onClick={() => {
                    deleteCategory();
                  }}
                  className="btm"
                >
                  {loading ? <Loader /> : "Yes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
