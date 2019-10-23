import React, { Fragment } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import Title from './Title';

const automakers = [
  {name: 'Volkswagen', value: 4}, 
  {name: 'Porsche', value: 10},
  {name: 'Chevrolet', value: 9},
  {name: 'Ford', value: 8},
]


export default function Chart() {
  return (
    <Fragment>
      <Title>Your miniatures distributed by Automaker</Title>
      <ResponsiveContainer>
        <PieChart width={400} height={400} >
          <Pie data={automakers} dataKey="value" outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  )
}