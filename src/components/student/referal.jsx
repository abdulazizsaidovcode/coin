import axios from "axios";
import React, { useEffect, useState } from "react";
import { byId, config, url } from "../api/api";
import { toast } from "react-toastify";

const Referal = () => {
  const [input, setInput] = useState(false);
  const [inputV, setInputV] = useState(true);
  const [referal, setReferal] = useState(null);

  const change = () => setInput(!input);

  useEffect(() => {
    getI();
  }, []);

  const inputDes = () => {
    if (byId("referal").value !== "") {
      setInputV(false);
    } else {
      setInputV(true);
    }
  };

  const changeI = () => {
    axios
      .post(`${url}referral/coin/add?coin=${byId("referal").value}`, "", config)
      .then(() => {
        toast.success("Successfully updated!");
        change();
        getI();
      })
      .catch(() => {
        toast.error("Something went wrong");
        change();
      });
  };

  const getI = () => {
    axios
      .get(`${url}referral/coin/get`, config)
      .then((res) => {
        setReferal(res.data.body.coin);
      })
      .catch((err) => {});
  };

  return (
    <div>
      {input ? (
        <div className="flex gap-3 items-center">
          <input
            onChange={inputDes}
            id="referal"
            type="number"
            placeholder="Write coin value..."
            className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
          <div className={`${
                inputV ? "hidden" : ""
              }`}>
            <i
              onClick={changeI}
              className={`fa-regular fa-circle-check fa-lg hover:cursor-pointer`}
              style={{ color: inputV ? "#000" : "#12c106" }}
            ></i>
          </div>
          <i
            onClick={change}
            className="fa-regular fa-circle-xmark fa-lg hover:cursor-pointer "
            style={{ color: "#f70808" }}
          ></i>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <p>Referral coin value: {referal ? referal : "0"}</p>
          <i
            onClick={change}
            class="fa-solid fa-pen-to-square fa-lg"
            style={{ color: "#74C0FC" }}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Referal;
