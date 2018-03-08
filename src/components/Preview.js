import React from "react";
import marked from "marked";

class Preview extends React.Component {
  getMarkdownText() {
    var rawMarkup = marked(this.props.markdownText, { sanitize: true });
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div className="grid__col--6">
        <h2 className="headline--secondary">Preview</h2>
        <div
          className="rendered"
          dangerouslySetInnerHTML={this.getMarkdownText()}
        />
      </div>
    );
  }
}

export default Preview;
