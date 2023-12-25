import React from "react";
import CategoryTable from "../categorytable";
import "../../globalcss/style.css"

function Category() {
    return (
        <div className="bg-gray-100 min-h-screen p-8 ml-64 w-full">
            <div className=" mb-4 flex justify-between">
                <button className="btm">+ Add</button>
                <input
                    className="border border-blue-600 rounded  text-gray-700 mr-3 py-1 px-2  focus:outline-blue-700"
                    type="text"
                    placeholder="Search..."
                    aria-label="Search input" />
            </div>
            <div className=" mb-4">
                <h1 className="text-3xl font-semibold text-gray-800">Hi Admin(a)</h1>
                <span className="text-sm text-gray-600">Welcome back to Coin system dashboard</span>
            </div>
            <div className="mt-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Category</h2>
            </div>

            <CategoryTable />
        </div>
    );
}

export default Category;