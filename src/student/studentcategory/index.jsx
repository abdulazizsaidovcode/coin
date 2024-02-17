import React, { useEffect, useState } from "react";
import { config, setConfig, url } from "../../components/api/api";
import axios from "axios";
import Studentcoinstatistic from "../studentdashboard/Studentcoinstatistic";

const StudentGroup = () => {
  const [topStudent, setTopStudent] = useState([]);
  let group = null
  useEffect(() => {
    setConfig();
    axios
      .get(url + "user/student/group/students", config)
      .then((res) => {
        setTopStudent(res.data.body);
      })
      .catch((err) => console.log("Boshqa backendchi topiyla iltimos 😭", err));
  }, []);

  getGroupName()

  function getGroupName(){
    topStudent.map((item) => {
      group = item.groupName;
    })
  }

  return (
    <div className="p-8 w-full bg-gray-100">
      <div className="mb-10">
        <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4">Exchange</h2>
      </div>
      <div className="flex justify-around mb-10 px-10">
        <div className="w-5/12 text-5xl flex items-center h-64  font-bold font-inika text-gray-900 mb-4">MY group {group ? group : ""}</div>
        <div className="w-5/12 h-max shadow-xl up h-64">
          <Studentcoinstatistic />
        </div>
      </div>
      <div>
        {/* ... */}
        <table className="w-full rounded-3xl rounded-t-3xl all-shadow">
          <thead className="bg-gray-800 text-white rounded-s-2xl uppercase text-sm leading-normal">
            <tr className="rounded-s-2xl">
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
            {topStudent.length > 0 ? (
              topStudent.map((student, index) => (
                <tr key={student.id} className="border-b border-gray-200 ">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <img
                      src={student.imgurl}
                      alt="Student"
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="py-3 px-6 text-left">{student.fullName}</td>
                  <td className="py-3 px-6 text-center">{student.groupName}</td>
                  <td className="py-3 px-6 text-center">{student.coin}</td>
                  <td className="py-3 px-6 text-center">{student.task}</td>
                  <td className="py-3 px-6 text-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 rounded"
                      checked={`${student.active ? "checked" : ""}`}
                      readOnly
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b border-gray-200 ">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  Not found 😊
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentGroup;
