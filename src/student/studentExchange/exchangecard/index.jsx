import React, { useEffect, useState } from 'react';
import "../../../globalcss/style.css";
import { config, getFile, setConfig, url } from '../../../components/api/api';
import axios from 'axios';

const StudentExchangeCard = () => {
  const [gift, setGift] = useState([]);
  const [giftAttachmentId, getgiftAttachmentId] = useState('')

  useEffect(() => {
    setConfig();
    axios.get(url + "exchange/user", config)
      .then(res => {

        setGift(res.data.body.object);
      })
      .catch(err => console.log("Exchange Backenddan ma'lumot olishda xatolik yuz berdi 😭", err));
  }, []);

  return (
    <div className="flex flex-wrap justify-around bg-gray-100 pt-10">
      {gift.length > 0 ? (
        gift.map(item => (
          <div key={item.id} className={` ${!item.active ? "bg-gray-300 cursor-progress" : ""} w-80 h-96 rounded-xl overflow-hidden all-shadow m-4 up`}>
            <img className="w-full h-1/2 bg-contain" src={item.attachmentId ? getFile + item.attachmentId : ''} alt='fg' />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">{item.name}</div>
              <div className="font-bold text-xl mb-2 text-center">{item.fullName}</div>
              <div className="font-bold text-xl mb-2 text-center">{item.groupName}</div>
              <div className="font-bold text-xl mb-2 text-center">{item.date}</div>
              <p className="text-gray-700 text-base text-center">Coins: {item.giftRate}</p>
              <p className='text-center text-red-500'>{item.active ? "" : "tasdiqlan moqda"}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center w-full">
          <p className="text-gray-800 text-2xl">Sizda hali sovg'a yo'q 😭</p>
        </div>
      )}
    </div>
  );
};

export default StudentExchangeCard;
