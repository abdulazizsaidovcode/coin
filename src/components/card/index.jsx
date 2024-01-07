import React, { useEffect, useState } from "react";
import "../../globalcss/style.css";
import { url } from "../api/api";
import axios from "axios";
import { config } from "@fortawesome/fontawesome-svg-core";

const GiftCard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni ochish va yopish uchun holat
  const [gifts, setGifts] = useState([]); // Sifr

  useEffect(() => {
    getGift()
  }, [])


  function getGift() {
    axios
      .get(
        url + "gift",
        config
      )
      .then((res) => {
        setGifts(res.data.body.object);
        console.log(res.data);
      })
      .catch(() => {});
  }


  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-wrap justify-around">
      {gifts.map((item, i) => (
        <div
          key={i}
          className="w-80 rounded-xl overflow-hidden shadow-xl m-4 up"
        >
          <img
            className="w-full h-1/2 bg-contain"
            src="https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?cs=srgb&dl=pexels-george-dolgikh-1666065.jpg&fm=jpg"
            // src={item.attachmentId != null ? item.attachmentId : "https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?cs=srgb&dl=pexels-george-dolgikh-1666065.jpg&fm=jpg"}
            alt="Gift"
          />
          <div className="px-6 py-3">
            <div className="font-bold text-xl mb-2 text-center">
              {item.name}
            </div>
            <p className="text-gray-700 text-base text-center">
              {item.description.length > 50 ? item.description.substring(0, 50) : item.description}
            </p>
            <p className="text-gray-900 font-bold mt-3 text-center">
              {item.rate} coin
            </p>
          </div>
          <div className="px-6 pt-4  text-center">
          <button onClick={closeModal} className="btm-close me-3 align-bottom">
              Delete
            </button>
            <button onClick={closeModal} className="btm align-bottom">
              Edit
            </button>
          </div>
        </div>
      ))}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Create New Product
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
};

export default GiftCard;
