import React, { useEffect, useState } from "react";
import "../../globalcss/style.css";
import { config, url } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const GiftCard = ({ gifts, getGift }) => {
  const [deleteModal, setDeleteModal] = useState(false); // Modalni ochish va yopish uchun holat
  const [editModal, setEditModal] = useState(false); // Modalni ochish va yopish uchun holat
  const [giftId, setGiftid] = useState([]); // Sifr
  const [giftIn, setGiftIn] = useState([]); // Sifr

 


  const deleteGift = () => {
    axios.delete(url + "gift/delete/" + giftId, config)
      .then(() => {
        toast.success("Succesfully delete gift!");
        getGift();
      })
      .catch(() => {
        toast.error("Something is wrong!");
      });
  };

  


  function editGift() {
    axios
      .put(
        url + "gift/update/" + giftId,
        {
          name: document.getElementById("name").value,
          attachmentId: 1,
          rate: document.getElementById("rate").value,
          description: document.getElementById("description").value,
        },
        config
      )
      .then(() => {
        toast.success("Successfully edit gift!");
        getGift();
      })
      .catch(() => {
        toast.error("Failed to edit gift!");
      });
  }

  // Modalni ochish va yopish uchun funksiyalar

  const opendelete = () => {
    setDeleteModal(true);
  };

  const closedelete = () => {
    setDeleteModal(false);
  };

  const openEdit = () => {
    setEditModal(true);
  };

  const closeEdit = () => {
    setEditModal(false);
  };

  console.log(gifts);

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
          <div className="px-6 py-2">
            <div className="font-bold text-xl mb-2 text-center">
              {item.name}
            </div>
            <p className="text-gray-700 text-base text-center">
              {item.description.length > 50
                ? item.description.substring(0, 50)
                : item.description}
            </p>
            <p className="text-gray-900 font-bold mt-3 text-center">
              {item.rate} coin
            </p>
          </div>
          <div className="px-6 pt-4  text-center">
            <button
              onClick={() => {
                opendelete();
                setGiftid(item.id);
              }}
              className="btm-close me-3 align-bottom mb-3"
            >
              Delete
            </button>
            <button
              onClick={() => {
                openEdit();
                setGiftid(item.id);
                setGiftIn(item)
              }}
              className="btm align-bottom mb-3"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
      {/* Modal */}
      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Create New Product
              </h2>
              <button
                onClick={closeEdit}
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
                <button
                  className="btm-close me-2 bg-red-900"
                  onClick={closeEdit}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    editGift();
                    closeEdit();
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

      {/* delete Modal */}
      {deleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Delete gift
              </h2>
              <button
                onClick={closedelete}
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

            {/* delete Modal body */}
            <div className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  dbcb cjec ecbc eu ihe o e o b eob c ccicb3icbiucb
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="btm-close me-2 bg-red-900"
                  onClick={closedelete}
                >
                  No
                </button>
                <button
                  onClick={() => {
                    deleteGift();
                    closedelete();
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

export default GiftCard;
