import React from "react";
import { Button } from "react-bootstrap";
/**
 * This component will trigger generate wallet function on click of the button.
 * @props onClick: -> calls the parent component function for submitting the value into the parent state.
 *
 */
function generate(props) {
  return (
    <Button id="btn-fixed" onClick={props.onClick}>
      Generate Wallet Address
    </Button>
  );
}

export default generate;
