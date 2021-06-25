import { Component } from "react";

class SubmitMessage extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    isDisabled: true,
  };
  handleSubmit=(e) =>{
    e.preventDefault();
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
        />
        <div className="input-group-append">
          <button
            className="btn submit-button"
            disabled={this.state.isDisabled}
          >
            SEND
          </button>
        </div>
      </form>
    );
  }
}

export default SubmitMessage;
