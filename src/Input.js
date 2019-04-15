import React, { Component } from "react";
import { connect } from "react-redux";
class Input extends Component {
 render() {
  return (
   <div>
    <button />
   </div>
  );
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
