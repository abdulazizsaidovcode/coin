import EChartsReact from 'echarts-for-react';
import { useEffect, useState } from 'react';

const TotalCoinsmonth = ({ exchangeStatistics }) => {
    const [groupName, setGroupName] = useState(null);
    const [exchange, setExchange] = useState(null);
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);

    useEffect(() => {
        setGroupName(exchangeStatistics.map(p => p.groupName));
        setExchange(exchangeStatistics.map(p => p.numberOfExchange));
        setYear(exchangeStatistics.map(p => p.year));
        setMonth(exchangeStatistics.map(p => p.monthName));
    }, [exchangeStatistics]);

    const option = {
        title: {
            text: 'Exchanges made in a month',
            subtext: `${year}, ${month}`,
            left: 'center',
        },
        legend: {},
        tooltip: {
            trigger: 'item',
            formatter: `${groupName} <br /> ${month} : ${exchange} (exchange)`
        },
        dataset: {
            source: [
                [`${month} (exchange)`, exchange],
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }]
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-5">
            <div style={{ height: '400px', width: '100%' }}>
                <EChartsReact option={option} style={{ height: '100%', width: '100%' }} />
            </div>
        </div>

    );
};

export default TotalCoinsmonth;
