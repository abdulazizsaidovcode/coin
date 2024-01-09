import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'; // Importing echarts
import { config, setConfig, url } from '../../../components/api/api';
import axios from 'axios';


function Studentcoinstatistic() {
  const [coin, setCoinsRate] = useState([]);
  useEffect(() => {
    setConfig();
    axios.get(url + "coin/history/course/statistics", config)
      .then(res => {
        setCoinsRate(res.data.body);
      })
      .catch(err => console.log("Boshqa backendinchi topiyla iltomos 😭", err));
  }, []);


  const option = {
    backgroundColor: '#ffffff', // Background color of the chart
    tooltip: {
      trigger: 'axis', // Show tooltip on axis hover
      axisPointer: { type: 'shadow' }, // Type of pointer
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      borderColor: '#ccc', // Color of the border around the chart
      borderWidth: 2, // Width of the border around the chart
      show: true, // Display the border
    },
    xAxis: [ // Configuration for the x-axis
      {
        type: 'category',
        data: [""+ coin && coin.map(coincha => coincha.MONTH)],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [ // Configuration for the y-axis
      {
        type: 'value',
      },
    ],
    series: [ // Data series
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [+(coin && coin.map(coincha => coincha.coin))],
    itemStyle: {
      color: new echarts.graphic.LinearGradient( // Gradient color for the bars
        0, 0, 0, 1,
        [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ]
      )
    },
  },
    ],
};

// Style for the wrapping div to simulate border-radius
const chartStyle = {
  height: 320, // Height of the chart
  borderRadius: 10, // Border-radius for rounded corners
  overflow: 'hidden', // Ensures the chart doesn't overflow the rounded corners
  border: '0px solid #ccc', // Optional: Adds a border around the outer div if desired
};

return (
  <div style={chartStyle} className='all-shadow'>
    <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
  </div>
);
}

export default Studentcoinstatistic;
