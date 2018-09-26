import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={3}>
          <div>{this.props.skill}</div>
        </Cell>
        <Cell style={{ marginTop: "1rem" }} col={9}>
          <div>
            <ProgressBar
              style={{ margin: "auto", width: "100%" }}
              progress={this.props.progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
