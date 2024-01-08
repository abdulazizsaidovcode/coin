import React, { useEffect, useState } from 'react';
import { config, setConfig, url } from '../../components/api/api';
import axios from 'axios';
import Studentstatistic from './statisctic';

const StudentGroup = () => {
  const [topStudent, setTopStudent] = useState([]);
    useEffect(() => {
        setConfig();
        axios.get(url + "user/top/student", config)
            .then(res => {
              setTopStudent(res.data.body);
              console.log(topStudent);
            })
            .catch(err => console.log("Boshqa backendinchi topiyla iltomos 😭", err));
    }, []);

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
        <div className='w-5/12 all-shadow up h-64'>
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
        <table className="w-full rounded-3xl rounded-t-3xl all-shadow">
          <thead className="bg-gray-800 text-white rounded-s-2xl uppercase text-sm leading-normal">
            <tr className='rounded-s-2xl'>
              <th className="py-3 px-6 text-left rounded-tl-3xl">No</th>
              <th className="py-3 px-6 text-left">Photo</th>
              <th className="py-3 px-6 text-left">Full name</th>
              <th className="py-3 px-6 text-center">Group</th>
              <th className="py-3 px-6 text-center">Exchange</th>
              <th className="py-3 px-6 text-center">Task</th>
              <th className="py-3 px-6 text-center rounded-tr-3xl">rade</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-light">
            { topStudent.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-left"><img src={topStudent.imgurl} alt="nofound" /></td>
                <td className="py-3 px-6 text-left">{topStudent.fullName}</td>
                <td className="py-3 px-6 text-left">{topStudent.coin}</td>
                <td className="py-3 px-6 text-left">{topStudent.date}</td>
                <td className="py-3 px-6 text-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded"
                    checked={topStudent.active}
                  />
                </td>
                <td className="py-3 px-6 text-center bo">
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
