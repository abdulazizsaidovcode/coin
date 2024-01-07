import Studetsrate from "../../components/studentdashboard/Studentsrate";
import StudentTestCard from "./studenttestcard";
import React, {useEffect, useState} from "react";
import {getTestCategory, getTestCategoryId} from "../../components/api/api";
import StudentTestCardIn from "./studenttestcard/Studenttestcardin";

function StudentTest() {

    const [testByCategory, setTestByCategory] = useState(null);
    const [testCategory, setTestCategory] = useState(null);


    useEffect(() => {
        getTestCategory(setTestCategory);
    }, []);

    useEffect(() => {
        console.log(testCategory[0])
        if (testCategory) getTestCategoryId(testCategory[0].id, setTestByCategory);
    }, [testCategory]);

    return (
        <div className="bg-gray-100 pb-10 p-8">
            <div className="flex justify-between items-middle py-6">
                <h1 className="text-4xl">test</h1>
                <input type="search" id="search"
                       className="block w-64 p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search"/>
            </div>
            <Studetsrate/>
            <div className="mt-10">
                {testCategory && testCategory.map((item, i) => <StudentTestCard key={i} category={item}/>)}
            </div>
            <div className='mt-5'>
                {testByCategory && testByCategory.map((item, i) => <StudentTestCardIn key={i} test={item} i={i}/>)}
            </div>
        </div>
    );
}

export default StudentTest;