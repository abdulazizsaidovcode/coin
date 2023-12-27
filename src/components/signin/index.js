import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import axios from "axios";
import {byId, url} from "../api/api";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function logIn() {
        let addData = {
            phoneNumber: byId("phoneNumber").value,
            password: byId("password").value,
        }

        await axios.post("http://192.168.168.139/auth/login", addData)
            .then( async res => {
                await sessionStorage.setItem('jwtToken', "Bearer " + res.data.body);
                // console.log(res.data.body);
                // console.log(res.data.message);

                if (res.data.message === "ROLE_SUPER_ADMIN"){
                    setRole('/admin/dashboard');
                    document.getElementById('links').click()
                }
                else if (res.data.message === "ROLE_USER"){
                    setRole('/student/dashboard');
                    document.getElementById('links').click()
                }
                else if (res.data.message === "ROLE_TEACHER"){
                    setRole('/teacher/dashboard');
                    document.getElementById('links').click()
                }

                // await
            })
            .catch(() => {
                toast.error("Raqam yoki parol xato!")
            })
    }

    // function checkKeyPress(event) {
    //     if (event.key === "Enter") {
    //         event.preventDefault(); // Enter tuşunun varsayılan davranışını engeller
    //
    //         var submitButton = document.getElementById("button");
    //         submitButton.click(); // "Submit" düğmesini tıklar
    //     }
    // }

    // role user => student/dashboard
    // role teacher => teacher/dashboard
    // role admin => admin/dashboard

    return (
        <>
            <Link to={role} id="links"></Link>
            <div className="flex items-center justify-center h-screen signin w-full z-10">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96 font-inika">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Edu Coin System</h2>
                    {/*<form className="mt-4">*/}
                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Phone Number</label>
                            <input
                                id="phoneNumber"
                                type="number"
                                className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500"
                                placeholder="Phone number"/>
                        </div>
                        <div className="mt-4">
                            <label className="block mb-1 font-bold text-gray-500">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500"
                                    placeholder="Enter password"/>
                                <button type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col mt-1">
                            <a
                                href="#"
                                className="text-sm text-end text-purple-600 hover:underline w-full block">
                                Forgot password?
                            </a>
                            <button
                                onClick={logIn}
                                id="loginBtn"
                                className="w-full py-2 px-4 mt-7 bg-purple-500 hover:bg-purple-600 rounded text-white font-bold">
                                Sign In
                            </button>
                        </div>
                    {/*</form>*/}
                </div>
            </div>
        </>
    );
};

export default SignIn;
