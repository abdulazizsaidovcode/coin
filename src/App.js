import { Route, Routes } from "react-router-dom"
import "./index.css"
import FalsePage from "./components/falsepage"
import SignIn from "./components/signin"



function App() {
  return (
    <>
        <h1>Hello</h1>
        <Routes>
          <Route path="/404page"  element={<FalsePage/>}/>
          <Route path="/SignIn"  element={<SignIn/>}/>
        </Routes>
    </>
  )
}

export default App