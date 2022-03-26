/*eslint-disable*/
import React, {useState} from 'react';
import './App.css';
import {Navbar, Container, Nav, NavDropdown, Offcanvas, Button, Form, FormControl} from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
 
function App() {
  let [shoes, shoes변경] = useState(Data);
  return (
    <>
   <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand href="#">ShoeShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>

   {/* 점보 */}
  <div className="background">
    <h1 style={{textAlign : "center"}}>20% Season Off</h1>
    <p style = {{textAlign : "center"}}>This is simple hero unit, single information </p>
    <Button variant="primary" style={{display : 'block', marginLeft : 'auto', marginRight  :'auto'}}>More</Button>{' '}
  </div>

  <Route path="/">
    <div>메인페이지</div>
  </Route> 
  <Route path="/detail">
    <div>디테일페이지</div>
  </Route>



  <div className="container">
    <div className="row">
    {
      shoes.map((a, i)=>{
        return <Card shoes={shoes[i]} i={i} key={i}/>
      })
    }
    </div>
  </div>
  </>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i +1 ) +'.jpg'} width="100%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}
export default App;
