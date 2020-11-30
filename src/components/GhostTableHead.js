import React, { Component } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Controller from './Controller'
import { connect } from 'react-redux';
import { RESET } from "../redux/actions";

class GhostTableHead extends Component {

    handleReset = () => {
        this.props.dispatch({ type: RESET, clue: this.props.column });
      };

    render() {
        return (
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center">EMF Level 5</TableCell>
                    <TableCell align="center">Ghost Orbs</TableCell>
                    <TableCell align="center">Ghost Writing</TableCell>
                    <TableCell align="center">Freezing Temps</TableCell>
                    <TableCell align="center">Spirit Box</TableCell>
                    <TableCell align="center">Fingerprints</TableCell>
                </TableRow>
                <TableRow style={{ padding: '0px' }}>
                    <TableCell align="right"><Button onClick={this.handleReset}><strong>Reset</strong></Button></TableCell>
                    <TableCell align="center"><Controller column={0} /></TableCell>
                    <TableCell align="center"><Controller column={1} /></TableCell>
                    <TableCell align="center"><Controller column={2} /></TableCell>
                    <TableCell align="center"><Controller column={3} /></TableCell>
                    <TableCell align="center"><Controller column={4} /></TableCell>
                    <TableCell align="center"><Controller column={5} /></TableCell>
                </TableRow>
            </TableHead>
        );
    }
}

export default connect()(GhostTableHead);

