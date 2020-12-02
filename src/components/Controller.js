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

  checkStyle = '#009926'
  xStyle = '#f44336'
  emptyStyle = ''
  checkColor = () => {
    return this.props.clueList[this.props.column] === 1 ? this.checkStyle : this.emptyStyle
  }
  xColor = () => {
    return this.props.clueList[this.props.column] === 2 ? this.xStyle : this.emptyStyle
  }
  
  render() {
    return (
      <div>
        <IconButton onClick={this.handleCheckmark} style={{color: this.checkColor(), padding: "0px" }}>
          <FaIcon name="fas fa-check" />
        </IconButton>
        <IconButton onClick={this.handleXmark} style={{color: this.xColor(), padding: "0px" }}>
          <FaIcon name="fas fa-times" />
        </IconButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clueList: state.clueList
  };
}

export default connect(mapStateToProps)(Controller);
