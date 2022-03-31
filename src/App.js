/* eslint-disable */
import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown, Offcanvas, Button, Form, FormControl} from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './Detail.js';

function App() {
  let [shoes, shoes변경] = useState(Data);
  return (
    <div>
   <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">ShoShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Switch>
  <Route exact path="/">
    {/* 점보 */}
  <div className="background">
    <h1 style={{textAlign : "center"}}>20% Season Off</h1>
    <p style = {{textAlign : "center"}}>This is simple hero unit, single information </p>
    <Button variant="primary" style={{display : 'block', marginLeft : 'auto', marginRight  :'auto'}}>More</Button>{' '}
  </div>

  <div className="container">
    <div className="row align-items-center">
    {
      shoes.map((a, i)=>{
        return <Card shoes={shoes[i]} i={i} key={i}/>
      })
    }
    </div>
  </div>
  </Route>

  <Route path="/detail/:id" > {/* /detail/:id  : 아무문자나 받겠다는 URL 작명법 */}
    <Detail shoes={shoes}/>
  </Route>

  <Route path="/:id" > {/* /모든문자 라는 경로를 의미 */}
  <div>아무거나적음이거볼래여</div>
  </Route>

  </Switch>


  {/* <Route path="어쩌구" component={Modal}></Route> */}

  </div>
  );
}


function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i +1 ) +'.jpg'} width="100%"/>
      <h4 style={{textAlign : "center"}}>{props.shoes.title}</h4>
      <p style={{textAlign : "center"}}>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}
export default App;
