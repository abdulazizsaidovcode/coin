import {Link, Route, Routes} from "react-router-dom"
import SignIn from "./components/signin"
import "./index.css"
import Admin from "./admin/index"
import Teacher from "./teacher/index"
import Student from "./student/index"
import {byId} from "./components/api/api";
import {useEffect} from "react";


function App() {

    function SidebarControl() {
        if (sessionStorage.getItem('role') === 'ROLE_SUPER_ADMIN') return <Admin/>
        if (sessionStorage.getItem('role') === 'ROLE_TEACHER') return <Teacher/>
        return <Student/>
    }

    return (
        <div className="flex">
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                {/*yullarga utishga ruxsat berishni nazorat qilish*/}
                <Route path='/admin/*' element={<Scan role='ROLE_SUPER_ADMIN'/>}/>
                <Route path='/teacher/*' element={<Scan role='ROLE_TEACHER'/>}/>
                <Route path='/student/*' element={<Scan role='ROLE_USER'/>}/>
            </Routes>
            <SidebarControl/>
        </div>
    )
}

function Scan({role}) {
    useEffect(() => {
        if (sessionStorage.getItem('role') !== role) byId('default').click();
    }, []);

    return <Link to='/' id='default'/>
}

export default App;