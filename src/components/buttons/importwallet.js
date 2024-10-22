import React from "react";
import { Button } from "react-bootstrap";
/**
 * This component will trigger import wallet function on click of the button.
 * @props onClick: -> calls the parent component function for submitting the value into the parent state.
 *
 */
function importwallet(props) {
  return (
    <Button onClick={props.onClick} id="btn-fixed">
      Import Existing Account
    </Button>
  );
}

export default importwallet;
