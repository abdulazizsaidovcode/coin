import {Link, Route, Routes} from "react-router-dom"
import SignIn from "./components/signin"
import "./index.css"
import Admin from "./admin/index"
import Teacher from "./teacher/index"
import Student from "./student/index"
import {byId} from "./components/api/api";


function App() {
    return (
        <div className="flex">
            <Routes>
                <Route path="/" element={<SignIn/>}/>

                {/*yullarga utishga ruxsat berishni nazorat qilish*/}
                <Route path='/admin/*' element={<Scan role='ROLE_SUPER_ADMIN'/>}/>
                <Route path='/teacher/*' element={<Scan role='ROLE_TEACHER'/>}/>
                <Route path='/user/*' element={<Scan role='ROLE_USER'/>}/>
            </Routes>
            <Admin/>
            <Teacher/>
            <Student/>
        </div>
    )
}

function Scan({role}) {
    if (sessionStorage.getItem('role') !== role) byId('default').click();
    return <><Link to='/' id='default'/></>
}

export default App