import axios from "axios";
import React, { useState, useEffect } from "react";
import { byId, config, url } from "../api/api";
import { toast } from "react-toastify";
import img from "../../assits/not-found.png";
import ReactPaginate from "react-paginate";

// Dastlabki ma'lumotlar ro'yxati

function Message() {
  const [messages, setMessages] = useState([]);
  const [group, setGroup] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [input, setInput] = useState(true);


  const [page, setPage] = useState(0);

  const openMore = () => setIsMoreOpen(!isMoreOpen);

  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getCategory();
    getGroup();
  }, []);

  const getCategory = () => {
    axios
      .get(url + "message", config)
      .then((res) => {
        setMessages(res.data.body.object.reverse());
        setPage(res.data.body.totalPage);
      })
      .catch((err) => console.log(err));
  };

  const getCategory2 = () => {
    axios
      .get(url + "message", config)
      .then((res) => {
        setMessages(res.data.body.object);
        setPage(res.data.body.totalPage);
      })
      .catch((err) => console.log(err));
  };

  const addMessaga = () => {
    axios
      .post(
        url + "message/save",
        {
          description: byId("message").value,
          groupId: byId("groupId").value,
        },
        config
      )
      .then(() => {
        toast.success("Message succesfully send!");
        getCategory();
      })
      .catch(() => {
        toast.error("Error while sending message!");
      });
  };

  const getGroup = () => {
    axios
      .get(url + "group", config)
      .then((res) => {
        console.log(res.data.body.object);
        setGroup(res.data.body.object);
      })
      .catch(() => {});
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

  const handelPageClick = (event) => {
    const pageNumber = event.selected;
    // setCurrentPage(pageNumber)
    axios
      .get(`${url}message?page=${pageNumber}&size=10`, config)
      .then((res) => {
        setMessages(res.data.body.object);
        setMessages(res.data.body.object.reverse());
      });
  };

  const inputDes = () => {
    if (
      byId("groupId").value !== "" &&
      byId("message").value !== "" 
    ) {
      setInput(false);
    } else {
      setInput(true);
    }
  };

  return (
    <div className=" p-8 bg-gray-100 h-full sm:h-screen w-full ">
      {/* Tartiblash tugmalari */}

      <div className="mt-3">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Message</h2>
      </div>
      <div className="flex justify-between w-full items-start mb-4 flex-col gap-5 sm:flex-row md:gap-0">
        {/* Tartiblash tugmalari */}
        <button className="btm" onClick={openModal}>
          {" "}
          +Add
        </button>
        <div className="flex gap-5 w-full flex-col sm:flex-row justify-end items-end">
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
            {/* {sortType === 'time' && (isAscending ? '⬆️' : '⬇️')} */}
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
              <h2 className="font-bold text-lg mb-3">{item.groupName}</h2>
              <p className="text-gray-700 text-base mb-6">
                {cutDescription(item.description) + "."}
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
                <span className="text-sm font-semibold">{item.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="md:translate-x-[55%] lg:translate-x-[120%] mt-10 text-[2rem] flex justify-center items-center flex-col">
            Message not found 😊
            <img src={img} alt="img" className="w-64" />
          </div>
        )}
      </div>

      <div className="mt-10">
        <ReactPaginate
          className="navigation"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handelPageClick}
          pageRangeDisplayed={5}
          pageCount={page}
          previousLabel="<"
          renderOnZeroPageCount={null}
          nextClassName="nextBtn"
          previousClassName="prevBtn"
        />
      </div>

      <div className={`${isMoreOpen ? `fixed bg-gray-600 bg-opacity-50 inset-0 flex items-center justify-center z-50 ` : "hidden"}`}>
        <div
          className={`animation-modal w-96 px-10 py-6 rounded-lg shadow-lg shadow-slate-500 bg-slate-100`}
        >
          <div className="flex justify-between pb-2 border-b border-b-slate-700">
            <p className="font-bold text-xl tracking-wide">
              {isMoreOpen ? groupId.groupName : ""}
            </p>
            <p onClick={openMore} className="hover:cursor-pointer">
              <i className="fa-solid fa-xmark fa-xl hover:text-slate-600 duration-200"></i>
            </p>
          </div>
          <p className="my-4">{isMoreOpen ? groupId.description : ""}</p>
          <p className="text-end">
            <span className="font-semibold border-b pb-1 px-1 border-b-slate-400">
              {isMoreOpen ? groupId.date : ""}
            </span>
          </p>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed bg-gray-600 bg-opacity-50 inset-0 flex items-center justify-center z-50 ">
          <div className="modal zoom-modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Send message
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
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Group
                  </label>
                  <select
                    onChange={inputDes}
                    id="groupId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected disabled value="">
                      Select group
                    </option>
                    {group.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Write message
                  </label>
                  <textarea
                    onChange={inputDes}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write Write message here"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="btm-close me-2 bg-red-900"
                >
                  Close
                </button>
                <button
                disabled={input}
                  onClick={() => {
                    addMessaga();
                    closeModal();
                  }}
                  className={`btm ${input ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
