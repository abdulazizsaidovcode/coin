import React, { useState } from 'react';

const GiftCard = () => {
  const initialCategories = [
    { id: 1, imageUrl: 'Front-End', giftName: 'mishka1', coins: '200', description: "zor narsa1" },
    { id: 2, imageUrl: 'Front-End', giftName: 'mishka2', coins: '200', description: "zor narsa2" },
    { id: 3, imageUrl: 'Front-End', giftName: 'mishka3', coins: '200', description: "zor narsa3" },
    { id: 4, imageUrl: 'Front-End', giftName: 'mishka4', coins: '200', description: "zor narsa4" },
    { id: 5, imageUrl: 'Front-End', giftName: 'mishka5', coins: '200', description: "zor narsa5" },
  ];

  const [categories, setCategories] = useState(initialCategories);

  // Function to toggle the active state
  const toggleActive = (id) => {
    setCategories(categories.map(category => {
      if (category.id === id) {
        return { ...category, active: !category.active };
      }
      return category;
    }));
  }

  return (
    <div className="flex flex-wrap justify-between ml-64 w-full">
      {categories.map(category => (
        <div key={category.id} className="w-1/5 h-96 rounded-xl overflow-hidden shadow-xl m-4">
          <img className="w-full h-1/2 bg-contain" src={category.imageUrl} alt="Gift" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{category.giftName}</div>
            <p className="text-gray-700 text-base text-center">
              {category.coins}<br />
              {category.description}
            </p>
          </div>
          <div className="px-6 pt-4 text-center">
            <button onClick={() => toggleActive(category.id)} className="btm">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GiftCard;
