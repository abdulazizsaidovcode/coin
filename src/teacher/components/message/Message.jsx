import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { byId, config, url } from '../../../components/api/api';
import img from '../../../assits/not-found.png';
import './style.css';
import LoadingBtn from '../loadingBtn/LoadingBtn';

function Message() {
  const [messages, setMessages] = useState(null);
  const [group, setGroup] = useState([]);
  const [groupId, setGroupId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const openMore = () => setIsMoreOpen(!isMoreOpen);

  useEffect(() => {
    getCategory()
    getGroup()
  }, []);

  const getCategory = () => {
    axios.get(url + "message/teache", config)
      .then((res) => setMessages(res.data.body.object.reverse()))
      .catch((err) => console.log(err))
  }

  const getCategory2 = () => {
    axios.get(url + "message/teache", config)
      .then((res) => setMessages(res.data.body.object))
      .catch((err) => console.log(err))
  }

  const getGroup = () => {
    axios.get(url + "group/teacher", config)
      .then((res) => setGroup(res.data.body))
      .catch((err) => console.log('Teacher panel message error: ', err))
  }

  const addMessaga = () => {
    setIsLoading(true)
    let addData = {
      description: byId("message").value,
      groupId: byId("groupId").value
    }
    axios.post(url + "message/save", addData, config)
      .then(() => {
        toast.success("Message succesfully send!")
        getCategory();
        closeModal();
        setIsLoading(false)
      })
      .catch(() => {
        toast.error("Error while sending message!");
        setIsLoading(false)
      });
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
    <div className={`bg-gray-100 mx-auto p-8 min-h-screen`}>
      <div className="mt-3">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Message</h2>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
        <button className='btm' onClick={openModal}>Add Message</button>
        <div className='flex justify-center items-center'>
          <button onClick={getCategory} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg duration-200 active:scale-95">
            New posts first
          </button>
          <button onClick={getCategory2} className="bg-green-500 ml-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg duration-200 active:scale-95">
            Old posts first
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-16 md:mb-0">
        {messages ? (
          messages.map((item, i) => (
            <div key={i} className="border rounded shadow hover:shadow-lg duration-300 hover:scale-[102%] p-3 relative">
              <h2 className="font-bold text-lg mb-3" >{item.groupName}</h2>
              <p className="text-gray-700 text-base mb-6">
                {cutDescription(item.description) + '.'}
                <span
                  className='font-bold tracking-wide ms-3 hover:cursor-pointer hover:text-black duration-200'
                  onClick={() => {
                    openMore();
                    setGroupId(item);
                  }}
                >{isMoreOpen ? '' : 'more...'}</span>
              </p>
              <div className="absolute bottom-2 right-3">
                <span className="text-sm font-semibold">{item.date}</span>
              </div>
            </div>
          ))) : (
          <div className="md:translate-x-[55%] lg:translate-x-[120%] mt-10 text-[2rem] flex justify-center items-center flex-col">
            Message not found 😊
            <img src={img} alt="img" className='w-64' />
          </div>
        )}
      </div>

      <div
        className={`${isMoreOpen ? 'animation-modal fixed top-[40%] left-[45%] w-96 px-10 py-6 rounded-lg shadow-lg shadow-slate-500 bg-slate-100' : 'hidden'}`}>
        <div className='flex justify-between pb-2 border-b border-b-slate-700'>
          <p className='font-bold text-xl tracking-wide'>{isMoreOpen ? groupId.groupName : ''}</p>
          <p onClick={openMore} className='hover:cursor-pointer'>
            <i className="fa-solid fa-xmark fa-xl hover:text-slate-600 duration-200"></i>
          </p>
        </div>
        <p className='my-4'>{isMoreOpen ? groupId.description : ''}</p>
        <p className='text-end'><span className='font-semibold border-b pb-1 px-1 border-b-slate-400'>{isMoreOpen ? groupId.date : ''}</span></p>
      </div>

      {isModalOpen && (
        <div className={`${isModalOpen ? 'animation-modal' : ''} fixed inset-0 flex items-center justify-center z-50`}>
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-3">
              <h2 className="text-lg font-semibold text-gray-900">Send message</h2>
              <i onClick={closeModal} className="fa-solid fa-xmark fa-xl hover:text-slate-500 hover:cursor-pointer duration-200"></i>
            </div>
            <div className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Group</label>
                  <select
                    id="groupId"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:outline-0 focus:border-blue-500 duration-200">
                    <option selected disabled>Select group</option>
                    {group.map((item, i) =>
                      <option key={i} value={item.id}>{item.name}</option>
                    )}
                  </select>
                </div>
                <div className="col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Write message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-0 duration-200 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write Write message here"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={closeModal} className="btm-close me-2 bg-red-900">Close</button>
                <button onClick={addMessaga} className={`btm ${isLoading ? 'cursor-not-allowed opacity-70' : ''}`}>
                  {isLoading ? <LoadingBtn /> : "Save"}
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
