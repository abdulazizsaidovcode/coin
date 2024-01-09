import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function StudentTestCardIn({ questionNumber, questionText, currency, price, time, isAnswered }) {
  return (
    <div className="flex items-center justify-between bg-gray-200 py-3 px-10 rounded-lg shadow my-2">
      <div className="flex items-center justify-between w-6/12">
        <span className="font-semibold">{questionNumber} - {questionText}</span>
        <span className="ml-2 text-sm bg-gray-300 px-2 py-1 rounded">{currency} {price} / {time} min</span>
        {isAnswered ? (
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 ml-2 text-2xl" />
        ) : (
          <FontAwesomeIcon icon={faQuestionCircle} className="text-red-500 ml-2 text-2xl" />
        )}
      </div>
      <button className="btm">
        <Link to="/student/teststart">begin</Link>
      </button>
    </div>
  );
}

export default StudentTestCardIn;
