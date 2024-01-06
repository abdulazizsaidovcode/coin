import React, { useEffect, useState, useMemo } from 'react';
import EChartsReact from 'echarts-for-react';

const TotalCoins = ({ pl }) => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    if (pl && pl.length > 0) {
      const loadedData = pl.map(p => ({ value: p.coin, name: p.categoryName }));
      setCoinData(loadedData);
    }
  }, [pl]);

  const option = useMemo(() => {
    return {
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
        data: coinData.map(item => item.name)
      },
      series: [
        {
          name: 'Coins',
          type: 'pie',
          radius: '50%',
          data: coinData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: '#333'
            }
          }
        }
      ]
    };
  }, [coinData]); // Faqat `coinData` o'zgarganda hisoblanadi

  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div style={{ height: '400px', width: '100%', display: "flex", flexDirection: "column" }}>
        <EChartsReact
          option={option}
          style={{ height: '100%', width: '100%', display: "flex", justifyContent: "center" }}
        />
      </div>
    </div>
  );
};

export default TotalCoins;
