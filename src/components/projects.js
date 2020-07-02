import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  CardMenu,
  CardTitle,
  Button,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCatergories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://www.netclipart.com/pp/m/276-2768580_react-native-logo-png.png) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>This is a GitHub Finder React project</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/React-project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <a
                href="https://githubfinder23456777.netlify.app/"
                // eslint-disable-next-line
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://www.netclipart.com/pp/m/276-2768580_react-native-logo-png.png) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>This is a Contact Keeper React project</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/Contact-Keeper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://remembrance-sorry-47084.herokuapp.com/register"
                // eslint-disable-next-line
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://www.netclipart.com/pp/m/276-2768580_react-native-logo-png.png) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>This is a IT-Logger react project</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/IT-Logger"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is HTML/CSS</h1>
        </div>
      );
    } else if (this.state.activeTab === 2)
      return (
        <div>
          <h1>This is Python</h1>
        </div>
      );
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCatergories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
