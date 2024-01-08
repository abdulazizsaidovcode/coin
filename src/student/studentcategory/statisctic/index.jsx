import React from 'react';
import EChartsReact from 'echarts-for-react';
import "../../../globalcss/style.css"

const Studentstatistic = () => {

    const option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '2022', '2023', '2024'],
            ['yan', 43.3, 85.8, 93.7],
            ['fev', 83.1, 73.4, 55.1],
            ['mart', 86.4, 65.2, 82.5],
            ['aprel', 20.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      };

    return (
        <div className="bg-white rounded-lg all-shadow p-2">
            <div style={{ height: '250px', width: '100%' }}>
                <EChartsReact option={option} style={{ height: '100%', width: '100%' }} />
            </div>
        </div>

    );
};

export default Studentstatistic;
