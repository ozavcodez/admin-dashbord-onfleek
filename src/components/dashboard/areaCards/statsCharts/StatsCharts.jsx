import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker CSS
import './StatsCharts.scss';

const StatisticChart = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setShowCalendar(false);
  };

  const getSubtitleText = () => {
    return `
      <div class="toolbar-custom">
        <button class="year-button" onclick="handleCalendarClick()">${String(selectedYear)}</button>
        <div id="calendar-container"></div>
      </div>
    `;
  };

  const handleCalendarClick = () => {
    const calendarContainer = document.getElementById('calendar-container');
    if (calendarContainer) {
      calendarContainer.innerHTML = `
        <DatePicker
          selected=${new Date(selectedYear, 0, 1)}
          onChange=${(date) => handleYearChange(date.getFullYear())}
          dateFormat="yyyy"
          showYearPicker
        />
      `;
    }
    setShowCalendar(!showCalendar);
  };

  const data = {
    series: [
      {
        data: [
          {
          x: "Nov",
          y: [1000, 2000, 100, 6000]
        },
        {
          x: "Dec",
          y: [300, 600, 6620, 500]
        },
        {
          x: "Jan",
          y: [663, 6648.95, 6623.34, 100]
        },
        {
          x: "Feb",
          y: [635.65, 6651, 6629.67, 1000]
        },
        {
          x: "Mar",
          y: [66324, 6640, 6620, 1000]
        },


        ]
      },
    ],
    options: {
      chart: {
        id: "basic-bar",
        type: 'candlestick',
        height: 350,
        toolbar: {
          show: false, // Hide the toolbar icons
        },
       
        row: {
          show: false,      // you can either change hear to disable all grids
        },
        column: {
          show: false,      // you can either change hear to disable all grids
          opacity: 0
        },
      },
      title: {
        text: 'Spent Time',
        align: 'left',
      },
      subtitle: {
        text: "Year",
        align: 'right ',
      },
      xaxis: {
        type: 'category',
        lines: {
          show: false
      }

      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        lines: {
          show: false
      },
      tickAmount: 4,
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#3137b2', // Color for upward candles
          },
        },
      },
    },
  };

  return (
    <div className="CustomerReview">
      <Chart options={data.options} series={data.series} type="candlestick" height={250} />
    </div>
  );
};

export default StatisticChart;

