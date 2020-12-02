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
import Divider from '@material-ui/core/Divider';

class GhostTable extends Component {

  useStyles = () => makeStyles({
    table: {
      minWidth: 650,
    },
  });

  darkBackgroundColor = {
    backgroundColor: '#303030'
  }
  emptyStyle = {
  }
  checkColor = {
    color: '#009926'
  }
  xColor = {
    color: '#f44336'
  }

  rowStyler = (row) => {
    return (row.active === true && row.count === 3 && this.checkColor) ||
    (row.active === true && row.count === this.props.clueCount ? this.emptyStyle : this.darkBackgroundColor )
  }
  cellStyler = (column) => {
    return this.props.clueList[column] === 1 ? this.checkColor : 
    (this.props.clueList[column] === 2 ? this.xColor : this.emptyStyle)
  }

  classes = this.useStyles();

  render() {
    return (
        <TableContainer component={Paper}>
          <Table className={this.classes.table} aria-label="simple table">
            <GhostTableHead/>
            <TableBody>
          <Divider />
          <Divider />
              {this.props.rows.map((row) => (
                <TableRow key={row.id} style={this.rowStyler(row)}>
                  <TableCell style={this.rowStyler(row)} component="th" scope="row">{row.name}</TableCell>
                  <TableCell style={this.cellStyler(0)} align="center">{row.emf ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell style={this.cellStyler(1)} align="center">{row.orb ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell style={this.cellStyler(2)} align="center">{row.writing ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell style={this.cellStyler(3)} align="center">{row.temps ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell style={this.cellStyler(4)} align="center">{row.box ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
                  <TableCell style={this.cellStyler(5)} align="center">{row.finger ? <Checkmark name="fas fa-check" /> : ""}</TableCell>
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
    clueCount: state.clueCount,
    clueList: state.clueList
  };
}

export default connect(mapStateToProps)(GhostTable);