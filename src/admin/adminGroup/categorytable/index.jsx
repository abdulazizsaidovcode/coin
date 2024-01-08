import React, { useEffect, useState } from 'react';
import '../../../globalcss/style.css';
import { config, setConfig, url } from '../../../components/api/api';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminGroupTable = () => {
  const [Group, setGroup] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setConfig();
    axios.get(url + "group", config)
      .then(res => {
        // Backend tuzilishiga qarab, ma'lumotlar yo'li o'zgartirilishi kerak
        if (res.data && res.data.body && res.data.body.object) {
          setGroup(res.data.body.object);
        } else {
          toast.error("Groups not found!");
        }
      })
      .catch(err => {
        console.error("Error retrieving data 😭", err);
        toast.error("Error retrieving data!");
      });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto space-y-8">
        <div className="bg-white shadow-md rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">No</th>
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Photo</th>
                  <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Group</th>
                  <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Coins</th>
                  <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Tasks</th>
                  <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Active</th>
                  <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {Group.map((group, index) => (
                  <tr key={group.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                    <td className="py-3 px-6 text-left">
                      <img src={group.imgurl} alt="Group" className="h-10 w-10 rounded-full" />
                    </td>
                    <td className="py-3 px-6 text-left">{group.name}</td>
                    <td className="py-3 px-6 text-center">{group.groupName}</td>
                    <td className="py-3 px-6 text-center">{group.coin}</td>
                    <td className="py-3 px-6 text-center">{group.task}</td>
                    <td className="py-3 px-6 text-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600 rounded"
                        checked={group.active ? 'checked' : ''}
                        readOnly
                      />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline">
                        Info
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* {isModalOpen && (
        // ... Modal Content Here ...
      )} */}

    </div>
  );
};

export default AdminGroupTable;
