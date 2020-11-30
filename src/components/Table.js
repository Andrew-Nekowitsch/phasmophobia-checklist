import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
  lightStyle = {
  }

  classes = this.useStyles();

  render() {
    return (
        <TableContainer component={Paper}>
          <Table className={this.classes.table} aria-label="simple table">
            <GhostTableHead />
            <TableBody>
              {this.props.rows.map((row) => (
                <TableRow key={row.id} style={row.active === true && row.count === this.props.clueCount ? this.lightStyle : this.darkStyle}>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="center">{row.emf ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                    <TableCell align="center">{row.orb ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                    <TableCell align="center">{row.writing ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                    <TableCell align="center">{row.temps ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                    <TableCell align="center">{row.box ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                    <TableCell align="center">{row.finger ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
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
    rows: state.ghostData,
    clueCount: state.clueCount
  };
}

export default connect(mapStateToProps)(GhostTable);