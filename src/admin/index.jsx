import React from "react";
import SidebarTemplate from "../components/sidebar/SidebarTemplate";
import { Route, Routes } from "react-router-dom";
import CategoryTable from "../components/categorytable";
import Dashboard from "../components/Dashboard";
import GiftCard from "../components/card";
import TotalCoins from "../components/Total coins";
import TopGroup from "../components/TopGroups";
import TopTeachers from "../components/Topteachers";
import Category from "../components/category";
import Offcanvas from "../components/ofcanvas";
import Gift from "../components/gift";
import Exchange from "../components/exchange";
import TotalCoinForStudent from "../components/totalconforstudent";
import Message from "../components/message";
import FalsePage from "../components/falsepage";
import Navbarcha from "../components/navbar/Navbar";

function Admin() {
  const getme = sessionStorage.getItem("getMeInfo")
  console.log("get mega " + getme);
  return (
    <div className="flex w-full">
      <SidebarTemplate isAdmin={true} />
      <div className="w-full">
        <Navbarcha />
        <Routes >
          <Route path="/admin/CategoryTable" element={<CategoryTable />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/giftCard" element={<GiftCard />} />
          <Route path="/admin/totalcoins" element={<TotalCoins />} />
          <Route path="/admin/topgroup" element={<TopGroup />} />
          <Route path="/admin/topteachers" element={<TopTeachers />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/offcanvas" element={<Offcanvas />} />
          <Route path="/admin/gift" element={<Gift />} />
          <Route path="/admin/exchange" element={<Exchange />} />
          <Route path="/admin/message" element={<Message />} />
          <Route path="/admin/totalcoinforstudent" element={<TotalCoinForStudent />} />
          <Route path="*" element={<FalsePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
