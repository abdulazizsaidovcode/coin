import { useEffect, useState } from "react";
import AddModal from "./modals/AddModal";
import TeacherTestCard from "./table-and-card/TeacherTestCard";
import TeacherTestTable from "./table-and-card/TeacherTestTable";
import axios from "axios";
import { config, setConfig, url } from "../../../components/api/api";
import TopLoading from "../dashboard/components/loading";

const Test = () => {
    const [allTestCard, setAllTestCard] = useState(null);
    const [allTestTable, setAllTestTable] = useState(null);
    const [categoryFather, setCategoryFather] = useState(null);
    const [testCategorySub, setTestCategorySub] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [tableHeddin, setTableHeddin] = useState(false);
    document.title = "IT City Academy | Test";

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        setConfig();
        getAllTestCard();
        getTestTable();
        getCategoryFather();
        getTestCategoryChild();
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

    // get category father
    const getCategoryFather = () => {
        axios.get(`${url}category/father`, config)
            .then(res => setCategoryFather(res.data.body))
            .catch((error) => console.log("Error getting test father category: ", error))
    }

    // getCategoryChild
    const getTestCategoryChild = (categoryFatherId) => {
        axios.get(`${url}category/sub`, config)
            .then((res) => setTestCategorySub(res.data.body.filter(c => c.categoryId == categoryFatherId)))
            .catch((err) => console.log('Error getting test category: ', err))
    }

    return (
        <div className="bg-gray-100 pb-10 p-8 w-full min-h-screen">
            <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4 ml-2">Test</h2>
            <div className="mb-4 flex justify-between items-center flex-wrap gap-5">
                <button className="btm ml-0 lg:ml-2" onClick={toggleMenu}>Add Test</button>
                <input
                    type="search"
                    className="w-full md:w-80 py-3 px-3 text-sm border border-gray-300 rounded-lg
                    bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                    placeholder="🔍  Search" />
            </div>
            <div className="my-10">
                <TeacherTestCard
                    allTestCard={allTestCard}
                    getTestTable={getTestTable}
                    setTableHeddin={setTableHeddin}
                />
            </div>
            <div className='mt-5'>
                {allTestTable ? (
                    <TeacherTestTable
                        allTestTable={allTestTable}
                        testCategorySub={testCategorySub}
                        tableHeddin={tableHeddin}
                        categoryFather={categoryFather}
                        getTestTable={getTestTable}
                        getAllTestCard={getAllTestCard}
                        getTestCategoryChild={getTestCategoryChild}
                    />
                ) : (
                    <TopLoading name='Category related tests' />
                )}
            </div>

            {/* test modals */}
            <AddModal
                isMenuOpen={isMenuOpen}
                categoryFather={categoryFather}
                getTestCategoryChild={getTestCategoryChild}
                testCategorySub={testCategorySub}
                getTestTable={getTestTable}
                toggleMenu={toggleMenu}
                getAllTestCard={getAllTestCard}
            />
        </div>
    )
}

export default Test;