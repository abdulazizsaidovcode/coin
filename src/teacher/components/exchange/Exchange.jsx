import React, { useEffect, useState } from 'react';
import TotalCoins from './TotalCoins';
import TotalCoinsmonth from './total-coin-month';
import axios from 'axios';
import { config, setConfig, url } from '../../../components/api/api';
import ExchangeTable from './ExchangeTable';

const Exchange = () => {
    const [exchangeTable, setExchangeTable] = useState(null);

    useEffect(() => {
        setConfig();
        getExchangeTable();
    }, []);

    // get exchange table
    const getExchangeTable = () => {
        axios.get(`${url}exchange/teacher?page=0&size=10`, config)
            .then(res => setExchangeTable(res.data.body.object))
            .catch(err => console.log('Teacher panel exchange get qilishda error: ', err))
    }

    // active ni chiqarish uchun
    const toggleActive = (id) => {
        setExchangeTable(exchangeTable.map(item => item.id === id ? { ...item, active: !item.active } : item));
    };

    return (
        <div className="p-8 w-full bg-gray-100">
            <div className="mt-10 flex justify-between items-center">
                <h2 className="text-4xl font-bold font-mono text-gray-900 mb-4">Exchange</h2>
                <input
                    type="search"
                    className="w-80 py-3 px-3 text-sm border border-gray-300 rounded-lg
                    bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                    placeholder="🔍  Search" />
            </div>
            <div className='flex justify-between my-14'>
                <div className='w-6/12 shadow-xl up duration-300 rounded-lg mr-4'>
                    <TotalCoins />
                </div>
                <div className='w-6/12 shadow-xl up duration-300 rounded-lg ml-4'>
                    <TotalCoinsmonth />
                </div>
            </div>

            <ExchangeTable exchangeTable={exchangeTable} toggleActive={toggleActive} />
        </div>
    );
};

export default Exchange;
