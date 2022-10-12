import React from "react";
import "./Header.css";

// import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const  navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" variant="" >
      <Container fluid s>
        <Navbar.Brand href="/home" style={{ color: "blue" }}>
          Hariom Mahato
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{color:'blue'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <Nav.Link href="/home/work" style={{ color: "blue" }}>
              WORK
            </Nav.Link>
            <Nav.Link href="/home/contact" style={{ color: "blue" }}>
              CONTACT
            </Nav.Link>
          <Button variant="outline-danger" onClick={()=>{
            localStorage.clear();
            navigate('/')
          }}>
            logout
          </Button>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header;
