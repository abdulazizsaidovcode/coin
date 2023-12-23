import { Route, Routes } from "react-router-dom"
import "./index.css"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"
import CategoryTable from "./components/categorytable"
import Dashboard from "./components/Dashboard"
import GiftExchangeComponent from "./components/card"
import UserProfile from "./components/usercard"
import SidebarTemplate from "./components/sidebar/SidebarTemplate"
import TotalCoins from "./components/Total coins"
import TopGroup from "./components/TopGroups"
import TopTeachers from "./components/Topteachers"
import Category from "./components/category"



function App() {
  return (
    <div className="flex">
      <SidebarTemplate/>
      <Routes>
        <Route path="/404page" element={<FalsePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CategoryTable" element={<CategoryTable />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/GiftExchangeComponent" element={<GiftExchangeComponent />} />
        <Route path="/usercard" element={<UserProfile />} />
        <Route path="/totalcoins" element={<TotalCoins />} />
        <Route path="/topgroup" element={<TopGroup />} />
        <Route path="/topteachers" element={<TopTeachers />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default App