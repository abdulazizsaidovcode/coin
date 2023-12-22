import { Route, Routes } from "react-router-dom"
import "./index.css"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"
import CategoryTable from "./components/category"
import Dashboard from "./components/overview/cahrity"
import GiftExchangeComponent from "./components/card"
import UserProfile from "./components/usercard"



function App() {
  return (
    <>
        <SidebarTemplate/>
        <Routes>
          <Route path="/404page"  element={<FalsePage/>}/>
          <Route path="/SignIn"  element={<SignIn/>}/>
          <Route path="/CategoryTable"  element={<CategoryTable/>}/>
          <Route path="/Dashboard"  element={<Dashboard/>}/>
          <Route path="/GiftExchangeComponent"  element={<GiftExchangeComponent/>}/>
          <Route path="/usercard"  element={<UserProfile/>}/>
        </Routes>
    </>
  )
}

export default App