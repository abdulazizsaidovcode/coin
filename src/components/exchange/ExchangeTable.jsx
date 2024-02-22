import { LazyLoadImage } from "react-lazy-load-image-component";
import images from "../../assits/opacha.jpg";
import { getFile } from "../api/api";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import Loader from "../../assits/loader";
import { toast } from 'react-toastify';
import { byId, config, setConfig, url } from "../api/api"
import axios from 'axios';

const ExchangeTable = ({
  exchangeTable,
  page,
  setLoading,
  currentPage,
  handelPageClick,
  loading,
  getExchangeTable
}) => {
  const [isModalDelete, setisModalDelete] = useState(false);
  const [id, setId] = useState('');

  const openDeleteModal = () => setisModalDelete(true)
  const closeDeleteModal = () => setisModalDelete(false)

  const toggleActive = (id) => {
    setLoading(true)
    axios.post(`${url}exchange/confirmation?exchangeId=${id}`, '', config)
    .then(res => {
        toast.success("Succesfully")
        getExchangeTable()
        setLoading(false)
        closeDeleteModal()
    })
    .catch(err => {
        toast.error("Error")
        setLoading(false)
    })
};
  return (
    <>
      <div className="rounded-3xl shadow-lg overflow-hidden w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white uppercase text-sm leading-normal">
              <tr className="text-center">
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">photo</th>
                <th className="py-3 px-6">full name</th>
                <th className="py-3 px-6">gift name</th>
                <th className="py-3 px-6">group name</th>
                <th className="py-3 px-6">rate</th>
                <th className="py-3 px-6">date</th>
                <th className="py-3 px-6">active</th>
                {/* <th className="py-3 px-6">action</th> */}
              </tr>
            </thead>
            <tbody className="text-gray-600 font-light">
              {exchangeTable ? (
                exchangeTable.map((item, i) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200 w-full"
                  >
                    <th className="py-2 px-6">{currentPage * 10 + (i + 1)}</th>
                    <td className="py-2 px-6 flex justify-center">
                      {/* <img
                                            className='w-14 h-14 rounded-full'
                                            src={item.attachmentId === null ? images : getFile + item.attachmentId}
                                            alt="nofound" /> */}
                      <LazyLoadImage
                        src={
                          item.attachmentId === null
                            ? images
                            : getFile + item.attachmentId
                        }
                        alt="nofound"
                        effect="blur"
                        className="rounded-full w-14 h-14"
                      />
                    </td>
                    <td className="py-2 px-6">{item.fullName}</td>
                    <td className="py-2 px-6">{item.giftName}</td>
                    <td className="py-2 px-6">{item.groupName}</td>
                    <td className="py-2 px-6">{item.giftRate}</td>
                    <td className="py-2 px-6">{item.date}</td>
                    <td className="py-2 px-6">
                     
                        <input
                          type="checkbox"
                          className={`${
                            item.active == "true" ? "hidden" : ""
                          } form-checkbox h-5 w-5 text-blue-600`}
                          checked={item.active}
                          onClick={() => {
                            setId(item.id)
                            openDeleteModal()
                          }}
                        />
                    </td>
                    {/* <td className="py-2 px-6">
                                <div className="flex item-center justify-center">
                                    <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white active:scale-95 tracking-widest rounded-lg shadow-lg font-semibold py-1.5 px-4 duration-300">info</button>
                                </div>
                            </td> */}
                  </tr>
                ))
              ) : (
                <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200 w-full">
                  <th
                    className="text-center py-5 text-xl tracking-wide"
                    colSpan="9"
                  >
                    Exchange not found 😊
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-7 ms-1 mb-20 lg:mb-10">
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

      {isModalDelete && (
        <div className=" bg-gray-600 bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
          <div className="modal zoom-modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-96">
            <div className="flex justify-between items-center border-b pb-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Delete Category
              </h2>
              <button
                onClick={closeDeleteModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <div className="mt-6 pb-6 border-b font-medium text-lg">
              Are you sure about that?
            </div>
            <div className="flex justify-between mt-5">
              <button onClick={closeDeleteModal} className="btm-close">
                No
              </button>
              <button
                onClick={() => {
                  toggleActive(id);
                }}
                className="btm"
              >
                {loading ? <Loader /> : "Yes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExchangeTable;
