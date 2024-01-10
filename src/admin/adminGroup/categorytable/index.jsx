import axios from "axios";
import React, { useEffect, useState } from "react";
import { byId, config, setConfig, url } from "../../../components/api/api";
import avatar from "../../../assits/itca.jpg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const GroupsTable = (teacher, category, groups) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setConfig();
  }, []);

  return (
    <>
      {/* //  px-4 sm:px-6 lg:px-8 */}
      <div className="w-full bg-gray-100 py-8">
        <div className="w-full mx-auto">
          <div className="bg-white shadow-md rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    {/* Table Headers */}
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      No
                    </th>
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Photo
                    </th>
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Name
                    </th>
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Coin
                    </th>
                    <th className="py-3 px-6 text-xs font-medium uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {groups.length !== 0 ? (
                    groups.map((group, i) => (
                      <tr
                        key={i}
                        className="even:bg-slate-100 hover:bg-slate-200 duration-200 text-center"
                      >
                        <td className="py-3 px-6 border-b border-gray-200">
                          {i + 1}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200 flex justify-center items-center">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="h-16 w-16 rounded-full"
                          />
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200">
                          {group.name === null ? "Yo'q" : group.name}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200">
                          {group.coin === null ? "Yo'q" : group.coin}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-200">
                          <button
                            className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                            onClick={openModal}
                          >
                            Edit
                          </button>
                          <button className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline ml-3">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                      <td className="py-3 px-6"></td>
                      <td className="py-3 px-6"></td>
                      <td className="py-3 px-6 font-inika text-center flex justify-center font-medium text-lg tracking-wider leading-10">
                        <Icon icon="eos-icons:three-dots-loading" width="50" />
                      </td>
                      <td className="py-3 px-6"></td>
                      <td className="py-3 px-6"></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          onClick={closeModal}
        >
          <div
            className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Add New Group
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="categoryId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category ID
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="teacherId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teacher ID
                </label>
                <input
                  type="number"
                  name="teacherId"
                  id="teacherId"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btm-close"
                >
                  Back
                </button>
                <button type="submit" className="btm">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupsTable;
