import React, { Fragment } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import Title from '../Title';

const modelsByCollection = [
  {name: 'Factory Fresh', value: 12}, 
  {name: 'Initial D', value: 6},
];

const Chart = () => {
  return (
    <Fragment>
      <Title>Your miniatures distributed by Collection</Title>
      <ResponsiveContainer>
        <PieChart width={400} height={400} >
          <Pie data={modelsByCollection} dataKey="value" outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  )
}

export default Chart;