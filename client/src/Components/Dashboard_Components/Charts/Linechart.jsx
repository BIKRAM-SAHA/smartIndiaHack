import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Linechart({ labels, dataset, datasetLabels, colors }) {
  const chart = useRef();
  const hoverActiveLine = (elementDatasetIndex, thickness) => {
    console.log(chart.current.config.data.datasets[elementDatasetIndex]);
    if (elementDatasetIndex >= 0) {
      let element = chart.current.config.data.datasets[elementDatasetIndex];
      element.borderWidth = thickness;
      element.borderColor = element.hoverBorderColor;
    } else {
      chart.current.config.data.datasets.map((dataset) => {
        dataset.borderWidth = thickness;
        dataset.borderColor = dataset.backgroundColor;
      });
    }
    chart.current.update();
  };
  const processedData = dataset.map((item, index) => {
    return {
      id: index,
      label: datasetLabels[index],
      data: item,
      responsive: true,
      borderWidth: 2,
      borderColor: colors ? colors[index][0] : "gray",
      backgroundColor: colors ? colors[index][0] : "red",
      hoverBorderColor: colors ? colors[index][1] : "gray",
      borderDash: [20],
      borderJoinStyle: "round",
      borderCapStyle: "round",
      tension: 0,
      pointRadius: 3,
      pointHoverRadius: 6,
      pointStyle: "rectRounded",
    };
  });
  return (
    <div className="max-h-2xl flex aspect-video max-w-2xl items-center justify-center rounded-3xl pl-3 pr-4 pb-4 pt-3 sm:w-4/5 md:shadow-xl lg:m-5">
      <Line
        ref={chart}
        datasetIdKey="id"
        data={{
          labels: labels,
          datasets: processedData,
        }}
        options={{
          maintainAspectRatio: true,
          layout: {
            padding: 8,
          },
          onHover: (event, chartElement) => {
            if (chartElement[0]) {
              hoverActiveLine(chartElement[0].datasetIndex);
            } else {
              hoverActiveLine(-1, 2);
            }
          },
          plugins: {
            legend: {
              display: true,
              position: "right",
              labels: {
                usePointStyle: true,
              },
            },
          },
          scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 100,
              // grid:{
              //   display: false
              // }
            },
          },
        }}
        className="p-3"
      />
    </div>
  );
}

export default Linechart;

// call example:
{/* <Linechart
          labels={["Sci", "Maths", "Eng", "SSc", "Hindi"]}
          dataset={[
            [50, 60, 70, 50, 60],
            [20, 30, 40, 50, 70],
          ]}
          datasetLabels={["PT-1", "PT-2"]}
          colors={[
            ["rgb(230,206,247)", "rgb(247,15,225)"],
            ["#b0d980", "#84c82e"],
          ]}
        /> */}
