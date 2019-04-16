import React, { Component } from "react";
import { connect } from "react-redux";
class Input extends Component {
 render() {
  const content = this.props.success ? null : (
   <form className="form-inline">
    <input
     type="text"
     data-test="input-box"
     className="mb-2 mx-sm-3"
     id="word-guess"
     placeholder="enter guess"
    />
    <button type="submit" data-test="submit-button" className="btn btn-primary mb-2">
     Submit
    </button>
   </form>
  );
  return <div data-test="component-input">{content}</div>;
 }
}

const mapStateToProps = state => {
 return {
  success: state.success
 };
};
export default connect(
 mapStateToProps,
 null
)(Input);
