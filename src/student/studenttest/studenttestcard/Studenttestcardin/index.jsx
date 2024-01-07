import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function StudentTestCardIn({ i, test }) {
  return (
    <div className="flex items-center justify-between bg-gray-200 py-3 px-10 rounded-lg all-shadow my-2">
      <div className="flex items-center justify-between w-6/12">
        <span className="font-semibold">{i} - {test.question > 10 ? test.question.substring(0, 10) + '...' : test.question}</span>
        <span className="ml-2 text-sm bg-gray-300 px-2 py-1 rounded">{test.processMinute} min</span>
        {test.active ? (
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
