import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Ruby on Rails</Tab>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>
      </div>
    );
  }
}

export default Projects;
