import React from "react";
import { Container } from "react-bootstrap";

function dropdown(props) {
  return (
    <Container className="center">
      <select
        className="dropdown"
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      >
        <option value="https://api.algoexplorer.io" style={{ color: '#4CAF50' }}>Mainnet</option>
        <option value="https://api.testnet.algoexplorer.io" style={{ color: '#2196F3' }}>Testnet</option>
      </select>
    </Container>
  );
}

export default dropdown;
