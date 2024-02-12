import React, { useEffect, useState } from 'react';
import TotalCoins from './TotalCoins';
import TotalCoinsmonth from './total-coin-month';
import axios from 'axios';
import { config, setConfig, url } from '../../../components/api/api';
import ExchangeTable from './ExchangeTable';
import TopLoading from '../dashboard/components/loading';

const Exchange = () => {
    const [exchangeTable, setExchangeTable] = useState(null);
    const [exchangeStatistics, setExchangeStatistics] = useState(null);
    const [exchangeDiagram, setExchangeDiagram] = useState(null);

    useEffect(() => {
        setConfig();
        getExchangeTable();
        getCoinStatistics();
        getCoinDiagram();
    }, []);

    // get exchange table
    const getExchangeTable = () => {
        axios.get(`${url}exchange/teacher?page=0&size=10`, config)
            .then(res => setExchangeTable(res.data.body.object))
            .catch(err => console.log('Teacher panel exchange get qilishda error: ', err))
    }

    // get coin month
    const getCoinStatistics = () => {
        axios.get(`${url}exchange/teacher-group-statistics`, config)
            .then(res => setExchangeStatistics(res.data.body))
            .catch(err => console.log('Teacher panel exchange statistikani get qilishda error: ', err))
    }

    // get coin diagram
    const getCoinDiagram = () => {
        axios.get(`${url}exchange/teacher/group/diagram`, config)
            .then(res => setExchangeDiagram(res.data.body.data5))
            .catch(err => console.log('Teacher panel exchange diagrammani get qilishda error: ', err))
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
                    {exchangeDiagram ? (
                        <TotalCoins exchangeDiagram={exchangeDiagram} />
                    ) : (
                        <TotalCoins exchangeDiagram={[{ groupName: "Loading...", numberOfExchange: 100 }]} />
                    )}
                </div>
                <div className='w-6/12 shadow-xl up duration-300 rounded-lg ml-4'>
                    {exchangeStatistics ? (
                        <TotalCoinsmonth exchangeStatistics={exchangeStatistics} />
                    ) : (
                        <TotalCoinsmonth />
                    )}
                </div>
            </div>

            {exchangeTable ? (
                <ExchangeTable exchangeTable={exchangeTable} toggleActive={toggleActive} />
            ) : (
                <TopLoading name='Exchange information' />
            )}
        </div>
    );
};

export default Exchange;
