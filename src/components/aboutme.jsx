import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <Grid style={{ marginTop: "2rem" }}>
          <Cell col={10} offset={1} className="about-page">
            <Cell col={8} offset={2}>
              <div className="about-name">
                <h1>Hi, I'm Kristina</h1>
              </div>
              <h3>
                I like making easy to use and visually appealing web
                applications, such as this one. I also sometimes create
                marketing materials. I live in Miami, FL. Before learning to
                code I worked in fields such as media and healthcare.{" "}
              </h3>
            </Cell>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
