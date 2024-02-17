import "../../../globalcss/style.css";
import React, { useEffect, useState } from 'react';
import GiftCard from "./GiftCard";
import { config, setConfig, url } from "../../../components/api/api";
import axios from "axios";

function Gift() {
    const [gifts, setGifts] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setConfig();
        getGifts();
    }, []);

    // get gifts
    const getGifts = () => {
        axios.get(`${url}gift`, config)
            .then((res) => {
                setGifts(res.data.body.object)
                setPage(res.data.body.totalPage);
            })
            .catch((err) => console.log('Teacher paneldan gift kelmadi: ', err));
    };

    // giftFilter
    const giftFilter = (e) => {
        let data = e.target.value
        !data ? getGifts() :
            axios.get(`${url}gift/search?name=${data}`, config)
                .then(res => res.data.body.length === 0 ? setGifts(null) : setGifts(res.data.body))
                .catch(err => console.log('Teacher panel gift filterda error: ', err));
    }

    const handelPageClick = (event) => {
        const pageNumber = event.selected;
        // setCurrentPage(pageNumber)
        axios.get(`${url}gift?page=${pageNumber}&size=10`, config)
          .then(res => setGifts(res.data.body.object))
          .catch(err => console.log('error page: ', err));
      }

    return (
        <div className="bg-gray-100 min-h-screen p-8 w-full">
            <div className="mb-6 flex justify-between items-center flex-wrap gap-5">
                <h2 className="text-4xl font-bold font-inika text-gray-900">Gift</h2>
                <input
                    onChange={giftFilter}
                    type="search"
                    className="w-full sm:w-80 py-3 px-3 text-sm border border-gray-300 rounded-lg
                    bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                    placeholder="🔍  Search" />
            </div>
            <GiftCard gifts={gifts} page={page} handelPageClick={handelPageClick} />
        </div>
    );
}

export default Gift;