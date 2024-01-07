import {Link, Route, Routes} from "react-router-dom"
import SignIn from "./components/signin"
import "./index.css"
import Admin from "./admin/index"
import Teacher from "./teacher/index"
import Student from "./student/index"
import {byId} from "./components/api/api";
import {useEffect, useState} from "react";
import FalsePage from "./components/falsepage"

function App() {
    const [path, setPath] = useState(false);

    return (
        <div className="flex">
            <Routes>
                <Route path="/" element={<SignIn setpath={setPath}/>}/>
                {/*yullarga utishga ruxsat berishni nazorat qilish*/}
                <Route path='/admin/*' element={<Scan role='ROLE_SUPER_ADMIN' setPath={setPath}/>}/>
                <Route path='/teacher/*' element={<Scan role='ROLE_TEACHER' setPath={setPath}/>}/>
                <Route path='/student/*' element={<Scan role='ROLE_USER' setPath={setPath}/>}/>
                <Route path='*' element={<FalsePage/>}/>
            </Routes>
            {path && <SidebarControl role={sessionStorage.getItem('role')}/>}
        </div>
    )
}

function Scan({role, setPath}) {
    setPath(true);
    useEffect(() => {
        if (sessionStorage.getItem('role') !== role) byId('default').click();
    }, []);

    return <Link to='/' id='default'/>
}

function SidebarControl({role}) {
    switch (role) {
        case 'ROLE_SUPER_ADMIN':
            return <Admin/>
        case 'ROLE_TEACHER':
            return <Teacher/>
        case 'ROLE_USER':
            return <Student/>
        default:
            return <>Hello</>
    }
}

export default App;