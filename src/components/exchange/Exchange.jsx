import React, { useEffect, useState } from 'react';
import TotalCoins from './TotalCoins';
import TotalCoinsmonth from './total-coin-month';
import axios from 'axios';
import { byId, config, setConfig, url } from "../api/api"
import ExchangeTable from './ExchangeTable';
import TopLoading from '../dashboard/components/loading';

const Exchange = () => {
    const [exchangeTable, setExchangeTable] = useState(null);
    const [exchangeStatistics, setExchangeStatistics] = useState(null);
    const [exchangeDiagram, setExchangeDiagram] = useState(null);
    const [group, setGroup] = useState(null);

    useEffect(() => {
        setConfig();
        getExchangeTable();
        getCoinStatistics();
        getCoinDiagram();
        getGroups();
    }, []);

    // get exchange table
    const getExchangeTable = () => {
        axios.get(`${url}exchange?page=0&size=10`, config)
            .then(res => setExchangeTable(res.data.body.object))
            .catch(err => console.log('Teacher panel exchange get qilishda error: ', err))
    }

    // get coin month
    const getCoinStatistics = () => {
        axios.get(`${url}exchange/group-statistics`, config)
            .then(res => setExchangeStatistics(res.data.body))
            .catch(err => console.log('Teacher panel exchange statistikani get qilishda error: ', err))
    }

    // get coin diagram
    const getCoinDiagram = () => {
        axios.get(`${url}exchange/group-diagram`, config)
            .then(res => setExchangeDiagram(res.data.body.data5))
            .catch(err => console.log('Teacher panel exchange diagrammani get qilishda error: ', err))
    }

    // active ni chiqarish uchun
    const toggleActive = (id) => {
        setExchangeTable(exchangeTable.map(item => item.id === id ? { ...item, active: !item.active } : item));
    };

    const getGroups = () => {
        axios.get(`${url}group`, config)
            .then(res => setGroup(res.data.body.object))
            .catch(err => console.log('Teacher panel exchangesda error: ', err))
    }

    // exchange filter
    const exchangeFilter = () => {
        byId('exchangeSearch').value = '';
        let data = byId('searchGroup').value
        axios.post(`${url}exchange/filter-admin?groupId=${data}`, '', config)
            .then(res => res.data.body.length === 0 ? getExchangeTable() : setExchangeTable(res.data.body))
            .catch(err => console.log('Teacher panel exchange filter da error: ', err))
    }
    const searchHandler = (e) => {
        byId('searchGroup').value = 'Search Group';
        let data = e.target.value;
        !!data
            ? axios.post(`${url}exchange/filter-admin?studentName=${data}`, '', config)
                .then(res => setExchangeTable(res.data.body))
                .catch(() => setExchangeTable(null))
            : getExchangeTable()
    }

    return (
        <div className="p-8 w-full bg-gray-100">
            <h2 className="text-4xl font-bold font-mono text-gray-900 mt-5">Exchange</h2>
            <div className='flex flex-col lg:flex-row my-14 gap-7'>
                <div className='w-full lg:w-6/12 shadow-xl up duration-300 rounded-lg'>
                    {exchangeDiagram ? (
                        <TotalCoins exchangeDiagram={exchangeDiagram} />
                    ) : (
                        <TotalCoins exchangeDiagram={[{ groupName: "Loading...", numberOfExchange: 100 }]} />
                    )}
                </div>
                <div className='w-full lg:w-6/12 shadow-xl up duration-300 rounded-lg'>
                    {exchangeStatistics ? (
                        <TotalCoinsmonth exchangeStatistics={exchangeStatistics} />
                    ) : (
                        <TotalCoinsmonth
                            exchangeStatistics={[{
                                groupName: "Loading...",
                                numberOfExchange: 0,
                                monthName: 'Loading...',
                                year: 'loading...'
                            }]}
                        />
                    )}
                </div>
            </div>

            <div className='flex flex-col flex-wrap md:flex-row mt-16 mb-5 w-full gap-5'>
                <input
                    type="search"
                    id='exchangeSearch'
                    onChange={searchHandler}
                    className="w-full md:w-[48%] lg:w-[30%] p-3 text-sm border border-gray-300 rounded-lg
                    bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                    placeholder="🔍  Search"
                />
                <select
                    id='searchGroup'
                    onChange={exchangeFilter}
                    className="w-full md:w-[48%] lg:w-[30%] p-3 text-sm border border-gray-300 rounded-lg
                    bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300">
                    <option selected disabled>Search Group</option>
                    {group && group.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
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
