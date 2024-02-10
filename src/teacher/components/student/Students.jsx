import axios from "axios";
import { config, setConfig, url } from "../../../components/api/api";
import { useState } from "react";
import { useEffect } from "react";
import TopLoading from "../dashboard/components/loading";

const Students = () => {

    const getStudentInfo = sessionStorage.getItem("studentInfoId")
    const [group, setGroup] = useState([]);
    const [student, setStudent] = useState([]);
    const [studentId, setStudentId] = useState(null);

    useEffect(() => {
        setConfig();
        getGroup();
        getStudent();
    }, []);

    const getGroup = () => {
        axios.get(url + "group/teacher", config)
            .then(res => setGroup(res.data.body))
            .catch(() => console.log("kelmadi"))
    }

    const getStudent = (item) => {
        if (item === undefined) {
            item = getStudentInfo
            axios.get(`${url}group/students/${item}`, config)
                .then(res => {
                    if (res.status === 200) setStudent(res.data.body)
                })
                .catch((err) => {
                    setStudent(null)
                    console.log("Student kelmadi! catchga tushdi!")
                })
        } else if (item >= 0) {
            axios.get(`${url}group/students/${item}`, config)
                .then(res => {
                    if (res.status === 200) setStudent(res.data.body)
                })
                .catch((err) => {
                    setStudent(null)
                    console.log("Student kelmadi! catchga tushdi!")
                })
        }
    }

    const showHideInputs = () => {
        let selectValue = document.getElementById("searchSelect").value,
            studentSearch = document.getElementById("studentSearch");

        if (!selectValue) studentSearch.style.display = "none"
        else studentSearch.style.display = "inline"
    }

    const searchHandler = (e) => {
        let selectValue = document.getElementById("searchSelect").value;
        let data = e.target.value;
        !data ? getStudent() :
            axios.get(`${url}user/filter/teacher?${selectValue}=${data}&groupId=${studentId === null ? getStudentInfo : studentId}`, config)
                .then(res => setStudent(res.data.body))
                .catch(() => console.log("student search bulganda kelmadi!"))
    }

    return (
        <div className="p-8 w-full bg-studentTableBg min-h-screen">
            <div className=" mb-4 flex justify-between items-center">
                <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4">Students</h2>
                <div class="relative">
                    <select
                        id="searchSelect"
                        onChange={showHideInputs}
                        className="w-80 py-3 ps-3 text-sm border border-gray-300 rounded-lg
                        bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300">
                        <option selected disabled>Search Select</option>
                        <option value="fistName">Search firstName</option>
                        <option value="lastName">Search lastName</option>
                        <option value="phoneNumber">Search phoneNumber</option>
                    </select>
                    <input
                        onChange={searchHandler}
                        type="search"
                        id="studentSearch"
                        style={{ display: "none" }}
                        className="w-80 py-3 px-3 ms-3 text-sm border border-gray-300 rounded-lg
                        bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                        placeholder="🔍  Search" />
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <div className='flex mb-2 flex-wrap'>
                        {group.map((item) =>
                            <button
                                onClick={async () => {
                                    await getStudent(item.id);
                                    await setStudentId(item.id);
                                }}
                                key={item.id}
                                className="px-10 py-2.5 mr-5 my-2 rounded-3xl shadow-lg font-inika font-semibold tracking-wide text-xl
                              bg-purple-500 text-white hover:bg-purple-700 active:scale-90 focus:outline-none focus:bg-purple-700 duration-300">
                                {item.name}
                            </button>
                        )}
                    </div>
                </div>
                <div className="w-full mt-8 shadow-md rounded-3xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-800 text-white rounded-t-2xl uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6">#</th>
                                <th className="py-3 px-6">Full Name</th>
                                <th className="py-3 px-6">Group</th>
                                <th className="py-3 px-6">Phone Number</th>
                                <th className="py-3 px-6">Coin</th>
                                <th className="py-3 px-6">Task</th>
                                <th className="py-3 px-6">Exschange</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 font-light">
                            {student ?
                                student.map((item, i) =>
                                    <tr key={item.id} className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                                        <td className="py-3 px-6">{i + 1}</td>
                                        <td className="py-3 px-6">{item.fullName}</td>
                                        <td className="py-3 px-6">{item.groupName}</td>
                                        <td className="py-3 px-6">{item.phoneNumber}</td>
                                        <td className="py-3 px-6">{item.coin}</td>
                                        <td className="py-3 px-6">{item.task}</td>
                                        <td className="py-3 px-6">{item.numberOfExchange}</td>
                                    </tr>
                                ) :
                                <tr className="border-b border-gray-200 text-center even:bg-slate-200 hover:bg-slate-300 duration-200">
                                    <td colSpan='7' className="font-inika font-medium text-xl tracking-wider leading-10 text-center">
                                        <span className='inline-block min-h-[2em] w-full py-3 flex-auto cursor-wait animate-[pulse_1s_ease-in-out_infinite] bg-[rgba(133,214,251,0.3)]'>
                                            Student not found 😊
                                        </span>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Students;
