import React from "react";
import { Button, Container } from "react-bootstrap";
/**
 * This component will trigger send transaction function on click of the button.
 * @props onClick: -> calls the parent component function for submitting the value into the parent state.
 *
 */

function sendTransaction(props) {
  return (
    <Container className="center" fluid>
      <Button 
        onClick={props.onClick} 
        type="submit" 
        id="btn-fixed-transparent"
        style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
      >
        Send Algos
      </Button>
    </Container>
  );
}

export default sendTransaction;
