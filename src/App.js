import { Route, Routes } from "react-router-dom"
import "./index.css"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"
import CategoryTable from "./components/category"
import Dashboard from "./components/overview/cahrity"



function App() {
  return (
    <>
        <h1>Hello</h1>
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