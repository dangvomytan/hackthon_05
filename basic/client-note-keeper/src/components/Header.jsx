import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><h1>Note App</h1></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header