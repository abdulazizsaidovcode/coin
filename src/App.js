import { Route, Routes } from "react-router-dom"
import "./index.css"
import FalsePage from "./components/falsepage"



function App() {
  return (
    <>
        <h1>Hello</h1>
        <Routes>
          <Route path="/404page"  element={<FalsePage/>}/>
        </Routes>
    </>
  )
}

export default App