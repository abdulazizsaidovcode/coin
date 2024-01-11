import React, { useEffect, useState } from 'react';
import CategoryTable from "../category-table/CategoryTable";
import "../../../globalcss/style.css";
import AddModalCanvas from "../offcanvas/Offcanvas";
import { config, url } from '../../../components/api/api';
import axios from 'axios';

function Category() {
    const [categories, setCategories] = useState([]);
    const [categorysub, setCategoriesub] = useState([]);


    useEffect(() => {
      getCategory1()
      getCategoryChild()
    }, [])
  
  
    const getCategory1 = () => {
      axios.get(url + "category/teacher/category/list", config)
        .then(res => {
          setCategories(res.data.body)
        })
          .catch(() => console.log("kelmadi"))
  }


  const getCategoryChild = () => {
    axios.get(url + "category/sub", config)
        .then(res => setCategoriesub(res.data.body))
        .catch(() => console.log("kelmadi"))
}
  
  


    return (
        <div className="bg-gray-100 min-h-full p-8 w-full">
            <div className="mt-10">
                <h2 className="text-3xl font-bold font-inika text-gray-900 mb-6">Category</h2>
            </div>
            {categories && <CategoryTable categories={categories}  setCategories={setCategories} getCategory1={getCategory1} getCategoryChild={getCategoryChild} categorysub={categorysub}/>}
            {categories && <AddModalCanvas getCategory={getCategory1} categories={categories} getCategorySub={getCategoryChild}/>}
        </div>
    );
}

export default Category;