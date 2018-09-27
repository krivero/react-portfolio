import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import pdf from "../resume/KristinaRivero.pdf";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2016/05/26/771190_people_512x512.png"
                alt="avatar"
                style={{ height: "20rem" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}> Kristina Rivero </h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Email</h5>
            <p>kristinarivero@gmail.com</p>
            <h5>Web</h5>
            <p>kristinarivero.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <a href={pdf} target="_blank">
              Click here for PDF Version
            </a>
            <h2>Education</h2>
            <Education
              endDate={2018}
              schoolName={"Wyncode Academy"}
              schoolDescription={"diuygvfvh"}
            />
            <Education
              endDate={2014}
              schoolName={"Florida State University"}
              degree={"B.S. Exercise Science"}
              schoolDescription={"diuygvfvh"}
            />
            <Education
              endDate={2014}
              schoolName={"Florida State University"}
              degree={"B.S. Geography, Environmental Studies"}
              schoolDescription={"diuygvfvh"}
            />
            <h2>Experience</h2>
            <Experience
              startDate={"December 2016"}
              endDate={"June 2018"}
              companyName={"University of Miami"}
              companyCity={"Miami, FL"}
              jobTitle={"Administrative Assistant/Fellowship Coordinator"}
              jobDescription={""}
            />
            <h2>Tech Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"JavaScript"} progress={70} />
            <Skills skill={"Bootstrap"} progress={80} />
            <Skills skill={"React"} progress={70} />
            <Skills skill={"NodeJS"} progress={70} />
            <Skills skill={"Ruby on Rails"} progress={75} />

            <h2>Other Relevant Skills</h2>
            <Skills skill={"Willingness to Learn"} progress={100} />
            <Skills skill={"Customer Service"} progress={100} />
            <Skills skill={"Plan and Prioritize Work"} progress={100} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
