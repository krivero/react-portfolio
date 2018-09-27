import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <div className="header-color">
            <Header
              style={{ background: "black" }}
              title={
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Portfolio
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
          </div>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Kristina Rivero
              </Link>
            }
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
