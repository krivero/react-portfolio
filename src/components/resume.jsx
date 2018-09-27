import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import headshot from "./headshot.jpg";
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
              <div className="headshot-img">
                <img src={headshot} alt="avatar" className="headshot" />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ paddingTop: ".5em" }}> Kristina Rivero </h2>
              <h4>Web Developer</h4>
              <hr
                style={{
                  borderTop: "3px solid gray",
                  width: "50%",
                  margin: "auto"
                }}
              />
              <h5>Email</h5>
              <p>kristinarivero@gmail.com</p>
              <h5>Web</h5>
              <p>kristinarivero.com</p>
            </div>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <div style={{ textAlign: "right" }}>
              <button className="pdfButton">
                <a href={pdf} target="_blank">
                  PDF Version
                </a>
              </button>
            </div>
            <h2>Tech Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"JavaScript"} progress={70} />
            <Skills skill={"Bootstrap"} progress={80} />
            <Skills skill={"React"} progress={70} />
            <Skills skill={"NodeJS"} progress={70} />
            <Skills skill={"Ruby on Rails"} progress={75} />

            <h2>Other Relevant Skills</h2>
            <Skills
              skill={"Multitask High-Volume Environment"}
              progress={100}
            />
            <Skills skill={"Customer Service"} progress={100} />
            <Skills skill={"Plan and Prioritize Work"} progress={100} />
            <h2>Education</h2>
            <Education
              endDate={2018}
              schoolName={"Wyncode Academy"}
              schoolDescription={"Full Stack Web Developer Program"}
            />
            <Education
              endDate={2014}
              schoolName={"Florida State University"}
              degree={"B.S. Exercise Science"}
              schoolDescription={"Tallahassee, FL"}
            />
            <Education
              endDate={2014}
              schoolName={"Florida State University"}
              degree={"B.S. Geography, Environmental Studies"}
              schoolDescription={"Tallahassee, FL"}
            />
            <h2>Experience</h2>
            <Experience
              startDate={"December 2016"}
              endDate={"June 2018"}
              companyName={"University of Miami"}
              companyCity={"Miami, FL"}
              jobTitle={"Administrative Assistant/Fellowship Coordinator"}
              jobDescription={
                <ul>
                  <li>
                    Managed and administered daily operations of two Orthopaedic
                    Trauma Surgeons, including the Associate Chairman for
                    Clinical Affairs/Chief of Trauma Service
                  </li>
                  <li>
                    Served as Trauma Fellowship Coordinator (set-up meetings and
                    interviews, grant submission)
                  </li>
                  <li>
                    Collected and researched both financial and incoming trauma
                    patient data daily; prepared reports by collecting and
                    analyzing information
                  </li>
                </ul>
              }
            />
            <Experience
              startDate={"July 2016"}
              endDate={"November 2018"}
              companyName={"Miami Bakery"}
              companyCity={"Miami, FL"}
              jobTitle={"Office Manager"}
              jobDescription={
                <ul>
                  <li>
                    Managed employee schedules, organized office functions and
                    oversaw daily operations
                  </li>
                  <li>
                    Reduced office expenses by 15% by communicating with vendors
                    and implementing inventory system
                  </li>
                  <li>
                    Developed procedures and training materials to streamline
                    the onboarding process and set clear employee expectations
                  </li>
                </ul>
              }
            />
            <Experience
              startDate={"February 2016"}
              endDate={"July 2018"}
              companyName={"Universal Engineering Sciences"}
              companyCity={"Miami, FL"}
              jobTitle={"Office Manager"}
              jobDescription={
                <ul>
                  <li>
                    Day-to-day running of the office at the administrative level
                    (trained, supervised and assigned work to 3+employees);
                    maintained uniform correspondence procedures and calendar
                    management
                  </li>
                  <li>
                    Maintained office productivity through proficient use of
                    appropriate software applications
                  </li>
                  <li>
                    Billed, invoiced and collected (upwards of $250k monthly)
                  </li>
                </ul>
              }
            />
            <Experience
              startDate={"June 2015"}
              endDate={"November 2015"}
              companyName={"Wreckless Apparel"}
              companyCity={"Tallahassee, FL"}
              jobTitle={"Office Assistant"}
              jobDescription={
                <ul>
                  <li>
                    Served as Interim Office Manager; primary point of contact.
                    Assessed customers' needs and explained services, processes,
                    procedures and guidelines
                  </li>
                  <li>
                    Managed calendar of events as well as daily operations;
                    Consistently met deadlines
                  </li>
                  <li>Created social media marketing material and forms</li>
                </ul>
              }
            />
            <Experience
              startDate={"May 2014"}
              endDate={"May 2015"}
              companyName={"Moonwater Pictures"}
              companyCity={"Miami, FL"}
              jobTitle={"Associate Producer"}
              jobDescription={
                <ul>
                  <li>
                    Assisted in production logistics and daily operations;
                    organized 10+ production personnel and wrote/edited scripts
                    weekly
                  </li>
                  <li>
                    Created shows digital content including behind the scenes
                    footage, photography and website only video
                  </li>
                  <li>
                    Consistently met strict production deadlines; 3 new sets
                    weekly
                  </li>
                  <li>Show: S.O.S. Salva Mi Casa</li>
                </ul>
              }
            />
            <Experience
              startDate={"May 2012"}
              endDate={"January 2015"}
              companyName={"Karma Kandy"}
              companyCity={"Tallahassee, FL"}
              jobTitle={"Founder/President"}
              jobDescription={
                <ul>
                  <li>Created and maintained company website (HTML, CSS)</li>
                  <li>
                    Designed and created new products; designed all print and
                    marketing materials
                  </li>
                  <li>
                    Procured new customers (2,000+) and maintained customer
                    relations
                  </li>
                </ul>
              }
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
