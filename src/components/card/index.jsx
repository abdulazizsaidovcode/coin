import React, { useState } from "react";
import "../../globalcss/style.css";
import { byId, config, getFile, url } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";
import giftImg from "../../assits/itca.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactPaginate from "react-paginate";
import Loader from "../../assits/loader";

const GiftCard = ({ gifts, getGift, page, handelPageClick }) => {
  const [deleteModal, setDeleteModal] = useState(false); // Modalni ochish va yopish uchun holat
  const [editModal, setEditModal] = useState(false); // Modalni ochish va yopish uchun holat
  const [giftId, setGiftid] = useState(""); // Sifr
  const [giftIn, setGiftIn] = useState([]); // Sifr
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toShow, setItemToShow] = useState([]);

  const deleteGift = () => {
    setLoading(true);
    axios
      .delete(url + "gift/delete/" + giftId, config)
      .then(() => {
        setLoading(false);
        toast.success("Succesfully delete gift!");
        getGift();

        closedelete();
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something is wrong!");
        closedelete();
      });
  };

  const editGift = async () => {
    setLoading(true);
    const img = new FormData();
    img.append("file", byId("image").files[0]);
    const addData = {
      name: document.getElementById("name").value,
      attachmentId: 0,
      rate: document.getElementById("rate").value,
      description: document.getElementById("description").value,
    };

    if (img.get("file") !== "undefined")
      await axios
        .post(url + "attachment/upload", img, config)
        .then((res) => (addData.attachmentId = res.data.body))
        .catch(() => console.log("img ketmadi"));

    await axios
      .put(url + "gift/update/" + giftId, addData, config)
      .then(() => {
        setLoading(false);
        toast.success("Successfully added!");
        getGift();
        closeEdit()
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to add gift card!");
      });
  };

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="w-full flex flex-wrap justify-evenly mt-10 font-inika">
        {/* <div className="w-full flex flex-wrap justify-evenly mt-10 font-inika"> */}
        {gifts ? (
          gifts.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/4 h-[30rem] sm:h-[24rem] lg:h-[23rem] xl:h-[24rem] p-5"
            >
              <div
                className="w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-slate-500
                 duration-300 mb-8"
              >
                <div className="w-full h-1/2 overflow-hidden">
                  <LazyLoadImage
                    src={
                      item.attachmentId === null
                        ? giftImg
                        : getFile + item.attachmentId
                    }
                    alt="Gift"
                    effect="blur"
                    className="hover:scale-110 w-full h-full lazyload"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">
                    {item.name}
                  </div>
                  <p className="text-gray-700 text-base text-center">
                    {item.rate} coin
                  </p>
                </div>
                <div className="px-6 pt-4 text-center">
                  <button
                    className="btm-info"
                    onClick={() => {
                      openModal();
                      setItemToShow(item.description);
                      setGiftid(item.id);
                      setGiftIn(item);
                    }}
                  >
                    Gift Info
                  </button>
                </div>

                {isModalOpen && (
                  <div
                    className={`${
                      isModalOpen ? "zoom-modal" : ""
                    } fixed inset-0 flex items-center justify-center z-50`}
                  >
                    <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/2">
                      <div className="mt-6 pb-6 border-b font-medium text-lg">
                        {toShow}
                      </div>
                      <div className="flex justify-between items-center mt-5">
                        <div className="flex gap-5">
                          <button
                            className="font-semibold bg-red-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300"
                            onClick={() => {
                              closeModal();
                              opendelete();
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="font-semibold bg-yellow-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300"
                            onClick={() => {
                              closeModal();
                              openEdit();
                            }}
                          >
                            Edit
                          </button>
                        </div>
                        <button
                          className="font-semibold bg-green-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300"
                          onClick={closeModal}
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="w-1/4 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8">
            <img
              className="w-full h-52 object-cover"
              src={giftImg}
              alt="Gift"
            />
            <p className="text-center my-3 font-semibold tracking-wider">
              Gift not found 😊
            </p>
          </div>
        )}
        {/* </div> */}

        {/* Modal */}
        {editModal && (
          <div className="fixed bg-gray-600 bg-opacity-50 inset-0 flex items-center justify-center z-50 ">
            <div className="modal zoom-modal bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="flex">
                <h2 className="text-lg font-semibold text-gray-900 p-2">
                  Edit gift
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
                      defaultValue={giftIn.name}
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product name"
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
                      defaultValue={giftIn.rate}
                      id="rate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="100"
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
                      defaultValue={giftIn.description}
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
                    }}
                    className="btm"
                  >
                    {loading ? <Loader /> : "Edit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* delete Modal */}
        {deleteModal && (
          <div className="fixed bg-gray-600 bg-opacity-50 inset-0 flex items-center justify-center z-50 ">
            <div className="modal zoom-modal bg-white rounded-xl overflow-hidden shadow-2xl">
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
                    Do you want to delete this gift?
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
      <div className="mt-2 mb-10 text-center">
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
    </>
  );
};

export default GiftCard;
