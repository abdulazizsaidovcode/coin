import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rasm from "../../../assits/opacha.jpg"
import { faQuestionCircle, faCheckCircle, faHeart, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import StudentTestCardIn from './Studenttestcardin';

function StudentTestCard({ name, role, course, price, description, questions, likes, timeSpent, totalCourseTime }) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-3 max-w-sm w-72">
                <div className="flex justify-center items-center space-x-4 w-full h-40">
                    <img src={rasm} alt="Profile" className=" h-full w-full " />
                </div>
                <div className="mt-3 text-center">
                    <h2 className="font-bold text-lg">{course}</h2>
                    <span className="text-gray-800 font-bold">{price}</span>
                    <p className="text-gray-600">{description}</p>
                    <div className="flex justify-between items-center py-5">
                        <div className='flex items-center justify-start w-6/12'>
                            <FontAwesomeIcon icon={faQuestionCircle} className="text-red-500 text-2xl mr-2" />
                            <span>{questions}</span>
                        </div>
                        <div className='flex items-center justify-start ml-2 w-6/12'>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl mr-2" />
                            <span>{likes}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center justify-start w-6/12">
                            <FontAwesomeIcon icon={faClock} className="text-red-500 text-2xl mr-2" />
                            <span>{timeSpent}</span>
                        </div>
                        <div className='flex items-center justify-start ml-2 w-6/12'>
                            <FontAwesomeIcon icon={faClock} className="text-green-500 text-2xl mr-2" />
                            <span>{totalCourseTime}</span>
                        </div>
                    </div>
                    <button className="btm mt-4">
                        Start
                    </button>
                </div>

            </div>
            <div className='mt-5'>
                <StudentTestCardIn
                    questionNumber="1"
                    questionText="Question"
                    currency="5 c"
                    price="3"
                    time="5"
                    isAnswered={true}
                />

                <StudentTestCardIn
                    questionNumber="2"
                    questionText="Question"
                    currency="5 c"
                    price="3"
                    time="5"
                    isAnswered={false}
                />
            </div>
        </>
    );
}

export default StudentTestCard;
