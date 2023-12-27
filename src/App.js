import { Route, Routes } from "react-router-dom"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"
import CategoryTable from "./components/categorytable"
import Dashboard from "./components/Dashboard"
import UserProfile from "./components/usercard"
import SidebarTemplate from "./components/sidebar/SidebarTemplate"
import TotalCoins from "./components/Total coins"
import TopGroup from "./components/TopGroups"
import TopTeachers from "./components/Topteachers"
import Category from "./components/category"
import GroupCategory from "./components/group"
import Students from "./components/student"
import Offcanvas from "./components/ofcanvas"
import Gift from "./components/gift"
import "./index.css"
import GiftCard from "./components/card"
import Exchange from "./components/exchange"
import Message from "./components/message"



function App() {
  return (
    <div className="flex">
      {/*<SidebarTemplate/>*/}
      <Routes>
        <Route path="/404page" element={<FalsePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/CategoryTable" element={<CategoryTable />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/giftCard" element={<GiftCard />} />
        <Route path="/usercard" element={<UserProfile />} />
        <Route path="/totalcoins" element={<TotalCoins />} />
        <Route path="/topgroup" element={<TopGroup />} />
        <Route path="/topteachers" element={<TopTeachers />} />
        <Route path="/category" element={<Category />} />
        <Route path="/categorygroup" element={<GroupCategory />} />
        <Route path="/students" element={<Students />} />
        <Route path="/offcanvas" element={<Offcanvas />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  )
}

export default App