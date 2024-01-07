import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import rasm from "../../../assits/opacha.jpg"
import {faCheckCircle, faClock, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {getFile} from "../../../components/api/api";

function StudentTestCard({category, setCategoryId}) {


    return (
        <>
            <div className="bg-white rounded-lg all-shadow p-3 max-w-sm w-72">
                <div className="flex justify-center items-center space-x-4 w-full h-40">
                    <img src={category.attachmentId ? getFile + category.attachmentId : rasm} alt="Profile"
                         className=" h-full w-full "/>
                </div>
                <div className="mt-3 text-center">
                    <h2 className="font-bold text-lg">{category.categoryName}</h2>
                    <span className="text-gray-800 font-bold">{category.coin}</span>
                    <p className="text-gray-600">description</p>
                    <div className="flex justify-between items-center py-5">
                        <div className='flex items-center justify-start w-6/12'>
                            <FontAwesomeIcon icon={faQuestionCircle} className="text-red-500 text-2xl mr-2"/>
                            <span>{category.totalTest}</span>
                        </div>
                        <div className='flex items-center justify-start ml-2 w-6/12'>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl mr-2"/>
                            <span>{category.workTest}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center justify-start w-6/12">
                            <FontAwesomeIcon icon={faClock} className="text-red-500 text-2xl mr-2"/>
                            <span>{category.workTime}</span>
                        </div>
                        <div className='flex items-center justify-start ml-2 w-6/12'>
                            <FontAwesomeIcon icon={faClock} className="text-green-500 text-2xl mr-2"/>
                            <span>{category.totalTime}</span>
                        </div>
                    </div>
                    <button className="btm mt-4" onClick={() => setCategoryId(category.categoryId)}>Start</button>
                </div>
            </div>
        </>
    );
}

export default StudentTestCard;
