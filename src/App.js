import { Route, Routes } from "react-router-dom"
import "./index.css"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"
import CategoryTable from "./components/category"
import Dashboard from "./components/overview/cahrity"
import GiftExchangeComponent from "./components/card"
import UserProfile from "./components/usercard"
import SidebarTemplate from "./components/sidebar/SidebarTemplate"
import TotalCoins from "./components/Total coins"
import TopGroup from "./components/TopGroups"
import TopTeachers from "./components/Topteachers"



function App() {
  return (
    <>
      <h1>hello</h1>
      {/* <SidebarTemplate/> */}
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
      </Routes>
    </>
  )
}

export default App