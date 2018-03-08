import React from "react";

class Markdown extends React.Component {
  markdownRef = React.createRef();

  // componentDidMount() {
  //   this.props.= sampleMarkdown;
  // }

  handleChange = event => {
    // update markdownText
    //1. take a copy of the current markdownText
    let updatedMarkdown = this.props.markdownText;
    updatedMarkdown = this.markdownRef.value.value;
    this.props.updateMarkdown(updatedMarkdown);
  };
  render() {
    return (
      <div className="grid__col--6">
        <h2 className="headline--secondary">Markdown</h2>
        <textarea
          name="markdown"
          ref={this.markdownRef}
          type="text"
          rows="30"
          className="markdown"
          onChange={this.handleChange}
          value={this.props.markdownText}
        />
      </div>
    );
  }
}

export default Markdown;
