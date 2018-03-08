import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Markdown from "./Markdown";
import Preview from "./Preview";
import sampleMarkdown from "../sample-markdown";

class App extends Component {
  state = {
    markdownText: sampleMarkdown,
    renderedText: ""
  };

  updateMarkdown = updatedMarkdown => {
    // 1. take a copy of the current state
    let markdownText = this.state.markdownText;
    //2. update that state
    markdownText = updatedMarkdown;
    // 3. Set that to state
    this.setState({ markdownText });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="grid__row">
            <Markdown
              markdownText={this.state.markdownText}
              updateMarkdown={this.updateMarkdown}
            />
            <Preview markdownText={this.state.markdownText} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
