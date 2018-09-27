import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "./logo.png";
import headshot from "./headshot.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-page">
          <Cell col={12}>
            <img className="logo" src={logo} alt="logo" />
            <div className="banner">
              <div className="headshot-img">
                <img src={headshot} alt="avatar" className="headshot" />
              </div>
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML | CSS | JavaScript | Bootstrap | React | NodeJS | Ruby on
                Rails
              </p>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/kristina-rivero/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kristina-rivero/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kristina-rivero/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
