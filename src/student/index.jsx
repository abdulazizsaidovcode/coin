import React from "react";
import { Route, Routes } from "react-router-dom";
import GiftCard from "../components/card";
import UserProfile from "./studentGift/Giftcard";
import TotalCoins from "../components/Total coins";
import TopGroup from "../components/TopGroups";
import TopTeachers from "../components/Topteachers";
import TotalCoinForStudent from "../components/totalconforstudent";
import StudentSidebar from "./sidebar/Studentsitebar";
import StudentDashboard from "./studentdashboard";
import StudentNavbar from "./studentnavbar";
import StudentGroup from "./studentcategory";
import Studentmessage from "./Studentmessage";
import StudentTest from "./studenttest";
import StudentExchange from "./studentExchange";
import TableWithFilters from "../components/student";
import StudentStartTest from "./studenttest/studentstarttest";
import StudentGift from "./studentGift";

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
          <Route path="/student/gift" element={<StudentGift />} />
          <Route path="/student/exchange" element={<StudentExchange />} />
          <Route path="/student/message" element={<Studentmessage />} />
          <Route path="/student/totalcoinforstudent" element={<TotalCoinForStudent />} />
          <Route path="/student/teststart" element={<StudentStartTest />} />
        </Routes>
      </div>
    </div>
  );
}

export default Student;