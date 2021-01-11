import React from 'react';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Shmuel from './pages/Shmuel'
import './App.css';


class App extends React.Component {
  render (){
  
   return (
     
    <Router>
        <Container fluid={true}>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link href="/Shmuel">Shmuel</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Esther">Esther</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Rivi">Rivi</Nav.Link>
          </Nav.Item>

        </Nav>
        </Container>

        <Route path="/Shmuel" render={() => <Shmuel/>}/>
      </Router>  
   )
  
  }
}

export default App;

