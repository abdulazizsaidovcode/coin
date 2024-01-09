import React, { useEffect, useState } from 'react';
import "../../../globalcss/style.css";
import { config, setConfig, url } from '../../../components/api/api';
import axios from 'axios';

const StudentGiftCard = () => {
  const [gift, setGift] = useState([]);  // nomini 'setTopStudent' dan 'setGift' ga o'zgartirildi aniqroq bo'lishi uchun

  useEffect(() => {
    setConfig();
    axios.get(url + "gift", config)
      .then(res => {
        // Ma'lumotlarni "body" keyidan so'ng "object" keyi orqali olish
        if (res.data && res.data.body && res.data.body.object) {
          setGift(res.data.body.object); // gift state'ini yangilash
        }
      })
      .catch(err => console.log("Backenddan ma'lumot olishda xatolik yuz berdi 😭", err));
  }, []);

  return (
    <div className="flex flex-wrap justify-around bg-gray-100 pt-10">
      {gift.map(item => ( // 'category' nomi 'item' ga o'zgartirildi tushunarliroq bo'lishi uchun
        <div key={item.id} className="w-80 h-96 rounded-xl overflow-hidden all-shadow m-4 up">
          <img className="w-full h-1/2 bg-contain" src={item.attachmentId} alt="Gift" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{item.name}</div>
            <p className="text-gray-700 text-base text-center">
              Coins: {item.rate}<br />
              {item.description}
            </p>
          </div>
          <div className="px-6 pt-4 text-center">
            <button className="btm">
              Exchange
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentGiftCard;
