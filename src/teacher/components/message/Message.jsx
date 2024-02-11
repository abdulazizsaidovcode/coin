import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { byId, config, url } from '../../../components/api/api';
import img from '../../../assits/not-found.png';

function Message() {
  const [messages, setMessages] = useState(null);
  const [group, setGroup] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMore, setIsMore] = useState(false);

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const openMore = () => setIsMore(!isMore);

  useEffect(() => {
    getCategory()
    getGroup()
  }, []);

  const getCategory = () => {
    axios.get(url + "message/teacher", config)
      .then((res) => setMessages(res.data.body.object.reverse()))
      .catch((err) => console.log(err))
  }

  const getCategory2 = () => {
    axios.get(url + "message/teacher", config)
      .then((res) => setMessages(res.data.body.object))
      .catch((err) => console.log(err))
  }

  const getGroup = () => {
    axios.get(url + "group/teacher", config)
      .then((res) => setGroup(res.data.body))
      .catch((err) => console.log('Teacher panel message error: ', err))
  }

  const addMessaga = () => {
    axios.post(url + "message/save", {
      description: byId("message").value,
      groupId: byId("groupId").value
    }, config)
      .then(() => {
        toast.success("Message succesfully send!")
        getCategory()
      })
      .catch(() => toast.error("Error while sending message!"));
  }

  function cutDescription(description) {
    const dotIndex = description.indexOf('.');

    if (dotIndex !== -1) {
      return description.slice(0, dotIndex + 1);
    } else {
      return description.slice(0, 50);
    }
  }

  return (
    <div className={`bg-gray-100 container mx-auto p-8 min-h-screen`}>
      <div className="mt-3">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Message</h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button className='btm' onClick={openModal}>Add Message</button>
        <div>
          <button onClick={getCategory} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg duration-200 active:scale-95">
            New posts first
          </button>
          <button onClick={getCategory2} className="bg-green-500 ml-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg duration-200 active:scale-95">
            Old posts first
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {messages ? (
          messages.map((item, i) => (
            <div key={i} className="border rounded shadow hover:shadow-lg duration-300 hover:scale-[102%] p-3 relative">
              <h2 className="font-bold text-lg mb-3" >{item.groupName}</h2>
              <p className="text-gray-700 text-base mb-6">
                {isMore ? item.description : cutDescription(item.description)}
                <span
                  className='font-bold tracking-wide ms-3 hover:cursor-pointer hover:text-black duration-200'
                  onClick={openMore}
                >{isMore ? 'back' : 'more'}</span>
              </p>
              <div className="absolute bottom-2 right-3">
                <span className="text-sm font-semibold">{item.date}</span>
              </div>
            </div>
          ))) : (
          <div className="translate-x-[120%] mt-10 text-[2rem] flex justify-center items-center flex-col">
            Message not found 😊
            <img src={img} alt="img" className='w-64' />
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
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
                    id="groupId"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:outline-0 focus:border-blue-500 duration-200"
                  >
                    <option selected disabled>Select group</option>
                    {group.map((item, i) =>
                      <option key={i} value={item.id}>{item.name}</option>
                    )}
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
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-0 duration-200 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write Write message here"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={closeModal} className="btm-close me-2 bg-red-900">
                  Close
                </button>
                <button onClick={() => {
                  addMessaga()
                  closeModal()
                }} className="btm">
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
