import React, { useEffect, useState } from 'react';
import CategoryTable from "../categorytable/index.jsx";
import "../../globalcss/style.css";
import { byId, config, getFile, setConfig, url } from '../api/api';
import axios from 'axios';
import AddModalCanvas from "../offcanvas/Offcanvas";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory1()
  }, [])


  const getCategory1 = () => {
    axios.get(url + "category/father/category", config)
        .then(res => setCategories(res.data.body))
        .catch(() => console.log("kelmadi"))
}



    return (
        <div className="bg-gray-100 min-h-full p-8 w-full">
            <div className="mt-10">
                <h2 className="text-3xl font-bold font-inika text-gray-900 mb-6">Category</h2>
            </div>
            {categories && <CategoryTable categories={categories} setCategories={setCategories} getCategory1={getCategory1}/>}
           <AddModalCanvas getCategory={getCategory1}/>
        </div>
    );
}

export default Category;