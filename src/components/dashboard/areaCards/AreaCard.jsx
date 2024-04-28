import React from 'react'
import Chart from "react-apexcharts";


const AreaCard = () => {
    const data = {
        series: [
          {
            name: "Review",
            type: "line",
            data: [30, 0, 30,0, 40,30, 40,40],
          },
          {
            name: "Revi",
            type: "area",
            data: [30, 25, 36, 30, 64, 52,  36, 39],
          },
        ],
        options: {
          chart: {
            type: "area",
            height: "auto",
            toolbar: {
              show: false, // Hide the toolbar icons
            },
          },
    
          fill: {
            colors: ["#F5F5FC"],
            type: "color",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["#ff0000"],
            width:[3, 0]
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
            offsetY: 7,
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "day",
            categories: [
              "Sun",
              "Mon",
              "Tues",
              "Wed",
              "Thurs",
              "Fri",
              "Sat",
            ],
          },
          yaxis: {
            show: false
          },
          toolbar:{
            show: true
          },
          annotations: {
          points:[
            {
                x: "Fri",
                y: 30,
                marker: {
                  size: 8,
                  fillColor: '#FF4560',
                  strokeColor: 'red',
                  radius: 2,
                  cssClass: 'apexcharts-custom-class'
                },
                label: {
                    borderColor: '#FF4560',
                    offsetY: 0,
                    style: {
                      color: '#fff',
                      background: 'red',
                    },
              
                    text: '4hrs 26mins',
                  }
            },
        ]
          
        }

        },
      };
      return <div className="CustomerReview">
            <Chart options={data.options} series={data.series} type={data.type} />
      </div>;
}

export default AreaCard
