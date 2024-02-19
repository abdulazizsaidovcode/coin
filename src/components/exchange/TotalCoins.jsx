import React, { useEffect, useState } from 'react';
import EChartsReact from 'echarts-for-react';

const TotalCoins = ({ exchangeDiagram }) => {

    const [pn, setPn] = useState(null);
    const [data, setData] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    useEffect(() => {
        setPn(exchangeDiagram.map(p => p.groupName));
        setMonth(exchangeDiagram.map(p => p.monthName));
        setYear(exchangeDiagram.map(p => p.year));
        setData(exchangeDiagram.map(p => {
            return { value: p.numberOfExchange, name: p.groupName }
        }))
    }, [exchangeDiagram]);

    const option = {
        title: {
            text: 'Exchanges made every month',
            subtext: `${year}, ${month}`,
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: pn ? pn : []
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: data ? data : [],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-5">
                <div style={{ height: '400px', width: '100%', display: "flex", flexDirection: "column" }}>
                    <EChartsReact
                        option={option}
                        style={{ height: '100%', width: '100%', display: "flex", justifyContent: "center" }}
                    />
                </div>
            </div>
        </>
    );
};

export default TotalCoins;
