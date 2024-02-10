import { useEffect, useState } from "react";
import AddModal from "./modals/AddModal";
import TeacherTestCard from "./table-and-card/TeacherTestCard";
import TeacherTestTable from "./table-and-card/TeacherTestTable";
import axios from "axios";
import { config, setConfig, url } from "../../../components/api/api";

const Test = () => {
    const [allTestCard, setAllTestCard] = useState(null);
    const [allTestTable, setAllTestTable] = useState(null);
    const [testCategorySub, setTestCategorySub] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [tableHeddin, setTableHeddin] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        setConfig();
        getAllTestCard();
        getTestTable();
        getTestCategory();
    }, [])

    // getAllTestCard
    const getAllTestCard = () => {
        axios.get(`${url}test/ofTeacher`, config)
            .then((res) => setAllTestCard(res.data.body))
            .catch((error) => console.log("Error getting test and category: ", error))
    }

    // get test table
    const getTestTable = (item) => {
        axios.get(`${url}test/ofTeacherByCategoryId?categoryId=${item}`, config)
            .then((res) => setAllTestTable(res.data.body))
            .catch((error) => console.log("Error getting test and category: ", error))
    }

    // getCategory
    const getTestCategory = () => {
        axios.get(`${url}category/sub`, config)
            .then((res) => setTestCategorySub(res.data.body))
            .catch((err) => console.log('Error getting test category: ', err))
    }

    return (
        <div className="bg-gray-100 pb-10 p-8 w-full min-h-screen">
            <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4 ml-2">Test</h2>
            <div className="mb-4 flex justify-between items-center">
                <button className="btm ml-2" onClick={toggleMenu}>Add Test</button>
                <input
                    type="search"
                    className="w-80 py-3 px-3 text-sm border border-gray-300 rounded-lg
                    bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                    placeholder="🔍  Search" />
            </div>
            <div className="mt-10">
                <TeacherTestCard
                    allTestCard={allTestCard}
                    getTestTable={getTestTable}
                    setTableHeddin={setTableHeddin}
                />
            </div>
            <div className='mt-5'>
                <TeacherTestTable
                    allTestTable={allTestTable}
                    testCategorySub={testCategorySub}
                    tableHeddin={tableHeddin}
                    getTestTable={getTestTable}
                />
            </div>

            {/* test modals */}
            <AddModal
                isMenuOpen={isMenuOpen}
                testCategorySub={testCategorySub}
                getTestTable={getTestTable}
                toggleMenu={toggleMenu}
            />
        </div>
    )
}

export default Test;