import React from "react";
import Sidebar from "../components/sidebar/SidebarTemplate";
import { Route, Routes } from "react-router-dom";
import Navbarcha from "../components/navbar/Navbar";
import CategoryTable from "./components/category-table/CategoryTable";
import Dashboard from "./components/dashboard/Dashboard";
import GiftCard from "./components/gift-card/GiftCard";
import UserProfile from "./components/user-profile/UserProfile";
import TotalCoins from "./components/total-coins/TotalCoins";
import TopGroup from "./components/top-group/TopGroup";
import TopTeachers from "./components/top-teachers/TopTeachers";
import Category from "./components/category/Category";
import Offcanvas from "./components/offcanvas/Offcanvas";
import Gift from "./components/gift/Gifts";
import Exchange from "./components/exchange/Exchange";
import Message from "./components/message/Message";
import TotalCoinForStudent from "./components/total-coin-for-student/TotalCoinForStudent";
import FalsePage from "./components/false-page/FalsePage";

function Teacher() {
    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="w-full">
                <Navbarcha />
                <Routes >
                    <Route path="/teacher/CategoryTable" element={<CategoryTable />} />
                    <Route path="/teacher/dashboard" element={<Dashboard />} />
                    <Route path="/teacher/giftCard" element={<GiftCard />} />
                    <Route path="/teacher/usercard" element={<UserProfile />} />
                    <Route path="/teacher/totalcoins" element={<TotalCoins />} />
                    <Route path="/teacher/topgroup" element={<TopGroup />} />
                    <Route path="/teacher/topteachers" element={<TopTeachers />} />
                    <Route path="/teacher/category" element={<Category />} />
                    <Route path="/teacher/offcanvas" element={<Offcanvas />} />
                    <Route path="/teacher/gift" element={<Gift />} />
                    <Route path="/teacher/exchange" element={<Exchange />} />
                    <Route path="/teacher/message" element={<Message />} />
                    <Route path="/teacher/totalcoinforstudent" element={<TotalCoinForStudent />} />
                    <Route path="*" element={<FalsePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default Teacher;