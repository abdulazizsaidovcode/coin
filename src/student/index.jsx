import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryTable from "../components/categorytable";
import GiftCard from "../components/card";
import UserProfile from "./usercard";
import TotalCoins from "../components/Total coins";
import TopGroup from "../components/TopGroups";
import TopTeachers from "../components/Topteachers";
import Category from "../components/category";
import Offcanvas from "../components/ofcanvas";
import Gift from "../components/gift";
import Exchange from "../components/exchange";
import TotalCoinForStudent from "../components/totalconforstudent";
import Message from "../components/message";
import StudentSidebar from "./sidebar/Studentsitebar";
import StudentDashboard from "../components/studentdashboard";
import StudentNavbar from "./studentnavbar";
import StudentGroup from "./studentcategory";
import Studentmessage from "./Studentmessage";
import StudentTest from "./studenttest";

function Student() {
  return (
    <div className="flex w-full">
      <StudentSidebar />
      <div className="w-full">
        <StudentNavbar />
        <Routes>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/group" element={<StudentGroup />} />
          <Route path="/student/giftCard" element={<GiftCard />} />
          <Route path="/student/usercard" element={<UserProfile />} />
          <Route path="/student/totalcoins" element={<TotalCoins />} />
          <Route path="/student/topgroup" element={<TopGroup />} />
          <Route path="/student/topteachers" element={<TopTeachers />} />
          <Route path="/student/test" element={<StudentTest />} />
          <Route path="/student/offcanvas" element={<Offcanvas />} />
          <Route path="/student/gift" element={<Gift />} />
          <Route path="/student/exchange" element={<Exchange />} />
          <Route path="/student/message" element={<Studentmessage />} />
          <Route path="/student/totalcoinforstudent" element={<TotalCoinForStudent />} />
        </Routes>
      </div>
    </div>
  );
}

export default Student;