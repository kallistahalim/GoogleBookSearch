import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar (){
    return(
<div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Book Search</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>Search</Nav.Link>
      <Nav.Link>Saved</Nav.Link>

      
    </Nav>


  </Navbar.Collapse>
</Navbar>
</div>
    );
}


    export default NavBar;