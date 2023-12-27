import { Route, Routes } from "react-router-dom"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"
import "./index.css"
import GiftCard from "./components/card"
import Exchange from "./components/exchange"
import Message from "./components/message"
import TotalCoinForStudent from "./components/totalconforstudent"



function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/404page" element={<FalsePage />} />
        <Route path="/SignIn" element={<SignIn />} />
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
        <Route path="/totalcoinforstudent" element={<TotalCoinForStudent />} />
      </Routes>
      <Admin/>
      <Teacher/>
      <Student/>
    </div>
  )
}

export default App