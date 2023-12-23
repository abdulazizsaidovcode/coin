import React from "react";
import CategoryTable from "../categorytable";
import "../../globalcss/style.css"

function Category() {
    return (
        <div className="bg-gray-100 min-h-screen p-8 ml-64 w-full">
            <div className=" mb-4 flex justify-between">
                <button className="btm">solom</button>
                <input type="file" class="file:border file:border-solid ..." />
            </div>
            <div className=" mb-4">
                <h1 className="text-3xl font-semibold text-gray-800">Hi Admin(a)</h1>
                <span className="text-sm text-gray-600">Welcome back to Coin system dashboard</span>
            </div>
            <CategoryTable/>
        </div>
    );
}

export default Category;