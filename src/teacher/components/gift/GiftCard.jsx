import React, { useEffect, useState } from "react";
import "../../../globalcss/style.css";
import giftImg from "../../../assits/itca.jpg";
import { getFile } from "../../../components/api/api";

const GiftCard = ({ gifts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toShow, setItemToShow] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-wrap justify-evenly mt-10 font-inika">
      {gifts ? (
        gifts.map((item) => (
          <div
            key={item.id}
            className="w-1/4 h-96 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8"
          >
            <img
              className="w-full h-1/2 object-cover"
              src={item.attachmentId === null
                ? giftImg
                : getFile + item.attachmentId
              }
              alt="Gift"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                {item.name}
              </div>
              <p className="text-gray-700 text-base text-center">
                {item.rate} coin
                {/* {item.description} */}
              </p>
            </div>
            <div className="px-6 pt-4 text-center">
              <button
                className="btm-info"
                onClick={() => {
                  openModal();
                  setItemToShow(item.description);
                }}
              >
                Gift Info
              </button>
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/2">
                  <div className="mt-6 pb-6 border-b font-medium text-lg">
                    {toShow}
                  </div>
                  <div className="flex justify-end items-center mt-5">
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
        ))
      ) : (
        <div className="w-1/4 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8">
          <img className="w-full h-52 object-cover" src={giftImg} alt="Gift" />
          <p className="text-center my-3 font-semibold tracking-wider">Gift not found 😊</p>
        </div>
      )}
    </div>
  );
};

export default GiftCard;
