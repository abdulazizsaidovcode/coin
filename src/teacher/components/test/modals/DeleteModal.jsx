import axios from "axios";
import { config, url } from "../../../../components/api/api";
import { toast } from "react-toastify";
import LoadingBtn from "../../loadingBtn/LoadingBtn";
import { useState } from "react";

const DeleteModal = (props) => {
    const {
        isHoveredId,
        getTestTable,
        isDeleteMenuOpen,
        toggleDeleteMenu,
        getAllTestCard
    } = props;
    const [isLoading, setIsLoading] = useState(false);
    const testCategoryId = sessionStorage.getItem('testCategoryId');

    const deleteTest = () => {
        setIsLoading(true);
        axios.delete(`${url}test/${isHoveredId.testId}`, config)
            .then(() => {
                setIsLoading(false);
                toast.success("Succesfully delete test✔");
                getTestTable(testCategoryId);
                getAllTestCard();
                toggleDeleteMenu();
            })
            .catch(err => {
                setIsLoading(false);
                toast.error("Something is wrong!");
            })
    }

    const styles = {
        btn: 'py-1.5 px-5 rounded-lg font-inika font-semibold shadow-md active:scale-95 duration-200'
    }

    return (
        <div className={`${isDeleteMenuOpen ? 'animation-modal-test flex justify-center items-start w-full z-50' : 'hidden'}`}>
            <div className="w-[88%] sm:w-[30rem] py-4 px-8 bg-slate-200 rounded-xl shadow-lg shadow-slate-500">
                <div className="flex justify-between items-center border-b border-slate-400 pb-2">
                    <p className="text-lg font-semibold font-inika text-gray-900 tracking-wide">Delete Test</p>
                    <i onClick={toggleDeleteMenu} className="fa-solid fa-xmark fa-xl hover:cursor-pointer hover:opacity-70 duration-200"></i>
                </div>
                <div className="mt-3 text-[1.2rem] border-b border-slate-400 pb-2">
                    Do you want to delete this question? <br />
                    <p>({isHoveredId.question})</p>
                </div>
                <div className="mt-5 flex justify-end items-center">
                    <button onClick={toggleDeleteMenu} className={`${styles.btn} mr-3 bg-yellow-400 shadow-yellow-700`}>Close</button>
                    <button
                        onClick={deleteTest}
                        className={`${styles.btn} bg-red-500 shadow-red-700`}
                        disabled={isLoading}
                    >
                        {isLoading ? <div className="py-[.34rem]"><LoadingBtn /></div> : "Yes"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;