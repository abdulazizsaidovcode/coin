import React, { useEffect, useState } from 'react';
import EChartsReact from 'echarts-for-react';

const TotalCoins = ({ pl }) => {

    const [pn, setPn] = useState(['nima', 'yana']);
    const [data, setData] = useState(['data', 'dataset']);

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
        <div className="bg-white rounded-lg shadow-md p-5">
            <div style={{ height: '400px', width: '100%', display: "flex", flexDirection: "column" }}>
                <EChartsReact option={option}
                    style={{ height: '100%', width: '100%', display: "flex", justifyContent: "center" }} />
            </div>
        </div>

    );
};

export default TotalCoins;
