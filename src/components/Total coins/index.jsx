// TotalCoins.js

import React from 'react';
import EChartsReact from 'echarts-for-react';

const TotalCoins = () => {

    const option = {
        title: {
            text: 'Total coin by courses',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Java', 'css', 'Html', 'ReactJs', 'Scss']
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Java' },
                    { value: 735, name: 'css' },
                    { value: 580, name: 'Html' },
                    { value: 484, name: 'ReactJs' },
                    { value: 300, name: 'Scss' }
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
            <div style={{ height: '400px', width: '100%' }}>
                <EChartsReact option={option} style={{ height: '100%', width: '100%' }} />
            </div>
        </div>

    );
};

export default TotalCoins;
