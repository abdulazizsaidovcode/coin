import {Link, Route, Routes} from "react-router-dom"
import SignIn from "./components/signin"
import "./index.css"
import Admin from "./admin/index"
import Teacher from "./teacher/index"
import Student from "./student/index"
import {byId} from "./components/api/api";
import {useEffect} from "react";
import axios from "axios";

function App() {

    function SidebarControl() {
        if (sessionStorage.getItem('role') === 'ROLE_SUPER_ADMIN') return <Admin/>
        if (sessionStorage.getItem('role') === 'ROLE_TEACHER') return <Teacher/>
        if (sessionStorage.getItem('role') === 'ROLE_USER') return <Student/>
    }

    const config = {
        headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5tb2RtZS51ei92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNzA0NTIyOTEzLCJleHAiOjE3MDQ1NjYxMTMsIm5iZiI6MTcwNDUyMjkxMywianRpIjoiMmZBbWZicWNaWW93OE1BWCIsInN1YiI6IjY0OTcwOCIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.LlkMwcTaYRkdb4uAWngne_jDyF0pQJ4kHWfHpNihJsU',
        }
    }

    useEffect(() => {
        axios.get('https://api.modme.uz/v1/leadSection?branch_id=3866&sections_id[]=113068&sections_id[]=129868&sections_id[]=113067&sections_id[]=113066&sections_id[]=113065&sections_id[]=113064&sections_id[]=127219&sections_id[]=123096&sections_id[]=113077&sections_id[]=113076', config)
            .then(res => {
                console.log(res);
            })
        fetch('https://api.modme.uz/v1/leadSection?branch_id=3866&sections_id[]=113068&sections_id[]=129868&sections_id[]=113067&sections_id[]=113066&sections_id[]=113065&sections_id[]=113064&sections_id[]=127219&sections_id[]=123096&sections_id[]=113077&sections_id[]=113076', {

        })
    }, []);

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