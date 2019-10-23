/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

function createData(id, automaker, name, modelYear, brand, collection, country) {
  return { id, automaker, name, modelYear, brand, collection, country };
}

const rows = [
  createData(0, 'Porsche', '911 GT3', 2018, 'Hot Wheels', 'Factory Fresh', 'Germany'),
  createData(1, 'BMW', 'M2', 2016, 'Hot Wheels', 'Factory Fresh', 'Germany'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Your Miniatures</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Automaker</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Model Year</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Collection</TableCell>
            <TableCell align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.automaker}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.modelYear}</TableCell>
              <TableCell>{row.brand}</TableCell>
              <TableCell>{row.collection}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary">
          See more miniatures
        </Link>
      </div>
    </React.Fragment>
  );
}
