import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <div>This is Ruby on Rails</div>;
    } else if (this.state.activeTab === 1) {
      return <div>This is React</div>;
    } else if (this.state.activeTab === 2) {
      return <div>This is HTML/CSS</div>;
    }
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
        <section className="projects-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
