import { Route, Routes } from "react-router-dom"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"
import "./index.css"
import Teacher from "./teacher"
import Admin from "./admin"
import Student from "./student"



function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/404page" element={<FalsePage />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      <Admin/>
      <Teacher/>
      <Student/>
    </div>
  )
}

export default App