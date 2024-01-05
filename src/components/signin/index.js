import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import axios from "axios";
import { byId, url } from "../api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    let getJwtToken = sessionStorage.getItem("jwtToken");
    if (getJwtToken) byId("links").click();
    else console.log("xato");
  }, [role]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  async function logIn() {
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
      .catch(() => toast.error("Raqam yoki parol xato!"));
  }

  function checkKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      byId("loginBtn").click();
    }
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
          <div className="flex flex-col mt-1">
            <a
              href="#"
              className="text-sm text-end text-purple-600 hover:underline w-full block"
            >
              Forgot password?
            </a>
            <button
                            onClick={logIn}
                            id="loginBtn"
                            className="w-full py-2 px-4 mt-7 bg-purple-500 hover:bg-purple-600 duration-300 shadow-fuchsia-700 rounded text-white font-bold">
                            Sign In
                        </button>

            <button
              
              type="button"
              class="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          </div>
          {/*</form>*/}
        </div>
      </div>
    </>
  );
};

export default SignIn;
