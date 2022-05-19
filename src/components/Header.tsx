
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate();
  return (
    <div> 
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className='navbar_Brand' title='перейти на главную' style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Concert CLUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <div className='custom_navlink link_1'><span>Версия для слабовидящих</span></div>
            <div className='custom_navlink link_2'>
            <span>Мой профиль</span>
            </div>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
  </div>
  )
}
