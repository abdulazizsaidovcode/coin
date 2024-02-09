import React, { useEffect, useState } from 'react';
import EChartsReact from 'echarts-for-react';

const TotalCoins = ({ pl }) => {

    const [pn, setPn] = useState(null);
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     setPn(pl.map(p => p.categoryName));
    //     setData(pl.map(p => {
    //         return { value: p.coin, name: p.categoryName }
    //     }))
    // }, [pl]);

    const option = {
        title: {
            text: 'Total coin by courses',
            subtext: 'Languages',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: pn ? pn : [
                {name: 'Yanver'},
                {name: 'Fevral'},
                {name: 'Mart'},
                {name: 'Aprel'},
                {name: 'May'},
                {name: 'Iyun'}
            ]
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: data ? data : [
                    {value: 4, name: 'Yanver'},
                    {value: 10, name: 'Fevral'},
                    {value: 7, name: 'Mart'},
                    {value: 8, name: 'Aprel'},
                    {value: 5, name: 'May'},
                    {value: 11, name: 'Iyun'}
                ],
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
        <div className="bg-white rounded-lg shadow-md p-5">
            <div style={{ height: '400px', width: '100%', display: "flex", flexDirection: "column" }}>
                <EChartsReact option={option}
                    style={{ height: '100%', width: '100%', display: "flex", justifyContent: "center" }} />
            </div>
        </div>

    );
};

export default TotalCoins;
