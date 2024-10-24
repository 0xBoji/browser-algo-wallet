import React from "react";
import { Navbar, Nav } from "react-bootstrap";
/**
 * This component is resposible for hyperlinking with Algorand faucet and Meld.gold website.
 *
 */
function navbar() {
  return (
    <Navbar id="nav-style">
      <Nav className="ml-auto">
        <Nav.Link
          id="footerHead"
          href="https://bank.testnet.algorand.network/"
          target="_blank"
        >
          Algorand Testnet Faucet
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default navbar;
