import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function StudentTestCardIn({i, test}) {
    return (
        <div className="flex items-center md:justify-between  bg-gray-200 py-3 md:px-10 px-3 rounded-lg all-shadow my-2 up">
            <div className="flex items-center justify-between md:w-6/12">
                <span
                    className="font-semibold">{i} - {test.question.length > 40 ? test.question.substring(0, 40) + '...' : test.question}</span>
                <span className="ml-2 text-sm bg-gray-300 px-2 py-1 rounded">{test.processMinute} min</span>
                {test.active ? (
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 m-2 text-2xl"/>
                ) : (
                    <FontAwesomeIcon icon={faQuestionCircle} className="text-red-500 m-2 text-2xl"/>
                )}
            </div>
            <Link to="/student/teststart" className='btm' onClick={() => {
                sessionStorage.setItem('testId', test.id);
            }}>begin</Link>
        </div>
    );
}

export default StudentTestCardIn;
