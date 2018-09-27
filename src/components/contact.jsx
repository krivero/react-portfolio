import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell
            style={{ color: "black" }}
            className="contact"
            col={8}
            offset={2}
          >
            <h2>Contact</h2>
            <div>
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
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
