import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-page">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2016/05/26/771190_people_512x512.png"
              alt="avatar"
              className="avatar"
            />
            <div className="banner">
              <h1>Full Stack Web Developer</h1>
              <span class="text text-white" id="str">
                WEB DEVELOPER
              </span>
              <span class="type-cursor">|</span>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
