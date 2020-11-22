import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkmark from './Icon'
import Controller from './Controller'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {name: 'Shade',       emf: <Checkmark name="fas fa-check" />, orb: <Checkmark name="fas fa-check" />, writing: <Checkmark name="fas fa-check" />, temps: null,          box: null,          finger: null},
  {name: 'Phantom',     emf: <Checkmark name="fas fa-check" />, orb: <Checkmark name="fas fa-check" />, writing: null,          temps: <Checkmark name="fas fa-check" />, box: null,          finger: null},
  {name: 'Jinn',        emf: <Checkmark name="fas fa-check" />, orb: <Checkmark name="fas fa-check" />, writing: null,          temps: null,          box: <Checkmark name="fas fa-check" />, finger: null},
  {name: 'Yurei',       emf: null,          orb: <Checkmark name="fas fa-check" />, writing: <Checkmark name="fas fa-check" />, temps: <Checkmark name="fas fa-check" />, box: null,          finger: null},
  {name: 'Mare',        emf: null,          orb: <Checkmark name="fas fa-check" />, writing: null,          temps: <Checkmark name="fas fa-check" />, box: <Checkmark name="fas fa-check" />, finger: null},
  {name: 'Demon',       emf: null,          orb: null,          writing: <Checkmark name="fas fa-check" />, temps: <Checkmark name="fas fa-check" />, box: <Checkmark name="fas fa-check" />, finger: null},
  {name: 'Banshee',     emf: <Checkmark name="fas fa-check" />, orb: null,          writing: null,          temps: <Checkmark name="fas fa-check" />, box: null,          finger: <Checkmark name="fas fa-check" />},
  {name: 'Revenant',    emf: <Checkmark name="fas fa-check" />, orb: null,          writing: <Checkmark name="fas fa-check" />, temps: null,          box: null,          finger: <Checkmark name="fas fa-check" />},
  {name: 'Oni',         emf: <Checkmark name="fas fa-check" />, orb: null,          writing: <Checkmark name="fas fa-check" />, temps: null,          box: <Checkmark name="fas fa-check" />, finger: null},
  {name: 'Poltergeist', emf: null,          orb: <Checkmark name="fas fa-check" />, writing: null,          temps: null,          box: <Checkmark name="fas fa-check" />, finger: <Checkmark name="fas fa-check" />},
  {name: 'Spirit',      emf: null,          orb: null,          writing: <Checkmark name="fas fa-check" />, temps: null,          box: <Checkmark name="fas fa-check" />, finger: <Checkmark name="fas fa-check" />},
  {name: 'Wraith',      emf: null,          orb: null,            writing: null,          temps: <Checkmark name="fas fa-check" />, box: <Checkmark name="fas fa-check" />, finger: <Checkmark name="fas fa-check" />},
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
          <TableRow style={{padding: 0}}>
            <TableCell>Controls:</TableCell>
            <TableCell align="right"><Controller/></TableCell>
            <TableCell align="right"><Controller/></TableCell>
            <TableCell align="right"><Controller/></TableCell>
            <TableCell align="right"><Controller/></TableCell>
            <TableCell align="right"><Controller/></TableCell>
            <TableCell align="right"><Controller/></TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">EMF Level 5</TableCell>
            <TableCell align="right">Ghost Orbs</TableCell>
            <TableCell align="right">Ghost Writing</TableCell>
            <TableCell align="right">Freezing Temps</TableCell>
            <TableCell align="right">Spirit Box</TableCell>
            <TableCell align="right">Fingerprints</TableCell>
          </TableRow>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.emf}</TableCell>
              <TableCell align="right">{row.orb}</TableCell>
              <TableCell align="right">{row.writing}</TableCell>
              <TableCell align="right">{row.temps}</TableCell>
              <TableCell align="right">{row.box}</TableCell>
              <TableCell align="right">{row.finger}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
