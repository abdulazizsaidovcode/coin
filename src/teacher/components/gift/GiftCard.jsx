import React, { useEffect, useState } from "react";
import "../../../globalcss/style.css";
import giftImg from "../../../assits/itca.jpg";
import { getFile } from "../../../components/api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GiftCard = ({ gifts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toShow, setItemToShow] = useState("");

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex justify-evenly flex-wrap my-10 font-inika">
      {gifts ? (
        gifts.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/4 h-[30rem] sm:h-[24rem] lg:h-[23rem] xl:h-[24rem] p-5">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-slate-500
                 duration-300 mb-8">
              <div className="w-full h-1/2 overflow-hidden">
                <LazyLoadImage
                  src={item.attachmentId === null ? giftImg : getFile + item.attachmentId}
                  alt="Gift"
                  effect="blur"
                  className="hover:scale-110 lazyload"
                  width='100%'
                  height='100%'
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{item.name}</div>
                <p className="text-gray-700 text-base text-center">{item.rate} coin</p>
              </div>
              <div className="px-6 pt-4 text-center">
                <button className="btm-info" onClick={() => {
                  openModal();
                  setItemToShow(item.description);
                }}>Gift Info</button>
              </div>

              {isModalOpen && (
                <div className={`${isModalOpen ? 'zoom-modal' : ''} fixed inset-0 flex items-center justify-center z-50`}>
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
