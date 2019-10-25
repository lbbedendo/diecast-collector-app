import React, { Fragment } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import Title from '../Title';

const modelsByAutomaker = [
  {name: 'Volkswagen', value: 4}, 
  {name: 'Porsche', value: 10},
  {name: 'Chevrolet', value: 9},
  {name: 'Ford', value: 8},
];

const Chart = () => {
  return (
    <Fragment>
      <Title>Your miniatures distributed by Automaker</Title>
      <ResponsiveContainer>
        <PieChart width={400} height={400} >
          <Pie data={modelsByAutomaker} dataKey="value" outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  )
}

export default Chart;