
import { connect } from 'react-redux';
import { RESET } from "../redux/actions";
import Button from "@material-ui/core/Button";
import React, { Component } from 'react';

class Reset extends Component {

    handleReset = () => {
        this.props.dispatch({ type: RESET, clue: this.props.column });
      };
      
    render(){
        return (
            <Button onClick={this.handleReset}><strong>Reset</strong></Button>
        )
    }
}

export default connect()(Reset);
