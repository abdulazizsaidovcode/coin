import React, { useEffect, useState } from 'react';
import "../../../globalcss/style.css";
import giftImg from "../../../assits/itca.jpg";
import axios from 'axios';
import { config, getFile, setConfig, url } from '../../../components/api/api';

const GiftCard = () => {
    const [gifts, setGifts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setConfig();
        getGifts();
    }, []);

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    // get gifts
    const getGifts = () => {
        axios.get(url + "gift", config)
            .then(res => setGifts(res.data.body.object))
            .catch(() => console.log("kelmadi"))
    }

    // console.log(gifts);

    return (
        <div className="w-full flex flex-wrap justify-evenly mt-10 font-inika">
            {gifts.length !== 0 ?
                gifts.map((item) => (
                    <div key={item.id} className="w-1/4 h-96 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8">
                        <img className="w-full h-1/2 object-cover"
                            src={item.attachmentId === null ?
                                giftImg : getFile + item.attachmentId} alt="Gift" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">{item.name}</div>
                            <p className="text-gray-700 text-base text-center">
                                {item.rate} coin
                                {/* {item.description} */}
                            </p>
                        </div>
                        <div className="px-6 pt-4 text-center">
                            <button onClick={openModal} className="btm">
                                Gift Info
                            </button>
                        </div>
                    </div>
                )) :
                <div className="w-1/4 h-96 rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 mr-3 mb-8">
                    <img className="w-full h-52 object-cover" src={giftImg} alt="Gift" />
                    <div className="px-6 pt-10 w-full flex justify-center items-center">
                        <div className="font-bold text-xl mb-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 24 24">
                                <circle cx="12" cy="2" r="0" fill="currentColor">
                                    <animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle>
                                <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)">
                                    <animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle>
                                <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)">
                                    <animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle>
                                <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)">
                                    <animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle>
                                <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)">
                                    <animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle>
                                <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)">
                                    <animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle>
                                <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)">
                                    <animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle>
                                <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)">
                                    <animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            }

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/2">
                        <div className='flex justify-between items-center border-b pb-1'>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Gifts Info</h2>
                            <button onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="mt-6 pb-6 border-b font-medium text-lg">
                            <label htmlFor="category-name" className="block mt-7 text-sm font-medium text-gray-700">
                                Category name
                            </label>
                            <input
                                id="category-name"
                                placeholder="Enter category name"
                                className="mt-1 w-full rounded-md py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300" />
                        </div>
                        <div className='flex justify-end items-center mt-5'>
                            <button onClick={closeModal} className="font-semibold bg-yellow-500 py-2 px-6 mr-3 text-white rounded-lg active:scale-90 duration-300">
                                Close
                            </button>
                            <button className="font-semibold bg-green-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300">
                                Saqlash
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GiftCard;
