import React from 'react';
import img from "../../assits/itca.jpg"

const GiftCard = ( imageUrl, giftName, coins, description ) => {
  return (
    <div className="w-1/5 rounded-xl overflow-hidden shadow-xl">
      <img className="w-full h-1/2 bg-contain" src={img} alt="Gift" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{giftName}</div>
        <p className="text-gray-700 text-base text-center">
          {coins} C<br/>
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded">
          Exchange
        </button>
      </div>
    </div>
  );
};



const GiftExchangeComponent = () => {
  const gifts = [
    {
      imageUrl: 'path-to-your-image', // Replace with the path to your image
      giftName: 'Gift Name',
      coins: '150 C',
      description: 'Description'
    },
    // ... Add more gifts as needed
  ];

  return (
    <div className="flex justify-center space-x-4">
      {gifts.map((gift, index) => (
        <GiftCard
          key={index}
          imageUrl={gift.imageUrl}
          giftName={gift.giftName}
          coins={gift.coins}
          description={gift.description}
        />
      ))}
    </div>
  );
};

export default GiftExchangeComponent;
