import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import axios from "axios";
import { byId, config, url } from "../api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = ({ setpath }) => {
    setpath(false)
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let getJwtToken = sessionStorage.getItem("jwtToken");
        if (getJwtToken) byId("links").click();
        else console.log("xato");
    }, [role]);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    async function logIn() {
        setIsLoading(true);
        let addData = {
            phoneNumber: byId("phoneNumber").value,
            password: byId("password").value,
        };

        await axios
            .post(url + "auth/login", addData)
            .then(async (res) => {
                await sessionStorage.setItem("jwtToken", "Bearer " + res.data.body);
                await sessionStorage.setItem("role", res.data.message);
                if (res.data.message === "ROLE_SUPER_ADMIN")
                    setRole("/admin/dashboard");
                else if (res.data.message === "ROLE_TEACHER")
                    setRole("/teacher/dashboard");
                else if (res.data.message === "ROLE_USER")
                    setRole("/student/dashboard");
            })
            .catch(() => {
                toast.error("Raqam yoki parol xato!");
                setIsLoading(false);
            });
    }

    function checkKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            byId("loginBtn").click();
        }
    }

    function forgotPassword() {
        byId('defaultInput').style.display = "none";
        byId('loginBtn').style.display = "none";
        byId('forgotLink').style.display = "none";
        byId('forgotInput').style.display = "inline";
        byId('confirmBtn').style.display = "inline";
    }

    function sentCodePassword() {
        setIsLoading(true);
        sessionStorage.setItem('forgotEmail', byId('email').value)
        let addData = {
            email: byId('email').value,
            code: 0,
            password: '',
            prePassword: ''
        }
        axios.post(`${url}user/forgetPassword`, addData, config)
            .then(res => {
                res.data.success === false ? toast.error(res.data.message) : toast.success(res.data.message)
                byId('emailCon').style.display = "none";
                byId('confirmBtn').style.display = "none";
                byId('prePasswordCon').style.display = "inline";
                byId('passwordCon').style.display = "inline";
                byId('confirmBtnCode').style.display = "inline";
                byId('confirmCodeVis').style.display = "inline";
                setIsLoading(false);
            })
            .catch(err => {
                console.log('error: ', err);
                setIsLoading(false);
            })
    }

    function sentConfirmCode() {
        setIsLoading(true);
        let addData = {
            email: sessionStorage.getItem('forgotEmail'),
            code: byId('confirmCode').value,
            password: byId('passwordEdit').value,
            prePassword: byId('prePassword').value
        }
        axios.post(`${url}user/forgetPassword`, addData, config)
            .then(res => {
                res.data.success === true ? toast.success(res.data.message) : toast.error(res.data.message)
                byId('defaultInput').style.display = 'inline'
                byId('loginBtn').style.display = 'inline'
                byId('forgotInput').style.display = 'none'
                byId('confirmBtnCode').style.display = 'none'
                setIsLoading(false);
            })
            .catch(err => {
                console.log('error: ', err);
                setIsLoading(false);
            })
    }
    
    return (
        <>
            <Link to={role} id="links"></Link>
            <a href="/" id="refresh"></a>
            <div className="flex items-center justify-center h-screen signin w-full z-10">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96 font-inika">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">
                        Edu Coin System
                    </h2>
                    {/*<form className="mt-4">*/}
                    <div id="defaultInput">
                        <div className={`mt-5`}>
                            <label className="block mb-1 font-bold text-gray-500">
                                Phone Number
                            </label>
                            <input
                                id="phoneNumber"
                                type="number"
                                className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500 duration-500"
                                placeholder="Phone number"
                            />
                        </div>
                        <div className="mt-5">
                            <label
                                for="password"
                                className="block mb-1 font-bold text-gray-500 hover:text-gray-600 duration-500"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    onKeyDown={checkKeyPress}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500 duration-500"
                                    placeholder="Enter password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                    onClick={togglePasswordVisibility}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="forgotInput" style={{ display: 'none' }}>
                        <div id="emailCon" className={`mt-5`}>
                            <label className="block mb-1 font-bold text-gray-500">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500 duration-500"
                                placeholder="Email"
                            />
                        </div>
                        <div id="confirmCodeVis" style={{ display: 'none' }}>
                            <label className="block mb-1 mt-5 font-bold text-gray-500">
                                Confirm Code
                            </label>
                            <input
                                id="confirmCode"
                                type="number"
                                className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500 duration-500"
                                placeholder="Confirm Code"
                            />
                        </div>
                        <div id="passwordCon" style={{ display: 'none' }}>
                            <label className="block mb-1 mt-5 font-bold text-gray-500">
                                Password
                            </label>
                            <input
                                id="passwordEdit"
                                type="password"
                                className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500 duration-500"
                                placeholder="Password"
                            />
                        </div>
                        <div id="prePasswordCon" style={{ display: 'none' }}>
                            <label className="block mb-1 mt-5 font-bold text-gray-500">
                                Pre Password
                            </label>
                            <input
                                id="prePassword"
                                type="password"
                                className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500 duration-500"
                                placeholder="Pre Password"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-1">
                        <a
                            id="forgotLink"
                            onClick={forgotPassword}
                            className="text-sm text-end text-purple-600 hover:underline w-full block hover:cursor-pointer"
                        >
                            Forgot password?
                        </a>
                        <button
                            onClick={logIn}
                            id="loginBtn"
                            className={`w-full py-2 px-4 mt-7 bg-purple-500 hover:bg-purple-600 duration-300 shadow-fuchsia-700 rounded text-white font-bold ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span class="loader"></span>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                        <button
                            onClick={sentCodePassword}
                            id="confirmBtn"
                            style={{ display: 'none' }}
                            className={`w-full py-2 px-4 mt-7 bg-purple-500 hover:bg-purple-600 duration-300 shadow-fuchsia-700 rounded text-white font-bold ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span class="loader"></span>
                            ) : (
                                "Send"
                            )}
                        </button>
                        <button
                            onClick={sentConfirmCode}
                            id="confirmBtnCode"
                            style={{ display: 'none' }}
                            className={`w-full py-2 px-4 mt-7 bg-purple-500 hover:bg-purple-600 duration-300 shadow-fuchsia-700 rounded text-white font-bold ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span class="loader"></span>
                            ) : (
                                "Send Code"
                            )}
                        </button>


                    </div>
                    {/*</form>*/}
                </div>
            </div>
        </>
    );
};

export default SignIn;
