import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker CSS
import './StatsCharts.scss';

const StatisticChart = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [showCalendar, setShowCalendar] = useState(false);

  // Function to handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setShowCalendar(false); // Close the calendar after selecting the year
  };

  // Custom toolbar icon configuration
  const toolbarIcons = {
    calendar: {
      icon: '<span> year <img src="/drop-icon.png"></span>',
      title: 'Open Calendar', // Tooltip for the icon
      class: 'custom-calendar-icon', // Custom CSS class for styling
      click: function () {
        setShowCalendar(!showCalendar); // Toggle calendar visibility
      },
    },
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
        id: "candles",
        type: 'candlestick',
        height: 350,
        toolbar: {
          show: true, // Hide the toolbar icons
          offsetX: 0,
          offsetY: 10,
          tools: {
            download: false,
            customIcons: [toolbarIcons.calendar]
          },
        },
        zoom: {
          enabled: false
        },
       
      },
      
      grid: {
        show: false,
      },
      title: {
        text: 'Statistics',
        align: 'left',
      },
      
      xaxis: {
        type: 'category',
        lines: {
          show: true
      }

      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        lines: {
          show: true
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
    <div className="custom-calendar-container">
        <div className="custom-calendar-container">
        {showCalendar && (
        <DatePicker className='calendar-dropdown'
          selected={new Date(selectedYear, 0, 1)} // January 1st of selected year
          onChange={(date) => handleYearChange(date.getFullYear())}
          dateFormat="yyyy"
          showYearPicker
        />
      )}
        </div>

      
      <Chart options={data.options} series={data.series} type="candlestick" height={250} width="90%" />
      
      
    </div>
  );
};

export default StatisticChart;

