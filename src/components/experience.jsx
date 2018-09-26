import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startDate} -</p>
          <p>{this.props.endDate}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.companyName}</h4>
          <h6 style={{ marginTop: "0px" }}>{this.props.companyCity}</h6>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
