import { Route, Routes } from "react-router-dom"
import "./index.css"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"
import CategoryTable from "./components/category"
import Dashboard from "./components/overview/cahrity"
import SidebarTemplate from "./components/sidebar/SidebarTemplate";



function App() {
  return (
    <>
        <SidebarTemplate/>
        <Routes>
          <Route path="/404page"  element={<FalsePage/>}/>
          <Route path="/SignIn"  element={<SignIn/>}/>
          <Route path="/CategoryTable"  element={<CategoryTable/>}/>
          <Route path="/Dashboard"  element={<Dashboard/>}/>
        </Routes>
    </>
  )
}

export default App