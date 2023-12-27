import React, { useState } from 'react';
import "../../globalcss/style.css"

const GiftCard = () => {
  const initialCategories = [
    { id: 1, imageUrl: 'Front-End', giftName: 'mishka1', coins: '200', description: "zor narsa1" },
    { id: 2, imageUrl: 'Front-End', giftName: 'mishka2', coins: '200', description: "zor narsa2" },
    { id: 3, imageUrl: 'Front-End', giftName: 'mishka3', coins: '200', description: "zor narsa3" },
    { id: 4, imageUrl: 'Front-End', giftName: 'mishka4', coins: '200', description: "zor narsa4" },
    { id: 5, imageUrl: 'Front-End', giftName: 'mishka5', coins: '200', description: "zor narsa5" },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni ochish va yopish uchun holat

  // Function to toggle the active state
  const toggleActive = (id) => {
    setCategories(categories.map(category => {
      if (category.id === id) {
        return { ...category, active: !category.active };
      }
      return category;
    }));
  }

  // Modalni ochish va yopish uchun funksiyalar
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-wrap justify-around">
      {categories.map(category => (
        <div key={category.id} className="w-80 h-96 rounded-xl overflow-hidden shadow-xl m-4 up">
          <img className="w-full h-1/2 bg-contain" src={category.imageUrl} alt="Gift" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{category.giftName}</div>
            <p className="text-gray-700 text-base text-center">
              {category.coins}<br />
              {category.description}
            </p>
          </div>
          <div className="px-6 pt-4 text-center">
            <button onClick={openModal} className="btm">
              Edit
            </button>
          </div>
        </div>
      ))}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Create New Product</h2>
            <button onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            {/* Modal body */}
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                  <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                </div>
              </div>
              <button type="submit" className="btm">
               Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftCard;
