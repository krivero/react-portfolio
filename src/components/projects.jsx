import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  Button,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "176px",
              background:
                "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center/cover"
            }}
          >
            United Way Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "white" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
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
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
