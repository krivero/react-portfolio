import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-page">
          <Cell col={12} />
        </Grid>
      </div>
    );
  }
}

export default Landing;
