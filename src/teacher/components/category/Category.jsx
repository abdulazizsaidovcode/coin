import React, { useEffect, useState } from 'react';
import CategoryTable from "../category-table/CategoryTable";
import "../../../globalcss/style.css";
import AddModalCanvas from "../offcanvas/Offcanvas";
import { config, setConfig, url } from '../../../components/api/api';
import axios from 'axios';
import TopLoading from '../dashboard/components/loading';

function Category() {
  const [categories, setCategories] = useState(null);
  const [categorysub, setCategoriesub] = useState(null);

  document.title = "IT City Academy | Category";

  useEffect(() => {
    setConfig();
    getCategory1()
    getCategoryChild()
  }, [])

  const getCategory1 = () => {
    axios.get(url + "category/father", config)
      .then(res => setCategories(res.data.body))
      .catch((err) => console.log("Teacher panel category kelmadi: ", err))
  }

  const getCategoryChild = () => {
    axios.get(url + "category/sub", config)
      .then(res => res.data.body.length === 0 ? setCategoriesub(null) : setCategoriesub(res.data.body))
      .catch(() => console.log("kelmadi"))
  }

  // filterCategory
  const filterCategory = (item) => {
    axios.get(`${url}category/sub`, config)
      .then(res => {
        res.data.body.filter(c => c.categoryId == item).length === 0
          ? setCategoriesub(null)
          : setCategoriesub(res.data.body.filter(c => c.categoryId == item))
      })
      .catch((err) => {
        if (err.response.status === 409) setCategoriesub(null)
        console.log("Teacher panel cub category kelmadi! catchga tushdi!")
      })
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 w-full">
      <div className="mt-10">
        <h2 className="text-3xl font-bold font-inika text-gray-900 mb-6">Category</h2>
      </div>
      {categories ? (
        <CategoryTable
          filterCategory={filterCategory}
          categories={categories}
          setCategories={setCategories}
          getCategory1={getCategory1}
          getCategoryChild={getCategoryChild}
          categorysub={categorysub}
        />
      ) : (
        <TopLoading name='Teacher categores' />
      )}

      {categories &&
        <AddModalCanvas
          getCategory={getCategory1}
          categories={categories}
          getCategorySub={getCategoryChild}
        />
      }
    </div>
  );
}

export default Category;