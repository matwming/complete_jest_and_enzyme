import React from "react";
import PropTypes from "prop-types";
/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/
export default function Congrats(props) {
 let message = <div data-test="component-congrats" />;
 if (props.success) {
  message = (
   <div data-test="component-congrats">
    <span data-test="congrats-message">Congratulations! You guessed the word!</span>
   </div>
  );
 }
 return <div>{message}</div>;
}

Congrats.propTypes = {
 success: PropTypes.bool.isRequired
};
