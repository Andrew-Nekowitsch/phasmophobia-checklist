import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkmark from './Icon'
import GhostTableHead from './GhostTableHead'
import { connect } from 'react-redux';

class GhostTable extends Component {

  useStyles = () => makeStyles({
    table: {
      minWidth: 650,
    },
  });

  darkStyle = {
    backgroundColor: '#303030'
  }

  classes = this.useStyles();

  render() {
    return (
        <TableContainer component={Paper}>
          <Table className={this.classes.table} aria-label="simple table">
            <GhostTableHead />
            <TableBody>
              {this.props.rows.map((row) => (
                <TableRow key={row.name} style={row.active === true ? "" : this.darkStyle}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="center">{row.emf === true ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell align="center">{row.orb === true ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell align="center">{row.writing === true ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell align="center">{row.temps === true ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell align="center">{row.box === true ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell align="center">{row.finger === true ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rows: state.ghostData
  };
}

export default connect(mapStateToProps)(GhostTable);