import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faThumbsUp, faClock, faHistory } from '@fortawesome/free-solid-svg-icons';
import img from "../../assits/IT-CA-logo.png"

const UserCard = ({ phone, email, course, coinValue, coinCost, questionCount, thumbsUpCount, timeSpent, timeRemaining }) => {
    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-96 p-4 m-2">
            <div className=" text-white text-xl font-bold p-4">
                <img className='w-full h-40 bg-contain' src={img} alt="" />
            </div>
            <div className="p-4 flex justify-between items-center text-xs">
                <span>{phone}</span>
                <span>{email}</span>
            </div>
            <div className="p-4 border-t border-gray-200 text-center">
                <h3 className="font-bold text-lg">{course}</h3>
                <div>{coinValue} / {coinCost} C</div>
                <p className="text-gray-600 text-sm">Description</p>
                <div className='flex justify-between'>
                    <div className="flex justify-between items-center   mt-2 text-gray-800 font-bold">
                        <div className="flex items-center flex-col">
                            <div className='text-xl'>
                                <FontAwesomeIcon icon={faQuestionCircle} className="text-red-600 mr-2" />
                                <span className="mr-2">{questionCount}</span>
                            </div>
                            <div className='text-xl'>
                                <FontAwesomeIcon icon={faThumbsUp} className="text-green-600" />
                                <span className="ml-2">{thumbsUpCount}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center   mt-2 text-gray-800 font-bold">
                        <div className="flex items-center flex-col">
                            <div className='text-xl'>
                                <span className="flex items-center text-green-600">
                                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                                    {timeSpent}
                                </span>
                            </div>
                            <div className='text-xl'>
                                <span className="flex items-center text-red-600">
                                    <FontAwesomeIcon icon={faHistory} className="mr-2" />
                                    {timeRemaining}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700">
                    Start
                </button>
            </div>
        </div>
    );
};

const StudentTestCard = () => {
    const userInfo = {
        phone: '+998 99-264-62-62',
        email: 'javokhirkoziboyev',
        course: 'Java Core',
        coinValue: '500',
        coinCost: '350',
        questionCount: '20',
        thumbsUpCount: '15',
        timeSpent: '7h 39m',
        timeRemaining: '5h 15m'
    };

    return (
        <div className="flex flex-wrap justify-between items-center">
            <UserCard {...userInfo} />
            <UserCard {...userInfo} />
            <UserCard {...userInfo} />
        </div>
    );
};

export default StudentTestCard;
