import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rasm from "../../../../assits/opacha.jpg";
import { faClock, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { getFile } from '../../../../components/api/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function TeacherTestCard({ allTestCard, getTestTable, setTableHeddin }) {
    return (
        <>
            <div className="w-full flex justify-around flex-wrap gap-8 md:gap-5 lg:gap-10 xl:gap-16">
                {allTestCard ?
                    allTestCard.map((item) => (
                        <div className='bg-white rounded-xl all-shadow hover:shadow-lg hover:shadow-slate-500 
                            duration-300 overflow-hidden w-full md:w-[48%] lg:w-1/4 xl:max-w-72 h-[360px] sm:h-[450px] md:h-[360px]'>
                            <div className="w-full h-44 sm:h-64 md:h-44 overflow-hidden">
                                {/* <img
                                    src={item.attachmentId === null
                                        ? rasm
                                        : getFile + item.attachmentId
                                    }
                                    alt="profile"
                                    className="h-full w-full hover:scale-110 object-cover duration-300"
                                /> */}
                                <LazyLoadImage
                                    src={item.attachmentId === null ? rasm : getFile + item.attachmentId}
                                    alt="profile"
                                    effect="blur"
                                    className="hover:scale-110 lazyload"
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className="mt-3 text-center p-3 pt-0">
                                <h2 className="font-bold text-lg">{item.categoryName}</h2>
                                <span className="text-gray-800 font-bold opacity-90">{item.allHour} all hour</span>
                                <div className="flex justify-between items-center py-5">
                                    <div className='flex items-center justify-start w-6/12'>
                                        <FontAwesomeIcon icon={faQuestionCircle} className="text-red-500 text-2xl mr-2" />
                                        <span>{item.countOfTest} test live</span>
                                    </div>
                                    <div className="flex items-center justify-start w-6/12">
                                        <FontAwesomeIcon icon={faClock} className="text-red-500 text-2xl mr-2" />
                                        <span>{item.allHour} hour {item.allMinute} min</span>
                                    </div>
                                </div>
                                <button className="btm" onClick={() => {
                                    getTestTable(item.categoryId);
                                    sessionStorage.setItem('testCategoryId', item.categoryId);
                                    setTableHeddin(true);
                                }}>View tests</button>
                            </div>
                        </div>

                    )) :
                    <div className="bg-white inline-block m-2 rounded-lg all-shadow hover:shadow-xl duration-300 overflow-hidden max-w-sm w-72">
                        <div className="flex justify-center items-center w-full h-44 overflow-hidden">
                            {/* <img src={rasm} alt="Profile" className="h-full w-full object-cover hover:scale-110 duration-300" /> */}
                            <LazyLoadImage
                                src={rasm}
                                alt="profile"
                                effect="blur"
                                className="hover:scale-110 duration-300 lazyload"
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div className="mt-3 text-center p-3 pt-0">
                            <h2 className="font-semibold tracking-wide opacity-70 text-lg">Test not found 😊</h2>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default TeacherTestCard;
