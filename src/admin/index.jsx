import React from "react";
import SidebarTemplate from "../components/sidebar/SidebarTemplate";
import { Route, Routes } from "react-router-dom";
import CategoryTable from "../components/categorytable";
import Dashboard from "../components/Dashboard";
import GiftCard from "../components/card";
import UserProfile from "../components/usercard";
import TotalCoins from "../components/Total coins";
import TopGroup from "../components/TopGroups";
import TopTeachers from "../components/Topteachers";
import Category from "../components/category";
import Offcanvas from "../components/ofcanvas";
import Gift from "../components/gift";
import Exchange from "../components/exchange";
import TotalCoinForStudent from "../components/totalconforstudent";
import Message from "../components/message";

function Admin() {
  return (
    <>
      <SidebarTemplate />

      <Routes>
        <Route path="/admin/CategoryTable" element={<CategoryTable />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/giftCard" element={<GiftCard />} />
        <Route path="/admin/usercard" element={<UserProfile />} />
        <Route path="/admin/totalcoins" element={<TotalCoins />} />
        <Route path="/admin/topgroup" element={<TopGroup />} />
        <Route path="/admin/topteachers" element={<TopTeachers />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/offcanvas" element={<Offcanvas />} />
        <Route path="/admin/gift" element={<Gift />} />
        <Route path="/admin/exchange" element={<Exchange />} />
        <Route path="/admin/message" element={<Message />} />
        <Route path="/admin/totalcoinforstudent" element={<TotalCoinForStudent />} />
      </Routes>
    </>
  );
}

export default Admin;
