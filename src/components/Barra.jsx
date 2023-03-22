import React ,{useContext}from 'react';
import { NavLink } from 'react-router-dom'
import ContextoGlobal from '../contexts/ContextoGlobal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



const Barra = () => {
   const  {totalPedido} = useContext(ContextoGlobal)
  return (
 
<Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand href="#home">
       <NavLink classsName={({ isActive }) => (isActive ? "viewActiva": "view")} to="/" >
         Pizza mamma mia
      </NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav " className='d-flex justify-content-end'>
    <Nav>
       
      <NavLink classsName={({ isActive }) => (isActive ? "viewActiva": "view")} to="/carrito" >
         Mi Carrito [{totalPedido}]
      </NavLink>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default Barra