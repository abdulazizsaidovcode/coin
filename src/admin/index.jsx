import React from "react";
import SidebarTemplate from "../components/sidebar/SidebarTemplate";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category";
import Gift from "../components/gift";
import TotalCoinForStudent from "../components/totalconforstudent";
import Message from "../components/message";
import Navbarcha from "../components/navbar/Navbar";
import AdminGroup from "./adminGroup";
import AdminStudent from "../components/student";
import GrStudents from "./adminGroup/student/Students";
import Dashboard from "../components/dashboard/Dashboard";
import Exchange from "../components/exchange/Exchange";
import FalsePage from "../teacher/components/false-page/FalsePage";

function Admin() {
  const getme = sessionStorage.getItem("getMeInfo")
  
  return (
    <div className="flex w-full">
      <SidebarTemplate isAdmin={true} />
      <div className="w-full">
        <Navbarcha />
        <Routes >
          <Route path="/admin/group" element={<AdminGroup />} />
          <Route path="/admin/student" element={<AdminStudent />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/gift" element={<Gift />} />
          <Route path="/admin/exchange" element={<Exchange />} />
          <Route path="/admin/message" element={<Message />} />
          <Route path="/admin/student-info" element={<GrStudents />} />
          <Route path="/admin/totalcoinforstudent" element={<TotalCoinForStudent />} />
          <Route path="*" element={<FalsePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
