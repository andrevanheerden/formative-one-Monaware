import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <Nav className="flex-column">
      <Nav.Item>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#comparison">Comparison</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#timeline">Timeline</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;