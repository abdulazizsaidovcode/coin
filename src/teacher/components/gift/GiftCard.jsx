import React, { useState } from 'react';
import "../../../globalcss/style.css";
import giftImg from "../../../assits/itca.jpg";

const GiftCard = () => {
    const initialCategories = [
        { id: 1, imageUrl: 'Front-End', giftName: 'mishka1', coins: '200', description: "zor narsa1" },
        { id: 2, imageUrl: 'Front-End', giftName: 'mishka2', coins: '200', description: "zor narsa2" },
        { id: 3, imageUrl: 'Front-End', giftName: 'mishka3', coins: '200', description: "zor narsa3" },
        { id: 4, imageUrl: 'Front-End', giftName: 'mishka4', coins: '200', description: "zor narsa4" },
        { id: 5, imageUrl: 'Front-End', giftName: 'mishka5', coins: '200', description: "zor narsa5" },
    ];

    const [categories, setCategories] = useState(initialCategories);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="w-full flex flex-wrap justify-evenly mt-10 font-inika">
            {categories.length !== 0 ?
                categories.map((category, i) => (
                    <div key={category.id} className="w-1/4 h-96 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8">
                        <img className="w-full h-1/2 object-cover" src={giftImg} alt="Gift" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">{category.giftName}</div>
                            <p className="text-gray-700 text-base text-center">
                                {category.coins}<br />
                                {category.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 text-center">
                            <button onClick={openModal} className="btm">
                                Exchange
                            </button>
                        </div>
                    </div>
                )) :
                <div className="w-1/4 h-96 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8">
                    <img className="w-full h-52 object-cover" src={giftImg} alt="Gift" />
                    <div className="px-6 pt-10 w-full flex justify-center items-center">
                        <div className="font-bold text-xl mb-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
                        </div>
                    </div>
                </div>
            }

            {/* Modal */}
        </div>
    );
};

export default GiftCard;
