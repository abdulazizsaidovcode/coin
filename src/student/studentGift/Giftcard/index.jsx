import React, { useEffect, useState } from "react";
import "../../../globalcss/style.css";
import { config, getFile, setConfig, url } from "../../../components/api/api";
import axios from "axios";
import { toast } from "react-toastify";

const StudentGiftCard = () => {
  const [gift, setGift] = useState([]); // nomini 'setTopStudent' dan 'setGift' ga o'zgartirildi aniqroq bo'lishi uchun
  const [giftId, setGiftId] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalExchange, setIsModalExchange] = useState(false);
  const [toShow, setItemToShow] = useState("");


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openExchange = () => setIsModalExchange(true);
  const closeExchange = () => setIsModalExchange(false);



  useEffect(() => {
    setConfig();
    axios
      .get(url + "gift", config)
      .then((res) => {
        // Ma'lumotlarni "body" keyidan so'ng "object" keyi orqali olish
        if (res.data && res.data.body && res.data.body.object) {
          setGift(res.data.body.object); // gift state'ini yangilash
        }
      })
      .catch((err) =>
        console.log("Backenddan ma'lumot olishda xatolik yuz berdi 😭", err)
      );
  }, []);
  const exchange = () => {
    axios.post(`${url}exchange/save/${giftId}`, '', config)
      .then((res) => {
        if (res.data.success) {
          toast.success("Succes!")
          closeExchange()
        } else {
          toast.warning(res.data.message);
          closeExchange()
        }
      })
      .catch((error) => {
        console.log(`${error.response.data.message} `);
        error.response.data.msg === 'Unauthorized user!' ? toast
          .error("Authorization is failed! Please login again.") :
          toast.error("Error! " + error.response.data.msg);
      });
  }


  return (
    <div className="flex flex-wrap justify-around bg-gray-100 pt-10">
      {gift.map(
        (
          item // 'category' nomi 'item' ga o'zgartirildi tushunarliroq bo'lishi uchun
        ) => (
          <div
            key={item.id}
            className="w-80 h-96 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8"
          >
            <img
              className="w-full h-1/2 object-cover"
              src={
                item.attachmentId === null
                  ? "https://img.freepik.com/premium-photo/gift-white-box-with-beige-ribbon-beige-background-gift-holiday_629213-1580.jpg"
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
            <div className="px-2 flex gap-3 pt-4 text-center justify-around">
              <button
                className="btm-info"
                onClick={() => {
                  openModal();
                  setItemToShow(item.description);
                }}
              >
                Info
              </button>
              <button
                className="btm"
                onClick={() => {
                  openExchange();
                  setGiftId(item.id);
                }}
              >
                Exchange
              </button>
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 zoom-modal">
                <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/3">
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
            {isModalExchange && (
              <div className="fixed inset-0 flex items-center justify-center z-50 zoom-modal">
                <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/3">
                  <div className="mt-6 pb-6 border-b font-medium text-lg">
                    Do you really want to get the gift !
                  </div>
                  <div className="flex justify-end gap-3 items-center mt-5">
                    <button
                      className="font-semibold bg-red-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300"
                      onClick={closeExchange}
                    >
                      No
                    </button>
                    <button
                      className="font-semibold bg-green-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300"
                      onClick={exchange}
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default StudentGiftCard;
