import React, { Component } from "react";
import "./ScrollToSection.module.css";
import scrollToComponent from "react-scroll-to-component";
import { Button } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Grid } from "@material-ui/core";
import ToSection from "./ToSection1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this);
  }

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.FirstDisplay, {
      offset: 10,
      align: "bottom",
      duration: 1000,
    });
    scroller.on("end", () => console.log("Scrolling end!"));
  }

  render() {
    return (
      <Grid container>
        <Grid xs={12} md={12}>
          <AppBar color="inherit">
            <Toolbar>
              <Button onClick={this.scrollToTopWithCallback}>
                FirstDisplay
              </Button>
              <Button
                onClick={() =>
                  scrollToComponent(this.SecondDisplay, {
                    offset: 0,
                    align: "bottom",
                    duration: 500,
                    ease: "inExpo",
                  })
                }
              >
                SecondDisplay
              </Button>
              <Button
                onClick={() =>
                  scrollToComponent(this.ThirdDisplay, {
                    offset: -200,
                    align: "bottom",
                    duration: 1500,
                    ease: "inCirc",
                  })
                }
              >
                ThirdDisplay
              </Button>
              <Button
                onClick={() =>
                  scrollToComponent(this.FourthDisplay, {
                    offset: 0,
                    align: "bottom",
                    duration: 500,
                    ease: "inExpo",
                  })
                }
              >
                FourthDisplay
              </Button>
              <Button
                onClick={() =>
                  scrollToComponent(this.FifthDisplay, {
                    offset: 0,
                    align: "bottom",
                    duration: 1500,
                    ease: "inCirc",
                  })
                }
              >
                FifthDisplay
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <section
          className="violet"
          ref={(section) => {
            this.FirstDisplay = section;
          }}
          style={{ height: 500, paddingTop: 100 }}
        >
          <ToSection />
        </section>
        <section
          ref={(section) => {
            this.SecondDisplay = section;
          }}
        >
          <div> Section 2</div>
        </section>
        <section
          ref={(section) => {
            this.ThirdDisplay = section;
          }}
        >
          Section 3
        </section>
        <section
          ref={(section) => {
            this.FourthDisplay = section;
          }}
        >
          Section 4
        </section>
        <section
          ref={(section) => {
            this.FifthDisplay = section;
          }}
        >
          Section 5
        </section>
      </Grid>
    );
  }
}

export default App;
