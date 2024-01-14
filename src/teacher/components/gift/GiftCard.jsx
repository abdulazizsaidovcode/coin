import React, { useEffect, useState } from 'react';
import "../../../globalcss/style.css";
import giftImg from "../../../assits/itca.jpg";
import axios from 'axios';
import { config, getFile, setConfig, url } from '../../../components/api/api';

const GiftCard = () => {
    const [gifts, setGifts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [toShow, setItemToShow] = useState('');


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
                            <button className="btm-info" onClick={() => {
                                openModal()
                                setItemToShow(item.description)
                            }}>
                                Gift Info
                            </button>
                        </div>

                        {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/2">
                        <div className="mt-6 pb-6 border-b font-medium text-lg">
                            {toShow}
                        </div>
                        <div className='flex justify-end items-center mt-5'>
                            <button className="font-semibold bg-green-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300" onClick={closeModal}>
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            )}
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
        </div>
    );
};

export default GiftCard;
