import React from "react";

class Preview extends React.Component {
  render() {
    return (
      <div className="grid__col--6">
        <h2 className="headline--secondary">Preview</h2>
        <p className="rendered">{marked(this.props.markdownText)}</p>
      </div>
    );
  }
}

export default Preview;
