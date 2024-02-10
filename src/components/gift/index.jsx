import "../../globalcss/style.css";
import React, { useEffect, useState } from "react";
import GiftCard from "../card";
import axios from "axios";
import { byId, config, url } from "../api/api";
import { toast } from "react-toastify";

function Gift() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni ochish va yopish uchun holat
  const [gifts, setGifts] = useState(null); // Sifod

  useEffect(() => {
    getGift();
  }, []);

  function getGift() {
    axios
      .get(url + "gift", config)
      .then((res) => {
        setGifts(res.data.body.object.reverse());
      })
      .catch(() => {});
  }

  // giftFilter
  const searchGift = (e) => {
    let data = e.target.value
    
    !data ? getGift() :
        axios.get(`${url}gift/search?name=${data}`, config)
            .then(res => res.data.body.length === 0 ? setGifts(null) : setGifts(res.data.body))
            .catch(err => console.log('Teacher panel gift filterda error: ', err));
}

  const addGift = async () => {
    const img = new FormData();
    img.append('file', byId('image').files[0]);
    const addData = {
      name: document.getElementById("name").value,
      attachmentId: 0,
      rate: document.getElementById("rate").value,
      description: document.getElementById("description").value,
    }

    if (img.get('file') !== 'undefined')
        await axios.post(url + "attachment/upload", img, config)
            .then(res => addData.attachmentId = res.data.body)
            .catch(() => console.log("img ketmadi"))

    await axios.post(url + "gift/save", addData, config)
    .then(() => {
      toast.success("Successfully added!");
      getGift();
    })
    .catch(() => {
      toast.error("Failed to add gift card!");
    });
}


 
  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 w-full ">
      <div className="mt-3">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Gift</h2>
      </div>
      <div className=" mb-2 flex justify-between">
        <button id="openMenuButton" className="btm" onClick={openModal}>
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
            onChange={searchGift}
            id="searchGift"
            class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </div>
      <GiftCard gifts={gifts} getGift={getGift} />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Add gift
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
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Rate
                  </label>
                  <input
                    type="number"
                    name="rate"
                    id="rate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="100"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Image
                  </label>
                  <input
                    id="image"
                    type="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Gift Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="btm-close me-2 bg-red-900">Close</button>
                <button
                  onClick={() => {
                    closeModal();
                    addGift();
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
    </div>
  );
}

export default Gift;
