import StudentTestCard from "./studenttestcard";
import React, {useEffect, useState} from "react";
import {getTestCategory, getTestCategoryId} from "../../components/api/api";
import StudentTestCardIn from "./studenttestcard/Studenttestcardin";
import Studetsrate from "../studentdashboard/Studentsrate";

function StudentTest() {

    const [testByCategory, setTestByCategory] = useState(null);
    const [testCategory, setTestCategory] = useState(null);
    const [categoryId, setCategoryId] = useState(null);


    useEffect(() => {
        getTestCategory(setTestCategory);
    }, []);

    useEffect(() => {
        if (testCategory) setCategoryId(testCategory[0].categoryId);
    }, [testCategory]);

    useEffect(() => {
        getTestCategoryId(categoryId, setTestByCategory);
    }, [categoryId]);

    return (
        <div className="bg-gray-100 pb-10 p-8">
            <div className="flex justify-between items-middle py-6">
                <h1 className="text-4xl font-bold font-inika text-gray-900 mb-4">Test</h1>
                <input type="search" id="search"
                       className="block md:w-64 w-40 p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search"/>
            </div>
            <Studetsrate/>
            <div className="mt-10 flex justify-around">
                {testCategory && testCategory.map((item, i) =>
                    <StudentTestCard key={i} category={item} setCategoryId={setCategoryId}/>)}
            </div>
            <div className='mt-5'>
                {testByCategory && testByCategory.map((item, i) => <StudentTestCardIn key={i} test={item} i={i}/>)}
            </div>
        </div>
    );
}

export default StudentTest;