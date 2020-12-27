import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

const PuppyChart = () => {
  const pottyTime = useSelector((state) => state.tracker);
  const data = {
    labels: ['Food', 'Water', 'Play', 'Sleep'],
    datasets: [
      {
        label: 'Average Potty Time',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data:
          pottyTime.length > 1 ? pottyTime.map((puppy) => puppy.time) : null, //TODO FORMAT THIS
      },
    ],
  };
  return (
    <>
      <Paper>
        <div className='header'>
          <h1 className='title'>Average Potty Time</h1>
          <Bar
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </Paper>
    </>
  );
};

export default PuppyChart;
