import { useEffect, useState } from "react";
import Axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);



export default function Portfolio() {
  const [data, setData] = useState();
  const [label, setLabel] = useState([]);
  const [marketCap, setMarketCap] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    pieChartData()

  }, [loaded]);






  const pieChartData = async () => {

    const res = await Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    if (res) {
      setLoaded(true)
    }
    setData(res.data);

    var labelArray = [];
    var marketCapArray = [];

    for (var i = 0; i < 5; i++) {
      const obj = data[i];
      for (const j in obj) {

        if (j === "name") {
          labelArray.push(obj[j]);
        }
        if (j === "market_cap") {
          marketCapArray.push(obj[j]);
        }
      }
    }
    setLabel(labelArray)
    setMarketCap(marketCapArray)

  }




  return (
    <div>

      <div>
        <h1>MARKET VALUE OF 5 MAJOR CRYPTO CURRENCY</h1>
        <div style={{ width: 600, height: 400 }}>
          <Pie
            data={{
              labels: label,
              datasets: [
                {
                  label: "PortFolio",
                  data: marketCap,
                  backgroundColor: [
                    "#14C38E",
                    "rgb(54, 162, 235)",
                    "rgb(255, 99, 132)",
                    "#fcc203",
                    "#f01111",
                  ],
                  borderColor: [
                    "#14C38E",
                    "rgb(54, 162, 235)",
                    "rgb(255, 99, 132)",
                    "#fcc203",
                    "#f01111",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: "right",
                  labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    //boxWidth: 5
                  },
                },

                datalabels: {
                  display: true,
                  color: "white",
                  align: "center",
                  padding: {
                    right: 2,
                  },
                  labels: {
                    title: {
                      font: {
                        weight: "bold",
                        size: 18,
                      },
                    },
                  },
                },
              },
            }}
          />
        </div>

      </div>
    </div>
  )
}
