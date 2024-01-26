import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rasm from "../../../assits/opacha.jpg";
import { faCheckCircle, faClock, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function TeacherTestCard() {
    return (
        <>
            <div className="bg-white rounded-lg all-shadow hover:shadow-xl duration-300 overflow-hidden max-w-sm w-72">
                <div className="flex justify-center items-center w-full h-44 overflow-hidden">
                    <img src={rasm} alt="Profile" className="h-full w-full hover:scale-110 duration-300" />
                </div>
                <div className="mt-3 text-center p-3 pt-0">
                    <h2 className="font-bold text-lg">C name</h2>
                    <span className="text-gray-800 font-bold opacity-90">coin</span>
                    <div className="flex justify-between items-center py-5">
                        <div className='flex items-center justify-start w-6/12'>
                            <FontAwesomeIcon icon={faQuestionCircle} className="text-red-500 text-2xl mr-2" />
                            <span>total test</span>
                        </div>
                        <div className="flex items-center justify-start w-6/12">
                            <FontAwesomeIcon icon={faClock} className="text-red-500 text-2xl mr-2" />
                            <span>category.workTime</span>
                        </div>
                    </div>
                    <button className="btm mt-3">Start</button>
                </div>
            </div>
        </>
    );
}

export default TeacherTestCard;
