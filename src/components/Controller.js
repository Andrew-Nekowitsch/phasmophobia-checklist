import React, { Component } from 'react';
import FaIcon from "./Icon";
import IconButton from "@material-ui/core/IconButton";
import { connect } from 'react-redux';
import { POSITIVE, NEGATIVE } from "../redux/actions";

class Controller extends Component {

  handleCheckmark = () => {
    this.props.dispatch({ type: POSITIVE, clue: this.props.column });
  };

  handleXmark = () => {
    this.props.dispatch({ type: NEGATIVE, clue: this.props.column });
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.handleCheckmark} style={{ padding: "0px" }}>
          <FaIcon name="fas fa-check" />
        </IconButton>
        <IconButton onClick={this.handleXmark} style={{ padding: "0px" }}>
          <FaIcon name="fas fa-times" />
        </IconButton>
      </div>
    );
  }
}

export default connect()(Controller);
