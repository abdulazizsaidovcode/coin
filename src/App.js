import { Route, Routes } from "react-router-dom"
import "./index.css"
import FalsePage from "./components/falsepage"

function App() {
  return (
    <>
        <div>hello world</div>
        <Routes>
          <Route path="/404page"  element={<FalsePage/>}/>
        </Routes>
    </>
  )
}

export default App