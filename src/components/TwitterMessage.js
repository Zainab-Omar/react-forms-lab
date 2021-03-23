import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {msg: ""};
  }

  handleChange = (event) => {
    this.setState({
      msg: event.target.value
    })
  }

  render() {

    let charNumber = this.props.maxChars - this.state.msg.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="message" id="message" value={this.state.msg} />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
