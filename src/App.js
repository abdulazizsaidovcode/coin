import { Route, Routes } from "react-router-dom"
import SignIn from "./components/signin"
import "./index.css"
import Admin from "./admin/index"
import Teacher from "./teacher/index"
import Student from "./student/index"



function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
      <Admin/>
      <Teacher/>
      <Student/>
    </div>
  )
}

export default App