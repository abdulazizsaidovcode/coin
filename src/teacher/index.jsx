import React from "react";
import Sidebar from "../components/sidebar/SidebarTemplate";
import { Route, Routes } from "react-router-dom";
import Navbarcha from "../components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Category from "./components/category/Category";
import Gift from "./components/gift/Gifts";
import Exchange from "./components/exchange/Exchange";
import Message from "./components/message/Message";
import TotalCoinForStudent from "./components/total-coin-for-student/TotalCoinForStudent";
import FalsePage from "./components/false-page/FalsePage";
import Groups from "./components/group/Group";
import Students from "./components/student/Students";
// import TotalCoins from "./components/total-coins/TotalCoins";
// import TopGroup from "./components/top-group/TopGroup";
// import TopTeachers from "./components/top-teachers/TopTeachers";
// import UserProfile from "./components/user-profile/UserProfile";
// import CategoryTable from "./components/category-table/CategoryTable";
// import Offcanvas from "./components/offcanvas/Offcanvas";
// import GiftCard from "./components/gift-card/GiftCard";

function Teacher() {
    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="w-full">
                <Navbarcha />
                <Routes >
                    {/* <Route path="/teacher/CategoryTable" element={<CategoryTable />} /> */}
                    {/* <Route path="/teacher/giftCard" element={<GiftCard />} /> */}
                    {/* <Route path="/teacher/offcanvas" element={<Offcanvas />} /> */}
                    {/* <Route path="/teacher/usercard" element={<UserProfile />} /> */}
                    {/* <Route path="/teacher/totalcoins" element={<TotalCoins />} /> */}
                    {/* <Route path="/teacher/topgroup" element={<TopGroup />} /> */}
                    {/* <Route path="/teacher/topteachers" element={<TopTeachers />} /> */}
                    <Route path="/teacher/dashboard" element={<Dashboard />} />
                    <Route path="/teacher/category" element={<Category />} />
                    <Route path="/teacher/group" element={<Groups />} />
                    <Route path="/teacher/student" element={<Students />} />
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