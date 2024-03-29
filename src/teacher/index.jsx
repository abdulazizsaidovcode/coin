import React, { useEffect } from "react";
import Sidebar from "./sidebar/SidebarTemplate";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbarcha from "../components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Category from "./components/category/Category";
import Gift from "./components/gift/Gifts";
import Exchange from "./components/exchange/Exchange";
import Message from "./components/message/Message";
import FalsePage from "./components/false-page/FalsePage";
import Groups from "./components/group/Group";
import Students from "./components/student/Students";
import Test from "./components/test/Test";

function Teacher() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="w-full">
                <Navbarcha />
                <Routes >
                    <Route path="/teacher/dashboard" element={<Dashboard />} />
                    <Route path="/teacher/category" element={<Category />} />
                    <Route path="/teacher/group" element={<Groups />} />
                    <Route path="/teacher/student" element={<Students />} />
                    <Route path="/teacher/test" element={<Test />} />
                    <Route path="/teacher/gift" element={<Gift />} />
                    <Route path="/teacher/exchange" element={<Exchange />} />
                    <Route path="/teacher/message" element={<Message />} />
                    <Route path="*" element={<FalsePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default Teacher;