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
