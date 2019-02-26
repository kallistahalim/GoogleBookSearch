import React from 'react';
import {InputGroup,FormControl, Jumbotron, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function BookSearch(){
    return(

<div>
<Jumbotron fluid>
  <Container>
    <div>
    <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
    </div>
  </Container>
</Jumbotron>
</div>
    )
}

export default BookSearch