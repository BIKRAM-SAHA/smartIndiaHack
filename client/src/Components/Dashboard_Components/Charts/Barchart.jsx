import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";

function Barchart({ labels, dataset, datasetLabels, colors }) {
  const processedData = dataset.map((item, index) => {
    return {
      id: index,
      label: datasetLabels[index],
      data: item,
      responsive: true,
      fill: true,
      borderWidth: 2,
      borderColor: colors ? colors[index][0] : "gray",
      hoverBorderColor: colors ? colors[index][1] : "gray",
      backgroundColor: colors ? colors[index][0] : "red",
    };
  });
  return (
    <div className="max-h-2xl flex aspect-video max-w-2xl items-center justify-center rounded-3xl pl-3 pr-4 pb-4 pt-3 lg:m-5 lg:w-4/5 lg:shadow-xl">
      <Bar
        data={{
          labels: labels,
          datasets: processedData,
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                usePointStyle: true,
              },
            },
          },
          scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 100,
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Barchart;

// call example:
{/* <Barchart
          labels={["Sci", "Maths", "Eng", "SSc", "Hindi"]}
          dataset={[
            [50, 60, 70, 50, 60],
            [20, 30, 40, 50, 70],
          ]}
          datasetLabels={["PT-1", "PT-2"]}
          colors={[
            ["rgb(230,206,247)", "rgb(247,15,225)"],
            ["#b0d980", "#83de14"],
          ]}
        /> */}
