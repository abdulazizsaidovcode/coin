import React, { useState } from 'react';
import { config, url } from '../../components/api/api';
import axios from 'axios';
import TotalCoins from '../../components/Total coins';
import Studentstatistic from './statisctic';

// Demo uchun ba'zi ma'lumotlar

// Filterlar uchun kategoriyalar va guruhlar

const StudentGroup = ({}) => {
  const [exchange, setExchange] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGroup, setSelectedGroup] = useState('All');

  // Checkbox holatini o'zgartirish uchun handler
  const getExchange = () => {
    axios.get(url + "exchange", config) 
      .then((res) => {
        setExchange(res.data)
      })
  };

  // Kategoriyalar va guruhlar bo'yicha filtrlash funksiyalari

  return (
    <div className="p-8 w-full bg-gray-100">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Exchange</h2>
      </div>
      <div className='flex justify-around mb-10 px-10'>
        <div className='w-5/12 text-5xl flex items-center h-64'>
          MY group
        </div>
        <div className='w-5/12 shadow-xl up h-64'>
            <Studentstatistic/>
        </div>
      </div>
      <div>
        {/* Filterlar */}
        <div className="mb-4">
          {/* Kategoriyalar uchun filterlar */}
          <div className='flex mb-2 flex-wrap'>
            
          </div>
          {/* Guruhlar uchun filterlar */}
          <div className='flex flex-wrap'>
          </div>
        </div>
        {/* Jadval */}
        <table className="w-full rounded-3xl rounded-t-3xl shadow-md">
          <thead className="bg-gray-800 text-white rounded-s-2xl uppercase text-sm leading-normal">
            <tr className='rounded-s-2xl'>
              <th className="py-3 px-6 text-left rounded-tl-3xl">No</th>
              <th className="py-3 px-6 text-left">Photo</th>
              <th className="py-3 px-6 text-left">Gift name</th>
              <th className="py-3 px-6 text-left">name</th>
              <th className="py-3 px-6 text-center">Cion</th>
              <th className="py-3 px-6 text-center">Date</th>
              <th className="py-3 px-6 text-center">Active</th>
              <th className="py-3 px-6 text-center rounded-tr-3xl">Info</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-light">
            {exchange.length && exchange.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-left"><img src={item.imgurl} alt="nofound" /></td>
                <td className="py-3 px-6 text-left">{item.giftname}</td>
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.Coin}</td>
                <td className="py-3 px-6 text-left">{item.date}</td>
                <td className="py-3 px-6 text-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded"
                    checked={item.active}
                  />
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">info</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default StudentGroup;
