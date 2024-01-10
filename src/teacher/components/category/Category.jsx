import React, { useState } from 'react';
import CategoryTable from "../category-table/CategoryTable";
import "../../../globalcss/style.css";
import AddModalCanvas from "../offcanvas/Offcanvas";

function Category() {



    return (
        <div className="bg-gray-100 min-h-full p-8 w-full">
            <div className="mt-10">
                <h2 className="text-3xl font-bold font-inika text-gray-900 mb-6">Category</h2>
            </div>
            <CategoryTable />
            <AddModalCanvas />
        </div>
    );
}

export default Category;