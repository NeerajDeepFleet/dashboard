import React, { useEffect, useState } from 'react';
import Axios from "axios";


import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CryptoChart() {

  const [data, setData] = useState([]);


  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/coins/1doge/market_chart?vs_currency=usd&days=30&interval=daily").then((res) => {
      setData(res.data.prices);
      // console.log(res.data.prices)
    });

  }, []);


  const ChartData = data.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  //https://api.coingecko.com/api/v3/coins/1doge/market_chart?vs_currency=usd&days=14

//https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}


  return (
    <div>CryptoChart


      <div>
        <Line height="400"
          data={{
            labels: ChartData.map((val) => val.x),

            datasets: [
              {
                data: ChartData.map((val) => val.y),
                pointRadius: 0,
                borderColor: "#328213",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle"
                  // boxWidth: 5
                }
              },
              title: {
                display: true,
                text: `hi`,
                padding: {
                  bottom: 30
                },
                weight: "bold",
                color: "#00325c",
                font: {
                  size: 13
                },
                align: "end"
              },

              datalabels: {
                display: false,
                labels: {
                  title: {
                    font: {
                      weight: "bold",
                      size: 18
                    }
                  },
                },
              }
            }
          }}
        />
      </div>






      <div style={{ maxWidth: "650px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
            datasets: [
              {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [1552, 1319, 613, 1400],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>





    </div>
  )
}
